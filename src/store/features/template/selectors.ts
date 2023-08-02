import { RootState } from "../../../store";

module Selectors {
  export const routes = (s: RootState) => s.template.template.routes;
  export const pages = (s: RootState) => s.template.template.pages;

  export const targetNames = (s: RootState) => s.template.targetNames;
  export const currentTarget = (s: RootState) => s.template.currentTarget;
  export const targetLinks = (s: RootState) => s.template.targetLinks;
  export const currentTargetNode = (s: RootState) => s.template.currentTargetNode;
}

export default Selectors;
