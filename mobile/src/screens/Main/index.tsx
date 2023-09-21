import { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, SafeAreaView } from 'react-native';

import { Header } from '../../components/Header';
import { Categories } from '../../components/Categories';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { TableModal } from '../../components/TableModal';
import { Cart } from '../../components/Cart';
import { CenteredContainer } from '../../components/CenteredContainer';

import { api } from '../../services/api';

import { CategoriesContainer, Container, Footer, MenuContainer } from './styles';

import { Product } from '../../types/Product';
import { CartItem } from '../../types/CartItem';
import { Category } from '../../types/Category';

export function Main() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedTable, setSelectedTable] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingProducts, setIsLoadingProducts] = useState(false);

  const [categories, setCategories] = useState<Category[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

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

  function handleAddToCart(product: Product) {
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

  async function handleSelectCategory(categoryId: string) {
    const route = !categoryId ? '/products' : `/categories/${categoryId}/products`;

    setIsLoadingProducts(true);

    const { data } = await api.get(route);

    setProducts(data);
    setIsLoadingProducts(false);
  }

  useEffect(() => {
    setIsLoading(true);

    Promise.all([
      api.get('/categories'),
      api.get('/products'),
    ]).then(([ categoriesResponse, productsResponse ]) => {
      setCategories(categoriesResponse.data);
      setProducts(productsResponse.data);
    }).catch(error => {
      console.error(error);
      Alert.alert('Ocorreu um erro');
    }).finally(() => setIsLoading(false));

  }, []);

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
                <Categories categories={categories} onSelectCategory={handleSelectCategory} />
              </CategoriesContainer>

              <MenuContainer>
                <Menu onAddToCart={handleAddToCart} products={products} isLoadingProducts={isLoadingProducts} />
              </MenuContainer>
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
              selectedTable={selectedTable}
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


