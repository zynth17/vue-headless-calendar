<script setup lang="ts">
import Calendar from './components/Calendar.vue';
import MonthTitle from './components/MonthTitle.vue';
import ButtonNext from './components/ButtonNext.vue';
</script>

<template>
	<div class="wrapper">
		<Calendar>
			<MonthTitle />

			<ButtonNext />
		</Calendar>
	</div>
</template>

<style></style>
