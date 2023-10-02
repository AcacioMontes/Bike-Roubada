import Header from '../components/Header';
import Tasks from '../components/Tasks';

import { Container, TasksContainer } from './styles';

import { tasks } from '../mocks/tasks';

export default function Main() {
  return (
    <Container>
      <Header />

      <TasksContainer>
        <Tasks tasks={tasks} />
      </TasksContainer>
    </Container>
  );
}