import { supabase } from '@/api/supabase'

export const fetchAllTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*').order('id')

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

export const checkTaskCompletedId = async (taskId, isCompleted) => {
  console.log(isCompleted);
  const { error } = await supabase
  .from(TABLE_NAME)
  .update({ is_complete: !isCompleted })
  .eq('id', taskId)
  if (error) {
    throw new Error(error.message)
  }

  return true
}