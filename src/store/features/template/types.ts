export interface IRoute {
  id: number;
  route: `/${string}`;
  pageId: number;
}

export interface ITargetNode {
  value: string;
  props: any;
  children: string | INode | INode[];
  target: ITarget;
}

export interface ITargetLink {
  [target: string]: ITargetNode;
}

export interface ITarget {
  value: string;
  format: INode | INode[];
}

export interface INode {
  value: string;
  props: any;
  children: string | INode | INode[];
  target?: ITarget;
}

export interface IPage {
  id: number;
  node: INode | INode[];
}

export interface templateState {
  template: {
    routes: IRoute[];
    pages: IPage[];
  };
  targetNames: string[];
  currentTarget: string;
  targetLinks: ITargetLink;
  currentTargetNode: INode | null;
}