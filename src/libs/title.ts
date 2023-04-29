import { itemList } from "./drawer-item-list";

export const getTitle: (path: string) => string = (path) =>
  itemList.find((item) => item.path === path)?.listName ?? "";
