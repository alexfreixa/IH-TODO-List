<script setup>
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore();

const { taskId } = defineProps({
  taskId: Number
})


const _deleteTask = async (taskId) => {
    await tasksStore.deleteTask(taskId);
    tasksStore.fetchTasks();
};

const _checkCompleted = async (taskId) => {
    await tasksStore.deleteTask(taskId);
    tasksStore.fetchTasks();
};

</script>

<template>
<div class="actions flex flex-row">

  <button @click="_checkCompleted(taskId)" class="bg-green px-6 py-3"><i class="far fa-check"></i></button>
  <button @click="_editTask(taskId)" class="bg-blue px-6 py-3"><i class="far fa-pencil"></i></button>
  <button @click="_deleteTask(taskId)" class="bg-red px-6 py-3"><i class="far fa-trash"></i></button>
</div>
</template>

<style scoped>

</style>
