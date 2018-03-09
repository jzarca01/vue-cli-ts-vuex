<template>
  <div class="table">
    <img src="../assets/logo.png">
    <DataTable v-if="state.items.length" :tableData="state.items" :columns="state.columns" />
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

    @Action('fetchData', { namespace}) public getData: any;
    @Action('fetchMetaData', { namespace}) public getMetaData: any;

    @Getter('getState', { namespace }) public getState: TableState;

    public async mounted() {
        if (!this.state.version) {
            this.getMetaData()
            .then(async () => await this.getData());
        } else {
            await this.getData();
        }
    }
}
</script>