<script setup>
import Actions from './Actions.vue'

defineProps({
  task: Object
})
</script>

<template>
  <div id="item" class="flex text-black bg-white px-4 py-2 border-b border-black w-3/4 m-auto">
    <div class="flex justify-start w-4/5 items-center flex-nowrap">
      <div id="id" class="">
        <span
          ><b>#{{ task.id }}</b> -
        </span>
      </div>

      <div id="title">
        <span>&nbsp;{{ task.title }}</span>
      </div>
    </div>

    <div class="flex justify-end align-middle w-1/5">
      <div id="actions" class="flex">
        <Actions :taskId="task.id"></Actions>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
