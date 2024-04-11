import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchAllTasks, createTask, deleteTaskId, checkTaskCompletedId } from '@/api/tasksApi'

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
      await deleteTaskId(taskId)
    } catch (error) {
      console.error(error)
    }
  }

  async function checkTaskCompleted(taskId, isCompleted){
    try {
      console.log("Now checking:" + taskId + ". Its completed? " + isCompleted);
      await checkTaskCompletedId(taskId, isCompleted)
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
    deleteTask,
    checkTaskCompleted
  }
})
