import { useState } from "react";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";
import { boardProps } from "../../assets/constants/BoardProps";
import { Order } from "../../types/Order";
import { api } from "../../services/api";
import { OrderStatus } from "../../types/OrderStatus";
import { toast } from "react-toastify";

interface OrdersBoardProps {
  orders: Order[];
  status: OrderStatus;
  onUpdateOrCancelOrder: (orderId: string, status: OrderStatus) => void;
}

export function OrdersBoard({ orders, status, onUpdateOrCancelOrder }: OrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(selectedOrder: Order) {
    setIsModalVisible(true)
    setOrder(selectedOrder)
  }

  function handleCloseModal() {
    setIsModalVisible(false)
    setOrder(null)
  }

  async function handleCancelOrder(order: Order) {
    setIsLoading(true);
    await api.patch(`/orders/${order._id}/cancel`)
    setIsLoading(false);
    onUpdateOrCancelOrder(order._id, 'CANCELED')
    toast.success(`O pedido da mesa ${order.table} foi cancelado!`)
  }

  async function handleUpdateOrderStatus(order: Order) {
    let status;

    if(order.status === 'WAITING') {
      status = 'IN_PRODUCTION'
    }

    if(order.status === 'IN_PRODUCTION') {
      status = 'DONE'
    }

    setIsLoading(true);
    await api.patch(`/orders/${order._id}/update_status`, { status })
    setIsLoading(false);
    onUpdateOrCancelOrder(order._id, status as OrderStatus)
    toast.success(`O status do pedido da mesa ${order.table} foi atualizado!`)
  }

  return (
    <>
      <Board>
        <header>
          <span>{boardProps[status].icon}</span>
          <strong>{boardProps[status].label}</strong>
          <span>({orders.length})</span>
        </header>
        {orders.length > 0 && (
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
        isLoading={isLoading}
        onClose={handleCloseModal}
        order={order}
        onCancelOrder={handleCancelOrder}
        onUpdateOrderStatus={handleUpdateOrderStatus}
      />
    </>
  )
}
