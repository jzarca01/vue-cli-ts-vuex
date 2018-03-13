<template>
  <div class="layout-padding">
    <div class="form">
        <template v-for="(item, index) in items">
            {{item.name}}
            <el-input
                v-bind:key="index"
                :placeholder="item.name"
                v-model="model[item.name]"
                clearable>
            </el-input>
        </template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Form extends Vue {
    @Prop()
    private items: Array<any>;

    @Prop()
    private model: any;
}
</script>