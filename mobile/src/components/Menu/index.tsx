import { useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Text } from '../Text';
import { CenteredContainer } from '../CenteredContainer';
import { formatCurrency } from '../../utils/formatCurrency';
import { ProductModal } from '../ProductModal';
import { ProductContainer, Image, Details, Separator, AddToCartButton } from './styles';
import { PlusCircle } from '../Icons/PlusCircle';
import { Empty } from '../Icons/Empty';
import { Product } from '../../types/Product';

interface Props {
  onAddToCart: (product: Product) => void;
  products: Product[];
  isLoadingProducts: boolean;
}

export function Menu({ onAddToCart, products, isLoadingProducts }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  function handleSelectProduct(product: Product) {
    setSelectedProduct(product);
    setIsModalVisible(true);
  }

  return (
    <>
      {isLoadingProducts && (
        <CenteredContainer>
          <ActivityIndicator size="large" color="#D73035" />
        </CenteredContainer>
      )}
      {!isLoadingProducts && (
        !products.length ? (
          <CenteredContainer>
            <Empty />
            <Text color="#666" style={{ marginTop: 24 }}>Nenum produto encontrado!</Text>
          </CenteredContainer>
        ) : (
          <>
            <FlatList
              contentContainerStyle={{ marginBottom: 32, paddingHorizontal: 24 }}
              style={{ marginTop: 32 }}
              data={products}
              keyExtractor={product => product._id}
              ItemSeparatorComponent={Separator}
              renderItem={({ item: product }) => (
                <ProductContainer
                  activeOpacity={0.7}
                  onPress={() => handleSelectProduct(product)}
                >
                  <Image source={{
                    uri: `http://192.168.1.159:3333/uploads/${product.imagePath}`,
                  }} />
                  <Details>
                    <Text weight="600">{product.name}</Text>
                    <Text color="#666"size={14}>{product.description}</Text>
                    <Text weight="600" size={14}>{formatCurrency(product.price)}</Text>
                  </Details>

                  <AddToCartButton activeOpacity={0.7} onPress={() => onAddToCart(product)}>
                    <PlusCircle />
                  </AddToCartButton>
                </ProductContainer>
              )}
            />
            <ProductModal
              product={selectedProduct}
              visible={isModalVisible}
              onClose={() => setIsModalVisible(false)}
              onAddToCart={onAddToCart}
            />
          </>
        )
      )}
    </>
  );
}
