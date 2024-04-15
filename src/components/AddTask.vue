<script setup>
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore();

const taskTitle = ref('');

const _addTask = async () => {
    const task = {
        user_id: '6d30cb8b-3ecf-4174-a1f9-7b071517fa57',
        title: taskTitle.value,
        is_complete: false,
    };
    await tasksStore.createNewTask(task);
    tasksStore.fetchTasks();
};

</script>

<template>
  <div class="m-auto text-center mt-4">
    <input type="text" v-model="taskTitle" placeholder="What do you want to do?" class="text-black px-6 py-3 min-w-64">
    <button @click="_addTask" class="bg-secondary px-6 py-3">Add Task</button>
  </div>
</template>

<style scoped></style>