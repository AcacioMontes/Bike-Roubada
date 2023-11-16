import { Text } from '../Text';

import {
  Task,
  TaskAction,
  TaskCpf,
  TaskData,
  TaskDescription,
  TaskEmail,
  TaskFooter,
  TaskHeader,
  TaskIcon,
  TaskStatus,
  TaskTelefone
} from './styles';

import pending from '../../assets/images/pending.png';
import done from '../../assets/images/done.png';
import excluir from '../../assets/images/delete.png';
import edit from '../../assets/images/edit.png';
import mais from '../../assets/images/mais.jpeg';

import { FlatList, TouchableOpacity } from 'react-native';


export default function Tasks({ tasks, onConfirmDeleteTask, onEditTask, onChangeStatusTask, onCadastroBike }) {

  return (
    <FlatList
      data={tasks}
      keyExtractor={task => task.id}
      renderItem={({ item: task }) => (
        <Task>
          <TaskHeader>
            <Text size={18} weight="600">{task.name}</Text>
          </TaskHeader>
          <TaskDescription>
            <Text opacity={0.5}>{task.description}</Text>
          </TaskDescription>
          
          <TaskEmail>
            <Text opacity={0.5}>{task.email}</Text>
          </TaskEmail>
          <TaskData>
            <Text opacity={0.5}>{task.data}</Text>
          </TaskData>
          <TaskTelefone>
            <Text opacity={0.5}>{task.telefone}</Text>
          </TaskTelefone>
          
          <TaskFooter>
            <TaskStatus onPress={() => { onChangeStatusTask(task) }}>
              <TaskIcon source={task.done ? done : pending} />
              <Text color={task.done ? '#2192D8' : '#E620AE'}>
                {task.done ? 'Recuperada' : 'Roubada'}
              </Text>
            </TaskStatus>
            
            <TaskAction>
              <TouchableOpacity onPress={() => { onCadastroBike() }}>
                <TaskIcon opacity={0.5} source={mais} />
              </TouchableOpacity>
             
              <TouchableOpacity onPress={() => { onEditTask(task) }}>
                <TaskIcon source={edit} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => { onConfirmDeleteTask(task) }}>
                <TaskIcon source={excluir} />
              </TouchableOpacity>
            </TaskAction>
          
          </TaskFooter>
        </Task>
      )}
    />
  );
}