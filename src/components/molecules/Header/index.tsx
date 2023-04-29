import { FC, ReactNode } from "react";

type Props = {
  title: string;
  icon: ReactNode;
};

export const Header: FC<Props> = ({ icon, title }) => {
  return (
    <div className="bg-white p-4">
      <h1 className="text-2xl">
        <div className="flex items-center">
          {icon}
          {title}
        </div>
      </h1>
    </div>
  );
};
