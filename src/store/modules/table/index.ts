import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';

import { TableState } from './types';
import { RootState } from '@/store/types';

const namespaced: boolean = true;

export const state: TableState = {
  version: 0,
  columns: [],
  items: [],
  toggleEdit: false,
  toggleLoading: false,
  isObsolete: false,
  isEmpty: false
};

export const table: Module<TableState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
