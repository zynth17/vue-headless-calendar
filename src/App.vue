<script setup lang="ts">
import Calendar from './components/Calendar.vue';
import MonthTitle from './components/MonthTitle.vue';
import ButtonNext from './components/ButtonNext.vue';
import ButtonPrev from './components/ButtonPrev.vue';
</script>

<template>
	<div class="wrapper">
		<Calendar>
			<div>
				<MonthTitle />

				<ButtonPrev />
				<ButtonNext />
			</div>
		</Calendar>
	</div>
</template>

<style></style>
