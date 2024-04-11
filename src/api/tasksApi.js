import { supabase } from '@/api/supabase'

export const fetchAllTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*')

  if (error) {
    throw new Error(error.message)
  }
  return data;
}

const TABLE_NAME = 'tasks';

export const createTask = async (task) => {
  const { error } = await supabase
  .from(TABLE_NAME)
  .insert(task)
  if (error) {
    throw new Error(error.message)
  }

  return true
}

export const deleteTaskId = async (taskId) => {
  const { error } = await supabase
  .from(TABLE_NAME)
  .delete()
  .eq('id', taskId)
  if (error) {
    throw new Error(error.message)
  }

  return true
}

export const updateCompleted = async (taskId) => {
  const { error } = await supabase
  .from(TABLE_NAME)
  .update({ is_complete: 'Australia' })
  .eq('id', 1)
  if (error) {
    throw new Error(error.message)
  }

  return true
}