# vue-constants
Adds a constants declaration-section to vue components. 

This allows you to better state your intent and also to avoid the overhead of vue creating observers on non-changing values.

Install via 

    npm install vue-constants

Enable it in your project via

    import VueConstants from 'vue-constants'
    Vue.use(VueConstants);

Then you can declare your constants (for example in a vue-file) as

    export default {
      constants: {
        field1: value1, 
        ...
      }
    }

Constants defined this way are used like any data property (for example by `this.field1` in code or simply `field1` in templates) but there is no observation.
