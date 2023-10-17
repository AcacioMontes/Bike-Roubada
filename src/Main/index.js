import { Container, TasksContainer } from './styles';

import { tasks } from '../mocks/tasks';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { useState } from 'react';
import NewTaskModal from '../components/NewTaskModal';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);

  function handleChangeSatusTask() {
    alert('Alterar Status Tarefa');
  }

  function handleEditTask() {
    alert('Alterar Tarefa');
  }

  function handleConfirmDeleteTask(task) {
    setIsDeleteModalVisible(true);
  }

  function handleDeleteTask() {
    //Requisição Delete
    setIsDeleteModalVisible(false);
  }

  return (
    <Container>
      <Header />

      <TasksContainer>
        <Tasks
          tasks={tasks}
          onChangeStatusTask={handleChangeSatusTask}
          onConfirmDeleteTask={handleConfirmDeleteTask}
          onEditTask={handleEditTask}
        />
      </TasksContainer>

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        onClose={() => setIsDeleteModalVisible(false)}
        visible={isDeleteModalVisible}
        onConfirm={handleDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
      />
    </Container>
  );
}