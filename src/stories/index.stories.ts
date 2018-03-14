import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import VueInfoAddon from 'storybook-addon-vue-info';

import Button from 'Components/Button.vue';
import DataTable from 'Components/DataTable.vue';

storiesOf("Button", module)
  .addDecorator(VueInfoAddon)
  .add("primary (default)", () => ({
    components: { Button },
    template: '<Button :onClick="action" name="buttonName" value="Button title" type="primary" />',
    methods: { action: action("clicked") }
  }))
  .add("success", () => ({
    components: { Button },
    template: '<Button :onClick="action" name="buttonName" value="Button title" type="success" />',
    methods: { action: action("clicked") }
  }))
  .add("info", () => ({
    components: { Button },
    template: '<Button :onClick="action" name="buttonName" value="Button title" type="info" />',
    methods: { action: action("clicked") }
  }))
  .add("warning", () => ({
    components: { Button },
    template: '<Button :onClick="action" name="buttonName" value="Button title" type="warning" />',
    methods: { action: action("clicked") }
  }))
  .add("danger", () => ({
    components: { Button },
    template: '<Button :onClick="action" name="buttonName" value="Button title" type="danger" />',
    methods: { action: action("clicked") }
  }))
  .add("plain", () => ({
    components: { Button },
    template: '<Button :onClick="action" name="buttonName" value="Button title" type="plain" />',
    methods: { action: action("clicked") }
  }))

storiesOf("DataTable", module)
  .addDecorator(VueInfoAddon)
  .add("default", () => ({
    components: { DataTable },
    template: `<DataTable :tableData="items" :columns="columns" />

      with columns: [
        {
          field: "id",
          label: "ID"
        },
        {
          field: "title",
          label: "Title"
        }
      ],

      items: [
        {
          id: 1,
          title: "Title 1"
        },
        {
          id: 2,
          title: "Title 2"
        }
      ]`,
    data() {
      return {
        columns: [
          {
            field: "id",
            label: "ID"
          },
          {
            field: "title",
            label: "Title"
          }
        ],
        items: [
          {
            id: 1,
            title: "Title 1"
          },
          {
            id: 2,
            title: "Title 2"
          }
        ]
      }
    }
  }))