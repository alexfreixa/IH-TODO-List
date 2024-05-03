<script setup>
import { useTasksStore } from '@/stores/tasksStore'

const tasksStore = useTasksStore();

const { taskId } = defineProps({
    taskId: Number,
    isCompleted: Boolean,
    taskTitle: Text
})

const _deleteTask = async (taskId) => {
    await tasksStore.deleteTask(taskId);
    tasksStore.fetchTasks();
};

</script>

<template>
    <div class="actions flex flex-row [&>*>i]:text-white md:align-top items-center">
        <RouterLink :to="{ name: 'edit', params: { taskId: taskId } }" class="bg-blue px-2 py-1 md:px-6 md:py-3 "><i class="far fa-pencil"></i></RouterLink>
        <button @click="_deleteTask(taskId)" class="bg-red px-2 py-1 md:px-6 md:py-3"><i class="far fa-trash"></i></button>
    </div>
</template>

<style scoped></style>
