import { ref } from 'vue'
import { defineStore } from 'pinia'

import {
  fetchAllTasks,
  createTask,
  deleteTaskId,
  checkTaskCompletedId,
  fetchWithTaskId,
  updateTaskTitle
} from '@/api/tasksApi'
export const useTasksStore = defineStore('tasks', () => {
  // State
  const tasks = ref([])
  const task = ref([])

  // Getters

  // Actions

  //Fetch All Tasks
  async function fetchTasks(userId) {
    try {
      const data = await fetchAllTasks(userId)
      tasks.value = data;
    } catch (error) {
      console.error(error)
    }
  }

  //Fetch Task with specific ID
  async function fetchTaskId(id) {
    try {
      const data = await fetchWithTaskId(id)
      task.value = data
    } catch (error) {
      console.error(error)
    }
  }

  async function createNewTask(task) {
    try {
      await createTask(task)
    } catch (error) {
      console.error(error)
    }
  }

  async function updateTask(id, title) {
    try {
      await updateTaskTitle(id, title)
    } catch (error) {
      console.error(error)
    }
  }

  async function deleteTask(taskId) {
    try {
      await deleteTaskId(taskId)
    } catch (error) {
      console.error(error)
    }
  }

  async function checkTaskCompleted(taskId, isCompleted) {
    try {
      await checkTaskCompletedId(taskId, isCompleted)
    } catch (error) {
      console.error(error)
    }
  }

  return {
    // State
    tasks,
    task,
    // Getters
    // Actions
    fetchTasks,
    fetchTaskId,
    createNewTask,
    updateTask,
    deleteTask,
    checkTaskCompleted
  }
})
