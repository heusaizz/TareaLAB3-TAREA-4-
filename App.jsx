import { useState } from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { text: task, completed: false }]);
    };

    const toggleTaskCompletion = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Gestor de Tareas</h1>
            <TaskForm addTask={addTask} />
            <TaskList
                tasks={tasks}
                toggleTaskCompletion={toggleTaskCompletion}
                deleteTask={deleteTask}
            />
        </div>
    );
}

export default App;
