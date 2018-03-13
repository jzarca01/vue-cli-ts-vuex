import Vue from 'vue';
import chai, { expect } from 'chai';
import sinon, { SinonStub } from 'sinon';
import sinonChai from 'sinon-chai';
import { mount, createLocalVue, MountOptions, Wrapper } from '@vue/test-utils';

import Vuex, { Store, StoreOptions, ActionTree, MutationTree} from 'vuex';
import { RootState } from '@/store/types.d';

chai.use(sinonChai);

import Table from 'Views/Table.vue';
import { TableState } from '@/store/modules/table/types';

const localVue: typeof Vue = createLocalVue();
localVue.use(Vuex);

describe('Component: Table.vue', () => {
  let wrapper: any;
  let store: Store<any>;
  let actions: ActionTree<any, any>;
  let mutations: MutationTree<any>;
  let fetchMetaStub: SinonStub;
  let fetchDataStub: SinonStub;
  let toggleLoadingStub: SinonStub;
  let goToFormStub: SinonStub;

  beforeEach(() => {
    fetchMetaStub = sinon.stub();
    fetchDataStub = sinon.stub();
    toggleLoadingStub = sinon.stub();
    goToFormStub = sinon.stub();

    actions = {
      fetchMetadata: fetchMetaStub,
      fetchData: fetchDataStub,
    };
    mutations = {
      toggleLoading: toggleLoadingStub,
    };
    store = new Vuex.Store({
      modules: {
        table: {
          namespaced: true,
          state: {
            version: null,
            columns: [],
            items: [],
            toggleLoading: false,
          },
          getters: {
            getState: (state) => state,
            getMetadata: (state) => state.version,
          },
          actions: actions,
          mutations: mutations,
        },
      },
    });
    wrapper = mount(Table, {
      store,
      localVue,
    });
  });

  it('should render Table.vue without crashing', () => {
    expect(wrapper.contains('div')).to.equal(true);
  });

  it('should call getMetadata when mounted without version', () => {
    expect(fetchMetaStub).to.have.been.calledOnce;
  });

  it('should not call getMetadata when mounted with version', () => {
    fetchMetaStub.reset();
    store.replaceState({
      table: {
        version: 1,
      },
    });
    expect(fetchMetaStub).not.to.have.been.called;
  });
});
