import { Container, TasksContainer } from './styles';

import { tasks } from '../mocks/tasks';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';

export default function Main() {
  function handleChangeSatusTask() {
    alert('Alterar Status Tarefa');
  }

  function handleEditTask() {
    alert('Alterar Tarefa');
  }

  function handleConfirmDeleteTask() {
    alert('Deletar Tarefa');
  }

  return (
    <Container>
      <Header />

      <TasksContainer>
        <Tasks
          tasks={tasks}
          onChangeStatusTask={handleChangeSatusTask}
          onDeleteTask={handleConfirmDeleteTask}
          onEditTask={handleEditTask}
        />
      </TasksContainer>

      <AddTaskButton onPress={() => alert('Add')} />

      <DeleteConfirmModal />
    </Container>
  );
}