<script setup>

import { useTasksStore } from '@/stores/tasksStore';
import { storeToRefs } from 'pinia';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const tasksStore = useTasksStore();
const { task } = storeToRefs(tasksStore);
const router = useRouter();
const taskId = ref(router.currentRoute.value.params.taskId);
const taskTitle = ref('');

onMounted(() => {
  tasksStore.fetchTaskId(taskId.value);
});

const _editTask = async () => {
    const task = {
        title: taskTitle.value
    };
    await tasksStore.updateTask(taskId.value, task.title);
    tasksStore.fetchTasks();
};

</script>

<template>
  <div class="m-auto text-center mt-4" v-if="task">
    <h1>Editing task #{{ $route.params.taskId }}</h1>
    <h2>This is the title: {{ task.title }}</h2>
    <input type="text" v-model="taskTitle" class="text-black px-6 py-3 min-w-64">
    <button @click="_editTask" class="bg-secondary px-6 py-3">Update</button>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<style scoped></style>