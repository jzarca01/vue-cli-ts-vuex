import { GetterTree } from 'vuex';
import { TableState } from './types';
import { RootState } from '../../types';

export const getters: GetterTree<TableState, RootState> = {
    getState(state): TableState {
      return state;
    },
    getMetadata(state): number {
      return state.version;
    },
  };
