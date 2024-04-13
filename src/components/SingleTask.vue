<script setup>
import Actions from './Actions.vue'
import { useTasksStore } from '@/stores/tasksStore'

defineProps({
  task: Object
})

const tasksStore = useTasksStore();

const _checkTaskCompleted = async (taskId, isCompleted) => {
    await tasksStore.checkTaskCompleted(taskId, isCompleted);
    tasksStore.fetchTasks();
};

</script>

<template>
  <div id="item" class="flex text-black bg-white py-2 border-b border-black w-3/4 m-auto">
    
    <div class="flex justify-start w-1/12 items-center flex-nowrap">
      <div id="id" class="">
        <button @click="_checkTaskCompleted(task.id, task.is_complete)" class="px-6 py-3" :class="{ 'bg-green': task.is_complete, 'bg-red': !task.is_complete }"><i class="far" :class="{ 'fa-check': task.is_complete, 'fa-xmark': !task.is_complete   }"></i></button>
      </div>
    </div>

    <div class="flex justify-start w-9/12 items-center flex-nowrap">
      <div id="id" class="">
        <span
          ><b>#{{ task.id }}</b>
        </span>
      </div>

      <div id="title">
        <span>&nbsp;&nbsp;{{ task.title }}</span>
      </div>
    </div>

    <div class="flex justify-end align-middle w-2/12">
      <div id="actions" class="flex">
        <Actions :taskId="task.id" :isCompleted="task.is_complete"></Actions>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
