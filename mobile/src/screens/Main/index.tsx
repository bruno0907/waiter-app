
import { CategoriesContainer, Container, Footer, MenuContainer } from './styles';
import { Header } from '../../components/Header';
import { SafeAreaView } from 'react-native';
import { Categories } from '../../components/Categories';
import { Menu } from '../../components/Menu';
import { Button } from '../../components/Button';
import { Text } from '../../components/Text';
import { TableModal } from '../../components/TableModal';

export function Main() {
  return (
    <>
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
        <Footer>
          <Button
            onPress={() => console.log('press')}
          >
            <Text weight="600" color="#fff">Novo pedido</Text>
          </Button>
        </Footer>
      </SafeAreaView>

      <TableModal />
    </>
  );
}


