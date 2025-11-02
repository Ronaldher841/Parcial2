import { Provider } from 'react-redux';
import store from './redux/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div style={styles.container}>
        <h1 style={styles.title}>📋 TaskBoard</h1>
        <p style={styles.subtitle}>Lista de tareas colaborativa</p>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px'
  },
  title: {
    textAlign: 'center',
    color: '#333',
    marginBottom: '10px'
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '30px'
  }
};

export default App;
