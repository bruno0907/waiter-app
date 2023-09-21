import { FlatList, Modal, SafeAreaView, View } from 'react-native';
import { Text } from '../Text';
import { Button } from '../Button';
import { formatCurrency } from '../../utils/formatCurrency';
import { Header, Container, Content, Footer, CloseButton, ProductImage, Ingredient } from './styles';
import { Close } from '../Icons/Close';
import { Product } from '../../types/Product';

interface Props {
  visible: boolean
  onClose: () => void
  product: Product
  onAddToCart: (product: Product) => void;
}

export function ProductModal({ visible, onClose, product, onAddToCart }: Props) {
  if(!product) return null;

  function handleAddProductToCart() {
    onAddToCart(product);
    onClose();
  }

  return (
    <Modal visible={visible} animationType='slide' presentationStyle='pageSheet' onRequestClose={onClose}>

      <Container>
        <ProductImage
          source={{
            uri: `http://192.168.1.159:3333/uploads/${product.imagePath}`,
          }}
        >
          <CloseButton onPress={onClose}>
            <Close />
          </CloseButton>
        </ProductImage>

        <Header>
          <Text size={24} weight="600">{product.name}</Text>
          <Text color="#333">{product.description}</Text>
        </Header>

        {product.ingredients.length > 0 && (
          <Content>
            <Text weight="600" color="#333">Ingredientes</Text>
            <FlatList
              data={product.ingredients}
              keyExtractor={ingredient => ingredient._id}
              showsVerticalScrollIndicator={false}

              renderItem={({ item: ingredient }) => (
                <Ingredient>
                  <Text>{ingredient.icon}</Text>
                  <Text color="#666" weight="400">{ingredient.name}</Text>
                </Ingredient>
              )}
            />
          </Content>
        )}

        <SafeAreaView style={{ marginTop: 'auto' }}>
          <Footer>
            <View>
              <Text color="#666" weight="400" size={18}>Preço</Text>
              <Text weight="600" size={24}>{formatCurrency(product.price)}</Text>
            </View>
            <Button onPress={handleAddProductToCart}>
              <Text color="#fff" weight="600">Adicionar ao pedido</Text>
            </Button>
          </Footer>
        </SafeAreaView>
      </Container>

    </Modal>
  );
}
