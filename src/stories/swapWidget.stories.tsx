import ResponsiveContainer from "@/components/ui/ResponsiveContainer";
import SwapWidgets from "@/components/widgets/swap-widget";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Widgets/SwapWidgets",
  component: SwapWidgets,
  argTypes: {},
  parameters: {
    layout: "centered",
  },
  args: {
    token: "",
  },
  render: (arg) => (
    <ResponsiveContainer viewport="md">
      <SwapWidgets />
    </ResponsiveContainer>
  ),
} satisfies Meta<typeof SwapWidgets>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
