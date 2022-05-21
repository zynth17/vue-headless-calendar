<script setup lang="ts">
import { inject } from 'vue';
import { format } from 'date-fns';
import type { MonthProps } from './props';

const props = withDefaults(defineProps<MonthProps>(), {
	monthFormat: 'MMMM yyyy',
	as: 'div',
});

const date = inject<Date>('date', new Date());
</script>

<template>
	<component :is="props.as">
		<slot :date="date">
			{{ format(date, props.monthFormat) }}
		</slot>
	</component>
</template>

<style scoped></style>
