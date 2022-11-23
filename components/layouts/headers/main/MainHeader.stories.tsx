import { ComponentMeta, ComponentStory } from '@storybook/react';
import MainHeader, { IMainHeader } from './MainHeader';
import { mockMainHeaderProps } from './MainHeader.mocks';

export default {
  title: 'layouts/headers/MainHeader',
  component: MainHeader,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof MainHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MainHeader> = (args) => (
  <MainHeader {...args} />
);

export const Usage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Usage.args = {
  ...mockMainHeaderProps.base,
} as IMainHeader;
