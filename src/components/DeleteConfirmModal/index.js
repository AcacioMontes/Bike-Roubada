import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Actions } from "./styles";

export default function DeleteConfirmModal() {
  return (
    <CustomModal>
      <Text size={18} weight="600">
        Tem certeza que deseja remover a tarefa?
      </Text>
      <Text opacity={0.5} style={{ marginTop: 4 }}>
        Essa ação não podera ser desfeita
      </Text>

      <Actions>

      </Actions>
    </CustomModal>
  );
}