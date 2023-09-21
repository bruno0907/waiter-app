import { useState } from 'react';

import { CategoriesContainer, Container, Footer, CenteredContainer, MenuContainer } from './styles';
import { Header } from '../../components/Header';
import { ActivityIndicator, Alert, SafeAreaView } from 'react-native';
import { Categories } from '../../components/Categories';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { TableModal } from '../../components/TableModal';
import { Cart, CartItems } from '../../components/Cart';
import { ProductProps } from '../../components/ProductModal';
import { Empty } from '../../components/Icons/Empty';

import { products as mockProducts } from '../../mocks/products';

export function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [isLoading] = useState(false);

  const [products] = useState<ProductProps[]>([]);
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  function handleModalVisibility(state: boolean) {
    setIsModalVisible(state);
  }

  function handleSetSelectedTable(table: string) {
    setSelectedTable(table);
  }

  function handleEmptyOrder() {
    setSelectedTable('');
    setCartItems([]);
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
          <Header selectedTable={selectedTable} onCancelOrder={handleEmptyOrder} />

          {isLoading && (
            <CenteredContainer>
              <ActivityIndicator color="#d73035" size="large" />
            </CenteredContainer>
          )}

          {!isLoading && (
            <>
              <CategoriesContainer>
                <Categories />
              </CategoriesContainer>

              {!products.length ? (
                <CenteredContainer>
                  <Empty />
                  <Text color="#666" style={{ marginTop: 24 }}>Nenum produto encontrado!</Text>
                </CenteredContainer>
              ) : (
                <MenuContainer>
                  <Menu onAddToCart={handleAddToCart} products={products} />
                </MenuContainer>
              )}
            </>
          )}

        </Container>

        <Footer>
          {!selectedTable && (
            <Button
              onPress={() => handleModalVisibility(true)}
              disabled={isLoading || !products.length}
              isLoading={isLoading}
            >
              <Text weight="600" color="#fff">Novo pedido</Text>
            </Button>
          )}
          {selectedTable && (
            <Cart
              cartItems={cartItems}
              onAddToCart={handleAddToCart}
              onRemoveFromCart={handleRemoveFromCart}
              onConfirmOrder={handleEmptyOrder}
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


