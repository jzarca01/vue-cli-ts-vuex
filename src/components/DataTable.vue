<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column label="Operations" fixed="left" >
      <template slot-scope="scope">
        <svg style="height:16px; width:16px;" width:viewBox="editIcon.viewBox">
          <use :xlink:href="'#' + editIcon.id" />
        </svg>
      </template>
    </el-table-column>
    <el-table-column v-for="(column, index) in columns"
      :key="index"
      :prop="column.field"
      :label="column.label"
      fixed sortable>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import editIcon from "assets/edit.svg";

@Component
export default class DataTable extends Vue {
  private editIcon = editIcon;
  @Prop() private tableData: any[];

  @Prop() private columns: any[];
}
</script>