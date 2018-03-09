import Vue from 'vue';
import Vuex, { StoreOptions} from 'vuex';
import { RootState } from './types.d';
import createPersistedState from 'vuex-persistedstate';
import checkMetadataValidity from './plugins/checkMetadataValidity.plugin';

Vue.use(Vuex);

import { table } from './modules/table/';

const store: StoreOptions<RootState> = {
  modules: {
    table,
  },
  plugins: [
    createPersistedState({
      paths: ['table.version', 'table.columns'],
    }),
    checkMetadataValidity,
  ],
};

export default new Vuex.Store<RootState>(store);
