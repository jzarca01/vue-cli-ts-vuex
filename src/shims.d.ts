declare module "*.vue" {
  import Vue from "vue";
  export default Vue;
}

declare module "*.svg" {
  interface SVG {
    content: string;
    id: string;
    viewBox: string;
  }
  const svg: SVG;
  export default svg;
}

declare module "*.md" {
  const content: string;
  export default content;
}
