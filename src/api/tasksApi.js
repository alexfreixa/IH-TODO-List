import { supabase } from '@/api/supabase'

export const fetchAllTasks = async () => {
  const { data, error } = await supabase.from('tasks').select('*')

  if (error) {
    throw new Error(error.message)
  }

  /*const tasks = data.map(task => ({
    id: task.id,
    title: task.title,
    is_complete: task.is_complete
  }));*/

  return data;
}
