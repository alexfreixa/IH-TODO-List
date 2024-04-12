<script setup>
import { useTasksStore } from '@/stores/tasksStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { ref } from 'vue'

//import SingleTask from '@/components/SingleTask.vue';
import SingleTask from '../components/SingleTask.vue'
import AddTask from '../components/AddTask.vue'

const tasksStore = useTasksStore()
const { tasks } = storeToRefs(tasksStore)

onMounted(() => {
  tasksStore.fetchTasks()
})

</script>

<template>
  <main class="w-full">
    <br />
    <div class="flex justify-center flex-col">
      <h1 class="text-xl m-auto">My personal Task List</h1>
      <br />

      <div id="item" class="flex text-black bg-white px-4 py-2 border-b border-black w-3/4 m-auto">
        <div class="flex justify-start w-4/5">
          <div id="id" class="">
            <span><b>Task</b> </span>
          </div>
        </div>

        <div class="flex justify-end w-1/5">
          <div id="completion">
            <span><b>Actions</b></span>
          </div>
        </div>
      </div>

      <div id="tasks-list">
        <SingleTask v-for="task in tasks" :task="task" />
      </div>
    </div>
    <div class="text-center pt-5">Total Tasks: {{ tasks.length }}</div>

    <AddTask></AddTask>
  </main>
</template>

<style scoped></style>
