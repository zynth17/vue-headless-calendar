<script setup lang="ts">
import { inject } from 'vue';
import { format } from 'date-fns';
const date = inject<Date>('date', new Date());
</script>

<template>
	<div>
		<slot :date="date">
			{{ format(date, 'MMMM') }}
		</slot>
	</div>
</template>

<style scoped></style>
