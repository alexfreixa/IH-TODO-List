<script setup>

import { useTasksStore } from '@/stores/tasksStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { ref } from 'vue';

//import SingleTask from '@/components/SingleTask.vue';
import SingleTask from '../components/SingleTask.vue';

const tasksStore = useTasksStore();
const { tasks } = storeToRefs(tasksStore);

onMounted(() => {
	tasksStore.fetchTasks();
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
	<main>
		<h1>My personal Task List</h1>
		<br>
		<SingleTask v-for="task in tasks" :task="task"/>
		<br>
		<span>Total Tasks: {{ tasks.length }}</span>

	</main>
</template>

<style scoped>
</style>