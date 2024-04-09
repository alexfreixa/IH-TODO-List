<script setup>
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore();

const taskTitle = ref('');

const _addTask = async () => {
    const task = {
        user_id: 'b353375f-f6bf-4e08-b7be-103076d9d8ac',
        title: taskTitle.value,
        is_complete: false,
    };
    await tasksStore.createNewTask(task);
    tasksStore.fetchTasks();
};

</script>

<template>
  <div class="m-auto text-center mt-4">
    <input type="text" v-model="taskTitle" class="text-black px-6 py-3 min-w-64">
    <button @click="_addTask" class="bg-secondary px-6 py-3">Add Task</button>
  </div>
</template>

<style scoped></style>