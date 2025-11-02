import { useDispatch } from "react-redux";
import { addTask } from "../redux/actions";

export default function TaskForm() {
  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    const titulo = e.target.titulo.value.trim();
    
    if (!titulo) return;
    
    const newTask = {
      id: Date.now(),
      titulo,
      completada: false
    };
    
    dispatch(addTask(newTask));
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input 
        name="titulo" 
        placeholder="Nueva tarea" 
        style={styles.input}
      />
      <button type="submit" style={styles.button}>
        Agregar
      </button>
    </form>
  );
}

const styles = {
  form: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px'
  },
  input: {
    flex: 1,
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ddd',
    borderRadius: '4px'
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};