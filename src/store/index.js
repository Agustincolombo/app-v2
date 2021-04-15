import Vue from 'vue';
import Vuex from 'vuex';

import bandas from './modules/index';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        bandas,
    }
})