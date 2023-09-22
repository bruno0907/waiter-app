import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { api } from "../../services/api";

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

  if(isLoading) return null;

  return (
    <Container>
      <OrdersBoard status="WAITING" orders={waiting} />
      <OrdersBoard status="IN_PRODUCTION" orders={inProduction} />
      <OrdersBoard status="DONE" orders={done} />
      <OrdersBoard status="CANCELED" orders={canceled} />
    </Container>
  )
}
