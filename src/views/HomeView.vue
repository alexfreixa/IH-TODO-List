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
    <h1 class="text-xl m-auto font-black text-center pb-6">To-do</h1>
    <div class="flex justify-center flex-col m-auto w-3/4 bg-white text-black p-6 rounded-lg max-w-screen-lg">
      
      <br />

      <div id="item" class="flex text-black bg-white py-2 border-b border-black">
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
      <div id="tasks-list" v-if="tasks">
  <!-- This div will be rendered if 'tasks' is truthy (i.e., it exists and is not empty) -->
  <SingleTask v-if="tasks" v-for="task in tasks" :task="task" />
  <!-- The SingleTask component will be rendered for each task in the 'tasks' array -->
  <div v-else>
    <!-- If 'tasks' is falsy (i.e., it does not exist or is empty), show a loading message -->
    <p>Loading...</p>
  </div>
</div>

    </div>
    <div class="text-center pt-5">Total Tasks: {{ tasks.length }}</div>

    <AddTask></AddTask>
  </main>
</template>

<style scoped></style>

