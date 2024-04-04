<script setup>

import Actions from './Actions.vue'

defineProps({
  task: Object
});

</script>

<template>
  <div class="task">

    <div class="body">
      <div class="title">
        <span>{{ task.title }}</span>
      </div>
      <div class="completion">
        <span>{{ task.complete }}</span>
      </div>

      <div class="actions">
        <Actions></Actions>
      </div>
      
    </div>

  </div>
</template>

<style scoped>

</style>
