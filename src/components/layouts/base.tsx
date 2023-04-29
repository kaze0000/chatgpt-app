import { itemList } from "@/libs/drawer-item-list";
import { FC, ReactNode } from "react";

type ItemContainerProps = {
  listName: string;
  icon?: ReactNode;
  path: string;
};

const ItemContainer: FC<ItemContainerProps> = ({ listName, icon, path }) => {
  return (
    <li className="text-gray-500 p-4 border-b border-solid border-gray-200 font-bold">
      <a href={path}>
        <div className="flex items-center">
          {icon}
          {listName}
        </div>
      </a>
    </li>
  );
};

type Props = {
  children: React.ReactNode;
};

export const BaseLayout: FC<Props> = ({ children }) => {
  return (
    <div>
      <div className="grid grid-cols-3 h-screen">
        <ul className="col-span-1 bg-white py-10">
          {itemList.map((item) => (
            <ItemContainer
              key={item.listName}
              listName={item.listName}
              icon={item.icon}
              path={item.path}
            />
          ))}
        </ul>
        <div className="col-span-2 bg-white">{children}</div>
      </div>
    </div>
  );
};
