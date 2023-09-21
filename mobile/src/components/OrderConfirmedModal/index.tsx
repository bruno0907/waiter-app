import { Modal } from 'react-native';
import { Text } from '../Text';
import { Button } from '../Button';
import { CheckCircle } from '../Icons/CheckCircle';
import { CenteredContainer } from '../CenteredContainer';

interface Props {
  isVisible: boolean;
  onOk: () => void;
}

export function OrderConfirmModal({ isVisible, onOk }: Props) {
  return (
    <Modal visible={isVisible} animationType='fade'>
      <CenteredContainer bgColor="#D73035">
        <CheckCircle />
        <Text size={20} color="#fff" weight="600">Pedido confirmado</Text>
        <Text  color="#fff">O pedido já entrou na fila de produção!</Text>
        <Button onPress={onOk} variant="secondary" style={{ marginTop: 24 }}>
          <Text color="#d73035" weight="600">OK</Text>
        </Button>
      </CenteredContainer>
    </Modal>
  );
}
