import { ActionTree } from 'vuex';
import { TableState } from './types';
import { RootState } from '../../types';

import { fetchItems, fetchMetadata } from 'src/common/requests';
import { transformMetadata } from './utils';

export const actions: ActionTree<TableState, RootState> = {
    async fetchMetadata({ commit }): Promise<any> {
      try {
        await commit('toggleLoading', { isLoading: true });
        const response = await fetchMetadata('somerandomurl');
        if (response.properties) {
          const props = transformMetadata(response.properties.items.items.properties);

          await commit('setColumns', {
            columns: props,
          });
        }
      } catch (err) {
        console.error('err fetchmetadata', err);
      }
    },
    async fetchData({ commit }): Promise<any> {
      try {
        await commit('toggleLoading', { isLoading: true });
        // const response: any = await fetchItems('/enablon.8.7.Ref/odata/data/ho_Test/ho_Test')
        const response: any = await fetchItems('/items');
        response.items.map((item: any) => commit('addItem', {
          item,
        }));
        await commit('setMetadataVersion', {
          version: 1,
        });
        await commit('toggleLoading', { isLoading: false });
      } catch (err) {
        console.error('err fetchdata', err);
      }
    },
  };
