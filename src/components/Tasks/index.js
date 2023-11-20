import { Text } from '../Text';

import {
  Task,
  TaskAction,
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


import { FlatList, TouchableOpacity } from 'react-native';


export default function Tasks({ tasks, onConfirmDeleteTask, onEditTask, onChangeStatusTask }) {

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
              <Text color={task.done ? '#2192D8' : '#ff0000'}>
                {task.done ? 'Recuperada' : 'Roubada'}
              </Text>
            </TaskStatus>
            
            <TaskAction>
              
             
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