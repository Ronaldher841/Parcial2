import { useDispatch } from "react-redux";
import { toggleTask, deleteTask } from "../redux/actions";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div style={{
      ...styles.item,
      backgroundColor: task.completada ? '#e8f5e9' : '#fff'
    }}>
      <input
        type="checkbox"
        checked={task.completada}
        onChange={() => dispatch(toggleTask(task.id))}
        style={styles.checkbox}
      />
      <span style={{
        ...styles.text,
        textDecoration: task.completada ? 'line-through' : 'none',
        color: task.completada ? '#888' : '#000'
      }}>
        {task.titulo}
      </span>
      <button
        onClick={() => dispatch(deleteTask(task.id))}
        style={styles.deleteBtn}
      >
        Eliminar
      </button>
    </div>
  );
}

const styles = {
  item: {
    display: 'flex',
    alignItems: 'center',
    padding: '15px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    gap: '10px'
  },
  checkbox: {
    width: '20px',
    height: '20px',
    cursor: 'pointer'
  },
  text: {
    flex: 1,
    fontSize: '16px'
  },
  deleteBtn: {
    padding: '8px 15px',
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};