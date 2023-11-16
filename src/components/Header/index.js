import { Text } from '../Text';
import { Container } from './styles';

export default function Header() {
  return (
    <Container>
      <Text size={20} color= "red" fontWeight="bold" textAlign= 'center'>
        Bike Roubadas cadastradas ou recuperadas.
        
      </Text>

      <Text opacity={0.5}>Add, delete ou marque bicicletas roubadas</Text>
    </Container>
  );
}