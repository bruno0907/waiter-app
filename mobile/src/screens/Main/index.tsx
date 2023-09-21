import { useState } from 'react';

import { CategoriesContainer, Container, Footer, MenuContainer } from './styles';
import { Header } from '../../components/Header';
import { Alert, SafeAreaView } from 'react-native';
import { Categories } from '../../components/Categories';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { TableModal } from '../../components/TableModal';
import { Cart, CartItems } from '../../components/Cart';
import { ProductProps } from '../../components/ProductModal';

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

  function handleAddToCart(product: ProductProps) {
    if(!selectedTable) return Alert.alert('Inicie um novo pedido ou selecione uma mesa em aberto.');

    setCartItems(prevState => {
      const productAlreadyInCart = prevState.find(prevProd => prevProd.product._id === product._id);

      if(!productAlreadyInCart) {
        return [...prevState, {
          product,
          quantity: 1,
        }];
      }

      return prevState.map(prevProd => (
        prevProd.product._id === product._id
          ? { ...prevProd, quantity: ++prevProd.quantity }
          : prevProd
      ));
    });
  }

  function handleRemoveFromCart(productId: string) {
    if(!selectedTable) return Alert.alert('Inicie um novo pedido ou selecione uma mesa em aberto.');

    setCartItems(prevState => {
      const productQuantityOnCart = prevState.find(prevProd => prevProd.product._id === productId)?.quantity;

      if(productQuantityOnCart >= 1) {
        return prevState.filter(prevProd => prevProd.product._id !== productId);
      }

      return prevState.map(prevProd => (
        prevProd.product._id === productId
          ? { ...prevProd, quantity: --prevProd.quantity }
          : prevProd
      ));
    });

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
            <Menu onAddToCart={handleAddToCart} />
          </MenuContainer>
        </Container>
        <Footer>
          {!selectedTable && (
            <Button onPress={() => handleModalVisibility(true)}>
              <Text weight="600" color="#fff">Novo pedido</Text>
            </Button>
          )}
          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
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


