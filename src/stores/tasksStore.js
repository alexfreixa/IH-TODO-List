import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, createTask } from '@/api/tasksApi'

export const useTasksStore = defineStore('tasks', () => {
  // State
  const tasks = ref([])

  // Getters

  // Actions
  async function fetchTasks() {
    try {
      const data = await fetchAllTasks();
      tasks.value = data;
    } catch (error) {
      console.error(error)
    }
  }

  async function createNewTask(task){
    try {
      console.log(task);
      await createTask(task)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    // State
    tasks,
    // Getters
    // Actions
    fetchTasks,
    createNewTask,
  }
})
