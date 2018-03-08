import { fetchItems, fetchMetadata } from '../../common/requests'
import { DefineGetters, DefineMutations, DefineActions, Dispatcher, Committer } from 'vuex-type-helper'
import { TableState, TableMutations, TableGetters, TableActions } from './table.d'

const transformMetadata = (metadata:any) => {
  let result:Array<any> = []
  const keys:Array<string> = Object.keys(metadata)
  const values:Array<any> = Object.values(metadata)
  for (let i = 0; i < keys.length; i++) {
    result.push({
      field: keys[i],
      label: keys[i],
      type: values[i].type
    })
  }
  return result
}

const state: TableState = {
  version: 0,
  columns: [],
  items: [],
  toggleEdit: false,
  toggleLoading: false,
  isObsolete: false
}

const getters: DefineGetters<TableGetters, TableState> = {
  getState: state => {
    return state
  },
  getMetadata: state => {
    return state.version
  }
}

const mutations: DefineMutations<TableMutations, TableState> = {
  setMetadataVersion (state, { version }) {
    state.version = version
    return state
  },
  resetColumns (state) {
    state.columns = []
  },
  setColumns (state, { columns }) {
    columns.map(column => state.columns.push(column))
    return state
  },
  addItem (state, { item }) {
    state.items.push(item)
    return state
  },
  deleteItem (state, { item }) {
    state.items = state.items.filter(e => e !== item)
    return state
  },
  toggleEdit (state, { isEdit }) {
    state.toggleEdit = isEdit
    return state
  },
  toggleLoading (state, { isLoading }) {
    state.toggleLoading = isLoading
    return state
  },
  setObsoleteMetadata (state, { isObsolete }) {
    state.isObsolete = isObsolete
    return state
  }
}

const actions: DefineActions<TableActions, TableState, TableMutations, TableGetters> = {
  async fetchMetadata ({ commit }) {
    try {
      await commit('toggleLoading', { isLoading: true })
      const response = await fetchMetadata('somerandomurl')
      console.log(response)
      if (response.properties) {
        const props = transformMetadata(response.properties.items.items.properties)
        console.log('props', props)

        await commit('setColumns', {
          columns: props
        })
      }
    }
    catch (err) {
      console.log('err fetchmetadata', err)
    }
  },
  async fetchData ({ commit }) {
    try {
      await commit('toggleLoading', { isLoading: true })
      const response: any = await fetchItems('/enablon.8.7.Ref/odata/data/ho_Test/ho_Test')
      response.value.map((item: any) => commit('addItem', {
        item: item
      }))
      await commit('setMetadataVersion', {
        version: 1
      })
      await commit('toggleLoading', { isLoading: false })
    }
    catch (err) {
      console.log('err fetchdata', err)
    }
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
