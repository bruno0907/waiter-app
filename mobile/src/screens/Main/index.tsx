
import { CategoriesContainer, Container, Footer, MenuContainer } from './styles';
import { Header } from '../../components/Header';
import { SafeAreaView } from 'react-native';
import { Categories } from '../../components/Categories';
import { Menu } from '../../components/Menu';

export function Main() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer />
    </SafeAreaView>
  );
}


