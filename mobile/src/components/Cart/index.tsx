import { useMemo, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Button } from '../Button';
import { OrderConfirmModal } from '../OrderConfirmedModal';
import { formatCurrency } from '../../utils/formatCurrency';
import { api } from '../../services/api';
import { Container, Actions, Details, Image, ProductContainer, Footer, Total } from './styles';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { Product } from '../../types/Product';
import { CartItem } from '../../types/CartItem';

interface Props {
  cartItems: CartItem[];
  selectedTable: string;
  onAddToCart: (product: Product) => void
  onRemoveFromCart: (productId: string) => void
  onConfirmOrder: () => void
}

export function Cart({ cartItems, selectedTable, onAddToCart, onRemoveFromCart, onConfirmOrder }: Props) {
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + (cartItem.product.price * cartItem.quantity);
    }, 0);
  }, [cartItems]);

  async function handleConfirmOrder() {
    setIsLoading(true);

    const products = cartItems.map((cartItem) => {
      return {
        product: cartItem.product._id,
        quantity: cartItem.quantity
      };
    });

    const payload = {
      table: selectedTable,
      products
    };

    await api.post('/orders', payload);

    setIsLoading(false);
    setIsConfirmModalVisible(true);
  }

  function handleOk() {
    onConfirmOrder();
    setIsConfirmModalVisible(false);
  }

  return (
    <Container>

      <OrderConfirmModal isVisible={isConfirmModalVisible} onOk={handleOk} />

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItems => cartItems.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 200 }}
          renderItem={({ item: cartItem }) => (
            <ProductContainer>
              <Image
                source={{
                  uri: `http://192.168.1.159:3333/uploads/${cartItem.product.imagePath}`
                }}
              />
              <Text size={14} color="#666" weight="400">{cartItem.quantity}x</Text>
              <Details>
                <Text color="#333" weight="600">{cartItem.product.name}</Text>
                <Text color="#666" weight="400">{formatCurrency(cartItem.product.price)}</Text>
              </Details>
              <Actions>
                <TouchableOpacity activeOpacity={0.7} onPress={() => onRemoveFromCart(cartItem.product._id)}>
                  <MinusCircle />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7} onPress={() => onAddToCart(cartItem.product)}>
                  <PlusCircle />
                </TouchableOpacity>
              </Actions>
            </ProductContainer>
          )}
        />
      )}

      <Footer>
        <Total>
          {cartItems.length > 0 ? (
            <>
              <Text color="#333" size={20}>Total</Text>
              <Text weight="600" size={24}>{formatCurrency(cartTotal)}</Text>
            </>
          ) : (
            <Text weight="400" color="#666">Seu carrinho {'\n'}está vazio</Text>
          )}
        </Total>
        <Button disabled={!cartItems.length} onPress={handleConfirmOrder} isLoading={isLoading}>
          <Text weight="600" color="#fff">Confirmar pedido</Text>
        </Button>
      </Footer>

    </Container>
  );
}
