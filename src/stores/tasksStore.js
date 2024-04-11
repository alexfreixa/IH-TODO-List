import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, createTask, deleteTaskId } from '@/api/tasksApi'

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

  async function deleteTask(taskId){
    try {
      console.log("Now deleting:" + taskId);
      await deleteTaskId(taskId)
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
    deleteTask
  }
})
