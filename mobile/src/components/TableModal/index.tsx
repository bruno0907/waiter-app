import { useState } from 'react';
import { Modal, Platform, TouchableOpacity } from 'react-native';
import { Text } from '../Text';
import { Button } from '../Button';
import { Body, Form, Header, Overlay, Input } from './styles';
import { Close } from '../Icons/Close';

interface Props {
  visible: boolean
  onClose: () => void
  onSelectTable: (table: string) => void;
}

export function TableModal({ visible, onClose, onSelectTable }: Props) {
  const [table, setTable] = useState('');

  function handleSaveTable(table: string) {
    setTable('');
    onSelectTable(table);
    onClose();
  }

  return (
    <Modal transparent visible={visible} animationType='fade'>
      <Overlay behavior={Platform.OS === 'android' ? 'height' : 'padding'}>
        <Body>
          <Header>
            <Text color="#333" size={16} weight="600">Informar a mesa</Text>
            <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
              <Close color='#666'/>
            </TouchableOpacity>
          </Header>
          <Form>
            <Input
              placeholder='Número da mesa'
              keyboardType='number-pad'
              placeholderTextColor="#666"
              onChangeText={setTable}
            />
            <Button disabled={!table.length} onPress={() => handleSaveTable(table)}>
              <Text weight="600" color="#fff">Fazer pedido</Text>
            </Button>
          </Form>
        </Body>
      </Overlay>
    </Modal>
  );
}
