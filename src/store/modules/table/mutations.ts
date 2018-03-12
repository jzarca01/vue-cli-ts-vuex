import { MutationTree } from 'vuex';
import { TableState } from './types';

export const mutations: MutationTree<TableState> = {
    setMetadataVersion(state, { version }): TableState {
      state.version = version;
      return state;
    },
    resetColumns(state): TableState {
      state.columns = [];
      return state;
    },
    setColumns(state, { columns }): TableState {
      columns.map((column: any) => state.columns.push(column));
      return state;
    },
    addItem(state, { item }): TableState {
      state.items.push(item);
      return state;
    },
    deleteItem(state, { item }): TableState {
      state.items = state.items.filter((e) => e !== item);
      return state;
    },
    toggleEdit(state, { isEdit }): TableState {
      state.toggleEdit = isEdit;
      return state;
    },
    toggleLoading(state, { isLoading }): TableState {
      state.toggleLoading = isLoading;
      return state;
    },
    setObsoleteMetadata(state, { isObsolete }): TableState {
      state.isObsolete = isObsolete;
      return state;
    },
  };
