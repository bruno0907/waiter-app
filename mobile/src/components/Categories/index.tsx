

import { Category, Icon } from './styles';
import { categories } from '../../mocks/categories';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { Text } from '../Text';

export function Categories() {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
  }

  return (
    <FlatList
      horizontal
      contentContainerStyle={{ paddingRight: 24 }}
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={category => category._id}
      renderItem={({ item: category }) => {
        const isNotSelected = category._id !== selectedCategory;
        const isNotActive = selectedCategory && isNotSelected;

        return (
          <Category
            activeOpacity={0.7}
            onPress={() => handleSelectCategory(category._id)}
          >
            <Icon>
              <Text opacity={isNotActive ? 0.5 : 1}>
                {category.icon}
              </Text>
            </Icon>
            <Text size={14} weight="600" opacity={isNotActive ? 0.5 : 1}>{category.name}</Text>
          </Category>
        );
      }}
    >
    </FlatList>
  );
}
