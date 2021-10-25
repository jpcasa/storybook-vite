import CkTag from './index.vue';

export default {
	title: 'Example/Tag',
	component: CkTag,
	// More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
	argTypes: {
	onClick: { action: 'clicked' },
	  size: {
			control: { type: 'radio' },
			options: ['extrasmall', 'small', 'medium', 'large', 'extralarge'],
	  },
		color: {
			control: { type: 'select' },
			options: ['blue', 'green', 'orange', 'red', 'gray', 'minimal', 'disabled'],
	  },
  },
};

const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { CkTag },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<ck-tag v-bind="args" />',
});

export const Minimal = Template.bind({});
Minimal.args = {
  label: 'Tag Minimal',
	type: 'minimal'
};

export const Blue = Template.bind({});
Blue.args = {
  label: 'Tag Blue',
	type: 'blue'
};