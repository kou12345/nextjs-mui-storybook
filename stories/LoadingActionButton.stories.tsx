import { LoadingActionButton } from "@/components/LoadingActionButton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoadingActionButton> = {
  title: "Components/LoadingActionButton",
  component: LoadingActionButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LoadingActionButton>;

export const Default: Story = {
  render: () => <LoadingActionButton />,
};
