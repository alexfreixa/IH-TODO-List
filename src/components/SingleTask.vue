<script setup>
import Actions from './Actions.vue'
import { useTasksStore } from '@/stores/tasksStore'
import { useUserStore } from '@/stores/userStore'
const userStore = useUserStore();

defineProps({
  task: Object,
})

const userId = userStore.user.id;

const tasksStore = useTasksStore();

const _checkTaskCompleted = async (taskId, isCompleted) => {
    await tasksStore.checkTaskCompleted(taskId, isCompleted);
    tasksStore.fetchTasks(userId);
};

</script>

<template>
  <div id="item" class="flex text-black bg-white py-2 border-b border-black m-auto">
    
    <div class="flex justify-start w-1/12 items-center flex-nowrap [&>*>button>i]:text-white">
      <div class="">
        <button @click="_checkTaskCompleted(task.id, task.is_complete)" class="px-1 py-1 md:px-4 md:py-3 min-w-6 md:min-w-12" :class="{ 'bg-green': task.is_complete, 'bg-red': !task.is_complete }"><i class="far" :class="{ 'fa-check': task.is_complete, 'fa-xmark': !task.is_complete   }"></i></button>
      </div>
      <div id="id" class="text-right w-full ml-2 min-w-9 lg:block hidden">
        <span
          ><b>#{{ task.id }}</b>
        </span>
      </div>

    </div>

    <div class="ml-6 flex justify-start w-9/12 items-center flex-nowrap">
      
      <div id="title">
        <span>{{ task.title }}</span>
      </div>
    </div>

    <div class="flex justify-end align-middle md:w-2/12 md:align-top">
      <div id="actions" class="flex">
        <Actions :taskId="task.id" :isCompleted="task.is_complete"></Actions>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
