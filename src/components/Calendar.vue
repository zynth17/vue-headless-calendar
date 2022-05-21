<script setup lang="ts">
import {
	endOfMonth,
	endOfWeek,
	startOfMonth,
	startOfToday,
	startOfWeek,
} from 'date-fns';
import { provide, ref, type Ref } from 'vue';
interface Props {
	startDate?: Date;
}
const props = defineProps<Props>();
const date = ref(props.startDate ?? startOfToday());
const startDate = ref(startOfWeek(startOfMonth(date.value)));
const endDate = ref(endOfWeek(endOfMonth(date.value)));

provide<Ref<Date>>('date', date);
</script>

<template>
	<div>
		<slot />
	</div>
</template>

<style scoped></style>
