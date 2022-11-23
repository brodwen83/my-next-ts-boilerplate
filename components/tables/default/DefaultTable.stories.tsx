import { ComponentMeta, ComponentStory } from '@storybook/react';
import DefaultTable, { IDefaultTable } from './DefaultTable';
import { mockDefaultTableProps } from './DefaultTable.mocks';

export default {
  title: 'tables/DefaultTable',
  component: DefaultTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof DefaultTable>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DefaultTable> = (args) => (
  <DefaultTable {...args} />
);

export const Usage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Usage.args = {
  ...mockDefaultTableProps.base,
} as IDefaultTable;
