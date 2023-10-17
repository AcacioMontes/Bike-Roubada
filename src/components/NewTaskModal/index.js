import CustomModal from '../CustomModal';
import { Text } from '../Text';
import { Header } from './styles';

import close from '../../assets/images/close.png';
import { Image, TouchableOpacity } from 'react-native';

export default function NewTaskModal({ visible, onClose }) {
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
    >
      <Header>
        <Text weight={600}>Adicionar Tarefa</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>
    </CustomModal>
  );
}