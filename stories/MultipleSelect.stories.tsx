import type { Meta, StoryObj } from "@storybook/react";
import { MultipleSelect } from "@components/MultipleSelect";
import { useState } from "react";

const meta: Meta<typeof MultipleSelect> = {
  title: "Components/MultipleSelect",
  component: MultipleSelect,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MultipleSelect>;

// デフォルトのオプション
const defaultOptions: string[] = [
  "Ten",
  "Twenty",
  "Thirty",
  "Forty",
  "Fifty",
  "Sixty",
  "Seventy",
  // "Eighty",
  // "Ninety",
  // "Hundred",
];

const MultipleSelectWithSHooks = () => {
  const [selectedValue, setSelectedValue] = useState<string[]>([]);

  const handleChange = (value: string[]) => {
    setSelectedValue(value);
  };

  return (
    <MultipleSelect
      values={selectedValue}
      onChange={handleChange}
      options={defaultOptions}
      label="Age"
    />
  );
};

// 基本的な使用例
export const Default: Story = {
  render: () => <MultipleSelectWithSHooks />,
};
