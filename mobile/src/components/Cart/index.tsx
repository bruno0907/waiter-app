import { FlatList, TouchableOpacity, View } from 'react-native';
import { Text } from '../Text';
import { ProductProps } from '../ProductModal';
import { Container, Actions, Details, Image, Product, Footer, EmptyCart, Total } from './styles';
import { PlusCircle } from '../Icons/PlusCircle';
import { MinusCircle } from '../Icons/MinusCircle';
import { formatCurrency } from '../../utils/formatCurrency';
import { Button } from '../Button';
import { useMemo } from 'react';

export interface CartItems {
  product: ProductProps
  quantity: number
}

interface Props {
  cartItems: CartItems[];
}

export function Cart({ cartItems }: Props) {

  const cartTotal = useMemo(() => {
    return cartItems.reduce((acc, cartItem) => {
      return acc + (cartItem.product.price * cartItem.quantity);
    }, 0);
  }, [cartItems]);

  return (
    <Container>

      {cartItems.length > 0 && (
        <FlatList
          data={cartItems}
          keyExtractor={cartItems => cartItems.product._id}
          showsVerticalScrollIndicator={false}
          style={{ marginBottom: 20, maxHeight: 200 }}
          renderItem={({ item: cartItem }) => (
            <Product>
              <Image
                source={{
                  uri: `http://192.168.1.159:3333/uploads/${cartItem.product.imagePath}`
                }}
              />
              <Text size={14} color="#666" weight="400">{cartItem.quantity}x</Text>
              <Details>
                <Text color="#333" weight="600">{cartItem.product.name}</Text>
                <Text color="666" weight="400">{formatCurrency(cartItem.product.price)}</Text>
              </Details>
              <Actions>
                <TouchableOpacity activeOpacity={0.7}>
                  <PlusCircle />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.7}>
                  <MinusCircle />
                </TouchableOpacity>
              </Actions>
            </Product>
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
        <Button disabled={!cartItems.length}>
          <Text weight="600" color="#fff">Confirmar pedido</Text>
        </Button>
      </Footer>

    </Container>
  );
}
