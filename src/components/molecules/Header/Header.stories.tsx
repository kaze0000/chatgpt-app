import { Meta, StoryObj } from "@storybook/react";

import { MyPageIcon } from "@/libs/drawer-item-list";
import { Header } from ".";

const meta: Meta = {
  title: "Molecules/Header",
  component: Header,
  argTypes: {
    title: { control: "text" },
    icon: { control: { disable: false } }, //ReactNodeをそのままコントロールパネルで編集することが難しいので、iconプロパティを編集不可した
  },
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Mypage: Story = {
  args: {
    title: "マイページ",
    icon: <MyPageIcon />,
  },
};
