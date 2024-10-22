import React from 'react';
import { Card, CardContent, Typography, Button, IconButton } from '@mui/material';
import { CheckCircleOutline, Edit, Delete } from '@mui/icons-material';

const TaskItem = ({ task, deleteTask, editTask, completeTask }) => {
  return (
    <Card style={{ marginBottom: '15px', backgroundColor: task.completed ? '#e0e0e0' : 'white' }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography variant="body2">{task.description}</Typography>
        <Typography variant="body2">Deadline: {task.deadline}</Typography>
        <Typography variant="body2">Priority: {task.priority}</Typography>

        <IconButton onClick={() => completeTask(task.id)}>
          <CheckCircleOutline color={task.completed ? 'success' : 'disabled'} />
        </IconButton>
        <IconButton onClick={() => editTask(task)}>
          <Edit />
        </IconButton>
        <IconButton onClick={() => deleteTask(task.id)}>
          <Delete />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default TaskItem;
