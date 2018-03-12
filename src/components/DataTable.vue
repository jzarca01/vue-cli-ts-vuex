<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <template v-for="(column, index) in columns">
        <el-table-column
          :key="index"
          :prop="column.field"
          :label="column.label"
          fixed sortable>
        </el-table-column>
    </template>
  </el-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class DataTable extends Vue {
  @Prop()
  private tableData: any[];

  @Prop()
  private columns: any[];
}
</script>