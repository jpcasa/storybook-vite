<template>
	<div :class="classes" class="ck-tag" @click="onClick">
		<p>{{ label }}</p>
	</div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
	name: 'ck-tag',
	props: {
		label: {
			type: String,
			default: () => {
				return 'Hello World';
			}
		},
		type: {
			type: String,
			default: () => {
				return 'minimal';
			}
		},
		size: {
			type: String,
			default: () => {
				return 'medium';
			},
			validator: function (value) {
        return ['extrasmall', 'small', 'medium', 'large', 'extralarge'].indexOf(value) !== -1;
      },
		}
	},
	emits: ['clicked'],
	setup(props, { emit }) {
		props = reactive(props);
		return {
			classes: computed(() => ([
				props.type, `${props.size || 'medium'}`
			])),
      onClick() {
        emit('click');
      }
		}
	}
};
</script>

<style>
.ck-tag {
	display: inline-flex;	
	border-radius: 0.25rem;
}

.ck-tag p {
	margin: 0;
	position: relative;
	top: 1px;
}

.ck-tag.minimal {
	border: 1px solid #ADB8C6;
	color: #8795A1;
}

.ck-tag.blue {
	border: 1px solid #3A87F7;
	background-color: #EBF3FE;
	color: #3A87F7;
}

.ck-tag.extrasmall {
	font-size: 0.75rem;
	line-height: 1rem;
	padding: 0.25rem 0.75rem;
}

.ck-tag.small {
	font-size: 0.875rem;
	line-height: 1.25rem;
	padding: 0.3rem 0.875rem;
}

.ck-tag.medium {
	font-size: 1rem;
	line-height: 1.5rem;
	padding: 0.5rem 1rem;
}

.ck-tag.large {
	font-size: 1.125rem;
	line-height: 1.75rem;
	padding: 0.75rem 1.5rem;
}

.ck-tag.extralarge {
	font-size: 1.25rem;
	line-height: 1.75rem;
	padding: 1rem 2.5rem;
}
</style>