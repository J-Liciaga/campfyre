import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Logo from "./logo";

const meta = {
	title: "Components/Logo",
	component: Logo,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
} satisfies Meta<typeof Logo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
