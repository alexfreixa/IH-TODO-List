<script setup>

import { useTasksStore } from '@/stores/tasksStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const tasksStore = useTasksStore();
const { tasks } = storeToRefs(tasksStore);

onMounted(() => {
	tasksStore.fetchTasks();
})

console.log(tasks);

</script>

<template>
	<main>
		<h1>Home View!</h1>
	</main>
</template>

<style scoped>
</style>