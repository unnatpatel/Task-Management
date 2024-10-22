import React, { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Container, Typography } from '@mui/material';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4(), completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (task) => {
    setCurrentTask(task);
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setCurrentTask(null);
  };

  const completeTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>Task Manager</Typography>
      <TaskForm addTask={addTask} currentTask={currentTask} handleUpdateTask={handleUpdateTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} editTask={editTask} completeTask={completeTask} />
    </>
  );
}

export default App;
