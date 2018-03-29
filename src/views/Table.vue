<template>
  <div class="table">
    <img src="../assets/logo.png">
      <el-alert v-if="state.isEmpty" title="There are no data to display" type="info"></el-alert>
    <DataTable v-else :tableData="state.items" :columns="state.columns" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import { State, Action, Getter } from 'vuex-class';
import { TableState } from '@/store/modules/table/types';

import DataTable from 'Components/DataTable.vue';

const namespace: string = 'table';

@Component({
    components: {
        DataTable,
    },
})
export default class Table extends Vue {
    @State('table') public state: TableState;
    @Getter('getState', { namespace }) public getState: TableState;

    @Action('fetchData', { namespace }) public fetchData: any;
    @Action('fetchMetadata', { namespace }) public fetchMetadata: any;

    public async mounted() {
        if (!this.state.version) {
            this.fetchMetadata()
            .then(async () => await this.fetchData());
        } else {
            await this.fetchData();
        }
    }
}
</script>