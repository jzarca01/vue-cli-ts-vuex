declare module "@storybook/addon-knobs/vue" {
  import { StoryDecorator } from "@storybook/vue";
  export const text: (name: string, value: string) => any;
  export const select: (name: string, options: {}, value: string) => any;
  export const withKnobs: StoryDecorator;
}
