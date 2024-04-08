<script setup>
import Actions from './Actions.vue'

defineProps({
  task: Object
})
</script>

<template>
  <div id="item" class="flex text-black bg-white px-4 py-2 border-b border-black w-3/4">
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
