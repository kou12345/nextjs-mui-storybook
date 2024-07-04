import { MultipleAutocompleteWithCheckbox } from "@/components/MultipleAutocompleteWithCheckbox";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MultipleAutocompleteWithCheckbox> = {
  title: "Components/MultipleAutocompleteWithCheckbox",
  component: MultipleAutocompleteWithCheckbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MultipleAutocompleteWithCheckbox>;

export const Default: Story = {
  render: () => <MultipleAutocompleteWithCheckbox />,
};
