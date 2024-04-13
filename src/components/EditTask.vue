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

onMounted(async () => {
  await tasksStore.fetchTaskId(taskId.value);
  taskTitle.value = task.value.title;
});

const _editTask = async () => {
    const updatedTask = {
        title: taskTitle.value
    };
    await tasksStore.updateTask(taskId.value, updatedTask.title);
    router.push('/');
};
</script>

<template>
  <div class="m-auto text-center mt-4" v-if="task">
    <h1>Editing task #{{ taskId }}</h1>
    <input type="text" v-model="taskTitle" class="text-black px-6 py-3 min-w-64">
    <button @click="_editTask" class="bg-secondary px-6 py-3">Update</button>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>