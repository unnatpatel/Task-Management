import React, { useState, useEffect } from 'react';
import { TextField, Button, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const priorities = ['Low', 'Medium', 'High'];

const TaskForm = ({ addTask, editTask, currentTask, handleUpdateTask }) => {
  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    priority: 'Medium',
  });

  useEffect(() => {
    if (currentTask) setTask(currentTask);
  }, [currentTask]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    currentTask ? handleUpdateTask(task) : addTask(task);
    setTask({ title: '', description: '', deadline: '', priority: 'Medium' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Title" name="title" value={task.title} onChange={handleChange} fullWidth required />
      <TextField label="Description" name="description" value={task.description} onChange={handleChange} fullWidth multiline rows={4} />
      <TextField label="Deadline" name="deadline" value={task.deadline} onChange={handleChange} type="date" fullWidth InputLabelProps={{ shrink: true }} />
      <FormControl fullWidth>
        <InputLabel>Priority</InputLabel>
        <Select name="priority" value={task.priority} onChange={handleChange}>
          {priorities.map((p) => (
            <MenuItem key={p} value={p}>{p}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" color="primary" type="submit">
        {currentTask ? 'Update Task' : 'Add Task'}
      </Button>
    </form>
  );
};

export default TaskForm;
