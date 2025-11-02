import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  
  // Ordenar: tareas pendientes primero, completadas al final
  const sortedTasks = [...tasks].sort((a, b) => 
    a.completada === b.completada ? 0 : a.completada ? 1 : -1
  );

  // Contador de tareas completadas
  const completedCount = tasks.filter(t => t.completada).length;

  return (
    <div>
      <div style={styles.counter}>
        Tareas completadas: {completedCount} de {tasks.length}
      </div>
      
      {sortedTasks.length === 0 ? (
        <p style={styles.empty}>No hay tareas. ¡Agrega una nueva!</p>
      ) : (
        sortedTasks.map(task => (
          <TaskItem key={task.id} task={task} />
        ))
      )}
    </div>
  );
}

const styles = {
  counter: {
    padding: '10px',
    backgroundColor: '#e3f2fd',
    borderRadius: '4px',
    marginBottom: '20px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  empty: {
    textAlign: 'center',
    color: '#888',
    padding: '40px'
  }
};