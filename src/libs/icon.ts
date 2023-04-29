import { ReactNode } from "react";
import { itemList } from "./drawer-item-list";

export const getIcon: (path: string) => ReactNode = (path) =>
  itemList.find((item) => item.path === path)?.icon ?? "";
