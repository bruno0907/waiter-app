import { Modal, Platform, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Body, Form, Header, Overlay, Input } from './styles';
import { Close } from '../Icons/Close';
import { Button } from '../Button';

export function TableModal() {


  return (
    <Modal transparent>
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <Body>
          <Header>
            <Text color="#333" size={16} weight="600">Informar a mesa</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Close color='#666'/>
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder='Número da mesa'
              keyboardType='number-pad'
              placeholderTextColor="#666"
            />
            <Button>
              <Text weight="600" color="#fff">Fazer pedido</Text>
            </Button>
          </Form>
        </Body>
      </Overlay>
    </Modal>
  );
}
