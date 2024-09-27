import { useState } from 'react';
import PropTypes from 'prop-types';

const TaskForm = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            addTask(newTask);
            setNewTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribí tu tarea"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button type="submit">Nueva Tarea</button>
        </form>
    );
};

TaskForm.propTypes = {
    addTask: PropTypes.func.isRequired
};

export default TaskForm;

