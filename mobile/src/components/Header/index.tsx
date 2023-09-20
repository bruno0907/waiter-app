import { TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Container, Content, OrderHeader, TableCard } from './styles';

interface Props {
  selectedTable: string;
  onCancelOrder: () => void;
}

export function Header({ selectedTable, onCancelOrder }: Props) {
  return (
    <Container>
      {!selectedTable && (
        <>
          <Text size={14} opacity={.9}>Bem-vindo(a) ao</Text>
          <Text size={24} weight="700">Waiter <Text size={24}>App</Text></Text>
        </>
      )}
      {selectedTable && (
        <Content>
          <OrderHeader>
            <Text size={24} weight="600">Pedido</Text>
            <TouchableOpacity onPress={onCancelOrder} activeOpacity={0.7}>
              <Text color="#d73036" weight="600" size={15}>cancelar pedido</Text>
            </TouchableOpacity>
          </OrderHeader>
          <TableCard>
            <Text color="#666">Mesa {selectedTable}</Text>
          </TableCard>
        </Content>
      )}
    </Container>
  );
}
