<script setup>

const { taskId, taskTitle } = defineProps({
  taskId: Number,
  taskTitle: Text
})

</script>

<template>
	<main>
		<h1>Editing task #{{ $route.params.taskId }}</h1>

		<div class="m-auto text-center mt-4">
			<input type="text" class="text-black px-6 py-3 min-w-64">
			<button @click="_addTask" class="bg-secondary px-6 py-3">Add Task</button>
		</div>

	</main>
</template>

<style scoped>
</style>