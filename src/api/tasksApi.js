import { supabase } from '@/api/supabase'

const TABLE_NAME = 'tasks'

export const fetchAllTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*').order('id')

  if (error) {
    throw new Error(error.message)
  }
  return data
}

export const fetchWithTaskId = async (taskId) => {
  const { data, error } = await supabase.from('tasks').select('*').eq('id', taskId)

  if (error) {
    throw new Error(error.message)
  }

  const taskData = data[0];
  const task = {
    id: taskData._id,
    user_id: taskData.user_id,
    title: taskData.title,
    is_complete: taskData.is_complete
  }

  return task
}

export const createTask = async (task) => {
  const { error } = await supabase.from(TABLE_NAME).insert(task)
  if (error) {
    throw new Error(error.message)
  }

  return true
}

export const updateTaskTitle = async (taskId, title) => {
  const { error } = await supabase.from(TABLE_NAME).update({ title: title }).eq('id', taskId)

  if (error) {
    throw new Error(error.message)
  }

  return true
}
export const deleteTaskId = async (taskId) => {
  const { error } = await supabase.from(TABLE_NAME).delete().eq('id', taskId)
  if (error) {
    throw new Error(error.message)
  }

  return true
}

export const checkTaskCompletedId = async (taskId, isCompleted) => {
  console.log(isCompleted)
  const { error } = await supabase
    .from(TABLE_NAME)
    .update({ is_complete: !isCompleted })
    .eq('id', taskId)
  if (error) {
    throw new Error(error.message)
  }

  return true
}
