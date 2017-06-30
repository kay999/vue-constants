
export default {
	install(Vue, options) {
		Vue.mixin({
			beforeCreate() {
				const constants = this.$options.constants;
				if (!constants) return;

				for (const key in constants) {
					if (constants.hasOwnProperty(key)) this[key] = constants[key];
				}
			}
		});
	}
}
