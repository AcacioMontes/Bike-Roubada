import CustomModal from '../CustomModal';
import { Text } from '../Text';
import { Header } from './styles';

import close from '../../assets/images/close.png';
import { Image, TouchableOpacity } from 'react-native';
import TaskForm from '../TaskForm';

export default function NewTaskModal({ visible, onClose, onSave }) {
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
    >
      <Header>
        <Text weight={600}>Cadastrar bike</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>

      <TaskForm
        buttonLabel="Cadastrar"
        
        onSave={onSave}
      />
    </CustomModal>
  );
}