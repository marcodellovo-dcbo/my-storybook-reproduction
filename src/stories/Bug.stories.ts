// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Bug from './bug.component';

export default {
    title: 'Bug',
    component: Bug,
} as Meta;

const Template: Story<Bug> = (args: Bug) => ({
    props: args,
});

export const BugCase = Template.bind({});
BugCase.args = {
    correctAnswers: [],
};
