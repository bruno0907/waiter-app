import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  statusLabel: string;
  orders: Order[];
}

export interface Order {
  _id: string;
  table: number;
  status: string;
  products: {
    product: Product;
    quantity: number;
    _id: string;
  }[]
}

interface Product {
  name: string;
  imagePath: string;
  price: number;
}

interface BoardProps {
  [key: string]: {
    label: string
    icon: string
  }
}

const boardProps: BoardProps = {
  WAITING: {
    label: 'Aguardando...',
    icon: '⏱',
  },
  IN_PRODUCTION:{
    label: 'Em preparo...',
    icon: '👨‍🍳',
  },
  DONE: {
    label: 'Pronto!',
    icon: '✅'
  },
  CANCELED: {
    label: 'Cancelados...',
    icon: '🔴'
},
}

export function OrdersBoard({ statusLabel, orders }: OrdersBoardProps) {
  function handleOpenModal() {
    alert('modal aberto')
  }
  return (
    <Board>
      <header>
        <span>{boardProps[statusLabel].icon}</span>
        <strong>{boardProps[statusLabel].label}</strong>
        <span>({orders.length})</span>
      </header>
      {orders.length && (
        <OrdersContainer>
          {orders.map((order) => {
            return (
              <button key={order._id} type="button" onClick={handleOpenModal}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            )
          })}
        </OrdersContainer>
      )}
    </Board>
  )
}
