

import { CategoryContainer, Icon } from './styles';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { Text } from '../Text';
import { Category } from '../../types/Category';

interface Props {
  categories: Category[]
  onSelectCategory: (categoryId: string) => Promise<void>;
}

export function Categories({ categories, onSelectCategory }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  async function handleSelectCategory(categoryId: string) {
    const category = selectedCategory === categoryId ? '' : categoryId;
    setSelectedCategory(category);
    await onSelectCategory(category);
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
          <CategoryContainer
            activeOpacity={0.7}
            onPress={() => handleSelectCategory(category._id)}
          >
            <Icon>
              <Text opacity={isNotActive ? 0.5 : 1}>
                {category.icon}
              </Text>
            </Icon>
            <Text size={14} weight="600" opacity={isNotActive ? 0.5 : 1}>{category.name}</Text>
          </CategoryContainer>
        );
      }}
    >
    </FlatList>
  );
}
