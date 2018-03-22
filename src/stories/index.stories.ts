import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
import { withKnobs, select, text } from "@storybook/addon-knobs/vue";
import { withNotes } from "@storybook/addon-notes";
import VueInfoAddon from "storybook-addon-vue-info";

import Button from "Components/Button.vue";

import DataTable from "Components/DataTable.vue";
import DataTableReadme from "./DataTable.md";

import Form from "Components/Form.vue";
import FormReadme from "./Form.md";

const stories = storiesOf("Storybook Knobs", module);
stories.addDecorator(withKnobs);

// success|primary|info|warning|danger|plain
storiesOf("Button", module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add("default", () => {
    const btnTitle = text("Button title", "Click me");
    const btnTypes = select(
      "Type",
      ["primary", "info", "warning", "danger", "plain"],
      "primary"
    );
    return {
      components: { Button },
      template: `<Button
        :onClick="action"
        name="buttonName"
        value="${btnTitle}"
        type="${btnTypes}"
      />`,
      methods: { action: action("clicked") }
    };
  });

storiesOf("DataTable", module)
  .addDecorator(VueInfoAddon)
  .add(
    "default",
    withNotes(DataTableReadme)(() => ({
      components: { DataTable },
      template: `<DataTable :tableData="items" :columns="columns" />`,
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
        };
      }
    }))
  );

storiesOf("Form", module)
  .addDecorator(VueInfoAddon)
  .add(
    "default",
    withNotes(FormReadme)(() => ({
      components: { Form },
      template: `<Form :items="items" :model="model" />`,
      data() {
        return {
          items: [
            {
              name: "id"
            },
            {
              name: "title"
            }
          ],
          model: {
            id: 1,
            title: "Title 1"
          }
        };
      }
    }))
  );
