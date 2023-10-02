import { Text } from '../Text';

import {
  Task,
  TaskAction,
  TaskDescription,
  TaskFooter,
  TaskHeader,
  TaskIcon,
  TaskStatus
} from './styles';

import pending from '../../assets/images/pending.png';
import done from '../../assets/images/done.png';
import excluir from '../../assets/images/delete.png';
import edit from '../../assets/images/edit.png';
import { TouchableOpacity } from 'react-native';

export default function Tasks({ tasks }) {



  return (
    <>
      {tasks.map((task) => {
        return (
          <Task key={task.id}>
            <TaskHeader>
              <Text size={18} weight="600">{task.title}</Text>
            </TaskHeader>
            <TaskDescription>
              <Text opacity={0.5}>{task.description}</Text>
            </TaskDescription>
            <TaskFooter>
              <TaskStatus onPress={() => { alert('Alterar Status') }}>
                <TaskIcon source={pending} />
                <Text color="#E620AE">Pendente</Text>
              </TaskStatus>
              <TaskAction>
                <TouchableOpacity onPress={() => { alert('Editar') }}>
                  <TaskIcon source={edit} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => { alert('Excluir') }}>
                  <TaskIcon source={excluir} />
                </TouchableOpacity>
              </TaskAction>
            </TaskFooter>
          </Task>
        );
      })}
    </>
  );
}