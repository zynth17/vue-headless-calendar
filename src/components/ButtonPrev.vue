<script setup lang="ts">
import { addMonths, startOfMonth } from 'date-fns';
import { inject, type Ref } from 'vue';

const date = inject<Ref<Date>>('date');
const prevMonth = () => {
	if (!date?.value) return;

	date.value = startOfMonth(addMonths(date.value, -1));
};
</script>

<template>
	<button @click="prevMonth">
		<slot> Previous </slot>
	</button>
</template>

<style scoped></style>
