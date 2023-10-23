import { CenteredContainer, Container, TasksContainer } from './styles';

import { tasks } from '../mocks/tasks';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { useState } from 'react';
import NewTaskModal from '../components/NewTaskModal';
import EditTaskModal from '../components/EditTaskModal';
import { ActivityIndicator } from 'react-native';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskBeingEdit, setTaskBeingEdit] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function handleChangeSatusTask() {
    alert('Alterar Status Tarefa');
  }

  function handleEditTask(task) {
    setTaskBeingEdit(task);
    setIsEditTaskModalVisible(true);
  }

  function handleConfirmDeleteTask(task) {
    setIsDeleteModalVisible(true);
  }

  function handleDeleteTask() {
    //Requisição Delete
    setIsDeleteModalVisible(false);
  }

  function handleCreateTask(task) {
    //Requisição de cadastro de tarefa
    setIsNewTaskModalVisible(false);
  }

  function handleSaveEditTaks() {
    //Requisição de alteração de tarefa
    setIsEditTaskModalVisible(false);
  }

  return (
    <Container>
      <Header />

      {!isLoading && (
        <TasksContainer>
          <Tasks
            tasks={tasks}
            onChangeStatusTask={handleChangeSatusTask}
            onConfirmDeleteTask={handleConfirmDeleteTask}
            onEditTask={handleEditTask}
          />
        </TasksContainer>
      )}

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator color="#666" size="large" />
        </CenteredContainer>
      )}

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        onClose={() => setIsDeleteModalVisible(false)}
        visible={isDeleteModalVisible}
        onConfirm={handleDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleCreateTask}
      />

      <EditTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        onSave={handleSaveEditTaks}
        task={taskBeingEdit}
      />
    </Container>
  );
}