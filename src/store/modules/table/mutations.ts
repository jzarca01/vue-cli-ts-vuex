import { MutationTree } from 'vuex';
import { TableState } from './types';

export const mutations: MutationTree<TableState> = {
    setMetadataVersion(state, { version }) {
      state.version = version;
      return state;
    },
    resetColumns(state) {
      state.columns = [];
    },
    setColumns(state, { columns }) {
      columns.map((column: any) => state.columns.push(column));
      return state;
    },
    addItem(state, { item }) {
      state.items.push(item);
      return state;
    },
    deleteItem(state, { item }) {
      state.items = state.items.filter((e) => e !== item);
      return state;
    },
    toggleEdit(state, { isEdit }) {
      state.toggleEdit = isEdit;
      return state;
    },
    toggleLoading(state, { isLoading }) {
      state.toggleLoading = isLoading;
      return state;
    },
    setObsoleteMetadata(state, { isObsolete }) {
      state.isObsolete = isObsolete;
      return state;
    },
  };
