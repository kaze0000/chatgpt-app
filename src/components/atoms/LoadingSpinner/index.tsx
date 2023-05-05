import { FC } from "react";

export const LoadingSpinner: FC = () => {
  return (
    <div className="w-16 h-16 border-t-4 border-b-4 border-indigo-500 rounded-full animate-spin"></div>
  );
};
