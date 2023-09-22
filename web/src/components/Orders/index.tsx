import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { api } from "../../services/api";
import { OrderStatus } from "../../types/OrderStatus";

export function Orders () {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    api.get('/orders')
    .then(response => setOrders(response.data))
    .catch(error => console.error(error))
    .finally(() => setIsLoading(false))

  }, []);

  const waiting = orders.filter(order => order.status === 'WAITING')
  const inProduction = orders.filter(order => order.status === 'IN_PRODUCTION')
  const done = orders.filter(order => order.status === 'DONE')
  const canceled = orders.filter(order => order.status === 'CANCELED')

  function handleOrdersExhibition(orderId: string, status: OrderStatus) {
    setOrders(prevState => prevState.map((order) => {
      if(order._id === orderId) {
        return {
          ...order,
          status
        }
      }
      return order
    }))
  }

  if(isLoading) return null;

  return (
    <Container>
      <OrdersBoard
        status="WAITING"
        orders={waiting}
        onUpdateOrCancelOrder={handleOrdersExhibition}
        />
      <OrdersBoard
        status="IN_PRODUCTION"
        orders={inProduction}
        onUpdateOrCancelOrder={handleOrdersExhibition}
        />
      <OrdersBoard
        status="DONE"
        orders={done}
        onUpdateOrCancelOrder={handleOrdersExhibition}
        />
      <OrdersBoard
        status="CANCELED"
        orders={canceled}
        onUpdateOrCancelOrder={handleOrdersExhibition}
      />
    </Container>
  )
}
