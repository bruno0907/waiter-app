import { FlatList, TouchableOpacity } from 'react-native';
import { products } from '../../mocks/products';
import { Product, Image, Details, Separator, AddToCartButton } from './styles';
import { Text } from '../Text';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu() {
  return (
    <FlatList
      contentContainerStyle={{ marginBottom: 32, paddingHorizontal: 24 }}
      style={{ marginTop: 32 }}
      data={products}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product activeOpacity={0.7} onPress={() => console.log(product._id)}>
          <Image source={{
            uri: `http://192.168.1.159:3333/uploads/${product.imagePath}`,
          }} />
          <Details>
            <Text weight="600">{product.name}</Text>
            <Text color="#666"size={14}>{product.description}</Text>
            <Text weight="600" size={14}>{formatCurrency(product.price)}</Text>
          </Details>

          <AddToCartButton activeOpacity={0.7} onPress={() => console.log(product._id, 1)}>
            <PlusCircle />
          </AddToCartButton>
        </Product>
      )}
    />
  );
}
