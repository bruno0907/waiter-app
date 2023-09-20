import { useState } from 'react';

import { CategoriesContainer, Container, Footer, MenuContainer } from './styles';
import { Header } from '../../components/Header';
import { SafeAreaView } from 'react-native';
import { Categories } from '../../components/Categories';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { TableModal } from '../../components/TableModal';
import { Cart, CartItems } from '../../components/Cart';

export function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');

  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  function handleModalVisibility(state: boolean) {
    setIsModalVisible(state);
  }

  function handleSetSelectedTable(table: string) {
    setSelectedTable(table);
  }

  function handleCancelOrder() {
    setSelectedTable('');
  }

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <Header selectedTable={selectedTable} onCancelOrder={handleCancelOrder} />
          <CategoriesContainer>
            <Categories />
          </CategoriesContainer>
          <MenuContainer>
            <Menu />
          </MenuContainer>
        </Container>
        <Footer>
          {!selectedTable && (
            <Button onPress={() => handleModalVisibility(true)}>
              <Text weight="600" color="#fff">Novo pedido</Text>
            </Button>
          )}
          {selectedTable && (
            <Cart cartItems={cartItems} />
          )}
        </Footer>
      </SafeAreaView>
      <TableModal
        visible={isModalVisible}
        onClose={() => handleModalVisibility(false)}
        onSelectTable={handleSetSelectedTable}
      />
    </>
  );
}


