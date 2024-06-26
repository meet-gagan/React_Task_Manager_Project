import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, onDelete, onUpdate }) => {
  return (
    <div className="task-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} onDelete={onDelete} onUpdate={onUpdate} />
      ))}
    </div>
  );
};

export default TaskList;
