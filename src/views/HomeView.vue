<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { ref } from 'vue'

//import SingleTask from '@/components/SingleTask.vue';
import SingleTask from '../components/SingleTask.vue'

const tasksStore = useTasksStore()
const { tasks } = storeToRefs(tasksStore)

onMounted(() => {
  tasksStore.fetchTasks()
})

/*const taskList = ref([
    {
		id : 0,
		title: "Buscar proveedores de refrescos nuevos.",
		is_complete: false,
    },
    {
		id : 1,
		title: "Hacer las pruebas de sonido.",
		is_complete: false,
    },
	{
		id : 2,
		title: "Imprimir contratos de los camareros",
		is_complete: true,
    },
]);*/
</script>

<template>
  <main class="w-full">
    <br />
	<div class="flex justify-center flex-col">
    <h1 class="text-xl">My personal Task List</h1>
    <br />
    <div id="tasks-list">
      <SingleTask v-for="task in tasks" :task="task" />
    </div>
</div>
    <div class="text-center pt-5">Total Tasks: {{ tasks.length }}</div>
  </main>
</template>

<style scoped></style>
