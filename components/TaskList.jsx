import PropTypes from 'prop-types';

const TaskList = ({ tasks, toggleTaskCompletion, deleteTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li
                    key={index}
                    style={{
                        textDecoration: task.completed ? 'line-through' : 'none',
                        color: task.completed ? 'lightgray' : 'black'
                    }}
                >
                    {task.text}
                    <button onClick={() => toggleTaskCompletion(index)}>
                        {task.completed ? 'Undo' : 'Completa'}
                    </button>
                    <button onClick={() => deleteTask(index)}>Borrar</button>
                </li>
            ))}
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired
        })
    ).isRequired,
    toggleTaskCompletion: PropTypes.func.isRequired,
    deleteTask: PropTypes.func.isRequired
};

export default TaskList;

