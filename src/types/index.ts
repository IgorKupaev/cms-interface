export type TChildren = {
  value: string;
  props: any;
  children: TChildren | string;
};

export type TChildrenWithTarget = {
  value: string;
  props: any;
  children: `TARGET_${string}`;
};

export type TFormat = {
  children: TChildren | string;
};
