import { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

const meta: Meta = {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    primary: { control: "boolean" },
    size: {
      // Storybook のコントロールパネルでsizeを選択できるようにする
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    label: "Button",
  },
};

export const Medium: Story = {
  args: {
    size: "medium",
    label: "Button",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    label: "Button",
  },
};
