export type WithClassName<T = unknown> = T & {
  className?: string;
};

export type WithId<T = unknown> = T & {
  id: string;
};
