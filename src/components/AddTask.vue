<script setup>
import { ref, defineProps } from 'vue'
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore()

const props = defineProps({
  userId: Number
})

const taskTitle = ref('');

const _addTask = async () => {
  const task = {
    user_id: props.userId,
    title: taskTitle.value,
    is_complete: false,
  };
  await tasksStore.createNewTask(task);
  tasksStore.fetchTasks(props.userId);
  
};
</script>

<template>
  <div class="m-auto text-center mt-4">
    <input type="text" v-model="taskTitle" placeholder="What do you want to do?" class="text-black px-6 py-3 min-w-64">
    <button @click="_addTask" class="bg-secondary px-6 py-3">Add Task</button>
  </div>
</template>

<style scoped></style>
