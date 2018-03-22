<template>
  <el-button :ref="name" :name="name" :type="type" round @click="onClick" >{{value}}</el-button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop() private onClick?: () => void;

  @Prop() private name?: string;

  @Prop() private value: string;

  // possible values: plain|primary|success|info|warning|danger
  @Prop({ default: "primary" })
  private type: string;
}
</script>