import { MultipleAutocomplete } from "@/components/MultipleAutocomplete";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MultipleAutocomplete> = {
  title: "Components/MultipleAutocomplete",
  component: MultipleAutocomplete,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MultipleAutocomplete>;

export const Default: Story = {
  render: () => <MultipleAutocomplete />,
};
