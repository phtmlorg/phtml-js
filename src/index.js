import phtml from 'phtml';
import babel from '@babel/core';
import adjustSourceMap from './lib/adjust-source-map';

export default new phtml.Plugin('phtml-js', opts => {
	const plugins = [].concat(Object(opts).plugins || []);
	const presets = [].concat(Object(opts).presets || []);
	const sourceMapAttributes = Boolean(Object(opts).sourceMapAttributes);
	const globalTransformOptions = 'transformOptions' in Object(opts) ? Object.assign({}, Object(opts).transformOptions) : { sourceMaps: true };

	const map = new WeakMap();

	return {
		Element(element, result) {
			const promises = map.get(result) || map.set(result, []).get(result);

			element.attrs.forEach(attr => {
				if (isOnAttribute(attr)) {
					promises.push(
						processScript(attr.value, element, sourceMapAttributes).then(js => {
							attr.value = js;
						})
					);
				}
			});

			if (isScriptElement(element)) {
				if (!element.nodes.length) {
					element.nodes.append('');
				}

				const target = element.nodes[0];
				const source = target.data;

				promises.push(
					processScript(source, element).then(js => {
						target.data = js;
					})
				);
			}
		},
		Root(root, result) {
			const promises = map.get(result) || map.set(result, []).get(result);

			return Promise.all(promises);
		}
	};

	function processScript(source, node, isInline) {
		const transformOpts = Object.assign({
			filename: node.source.input.from,
			plugins,
			presets
		}, globalTransformOptions);

		return babel.transformAsync(source, transformOpts).then(
			result => {
				if (globalTransformOptions.sourceMaps === true && !isInline) {
					const inputHTML = node.source.input.html;
					const lineOffset = (inputHTML.slice(0, node.source.startOffset).match(/\n/g) || []).length;
					const offsetMap = adjustSourceMap(JSON.stringify(result.map), lineOffset);
					result.map.sourcesContent[0] = inputHTML;
					const sourceMapBase64 = Buffer.from(JSON.stringify(offsetMap)).toString('base64');
					const sourceMap = `\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,${sourceMapBase64}`;

					return `${result.code}${sourceMap}`
				}

				return result.code;
			}
		);
	}
});

function isScriptElement(node) {
	return /^script$/.test(node.name) && node.nodes.length <= 1;
}

function isOnAttribute(attr) {
	return /^on[\W\w]/.test(attr.name);
}
