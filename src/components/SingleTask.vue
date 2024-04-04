<script setup>
import Actions from './Actions.vue'

defineProps({
  task: Object
})
</script>

<template>
  <div id="task-body" class="flex text-black bg-white">
    <div id="id">
      <span>#{{ task.id }} - </span>
    </div>

    <div id="title">
      <span> {{ task.title }}</span>
    </div>

    <div id="completion">
      <span>{{ task.complete }}</span>
    </div>
    <div id="actions">
      <Actions></Actions>
    </div>
  </div>
</template>

<style scoped></style>
