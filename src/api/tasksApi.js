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