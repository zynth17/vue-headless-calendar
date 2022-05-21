<script setup lang="ts">
import {
	eachDayOfInterval,
	endOfMonth,
	endOfWeek,
	startOfMonth,
	startOfToday,
	startOfWeek,
} from 'date-fns';
import { provide, ref, type Ref } from 'vue';
import type { CalendarProps } from './props';

const props = withDefaults(defineProps<CalendarProps>(), {
	as: 'div',
});
const date = ref<Date>(props.startDate ?? startOfToday());
const startDate = ref<Date>(startOfWeek(startOfMonth(date.value)));
const endDate = ref<Date>(endOfWeek(endOfMonth(date.value)));
const dateInterval = ref<Date[]>(
	eachDayOfInterval({
		start: startDate.value,
		end: endDate.value,
	}),
);

provide<Ref<Date>>('date', date);
</script>

<template>
	<div>
		<slot
			:date="date"
			:start-date="startDate"
			:end-date="endDate"
			:date-interval="dateInterval"
		/>
	</div>
</template>

<style scoped></style>
