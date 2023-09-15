import { useState } from "react";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";
import { boardProps } from "../../assets/constants/BoardProps";

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

export function OrdersBoard({ statusLabel, orders }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [order, setOrder] = useState<Order | null>(null);

  function handleOpenModal(selectedOrder: Order) {
    setIsModalVisible(true)
    setOrder(selectedOrder)
  }

  function handleCloseModal() {
    setIsModalVisible(false)
    setOrder(null)
  }

  return (
    <>
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
                <button key={order._id} type="button" onClick={() => handleOpenModal(order)}>
                  <strong>Mesa {order.table}</strong>
                  <span>{order.products.length} itens</span>
                </button>
              )
            })}
          </OrdersContainer>
        )}
      </Board>
      <OrderModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        order={order}
      />
    </>
  )
}
