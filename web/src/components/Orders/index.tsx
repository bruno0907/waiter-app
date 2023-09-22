import { useEffect, useState } from "react";
import { Order } from "../../types/Order";
import { OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";
import { api } from "../../services/api";
import { OrderStatus } from "../../types/OrderStatus";
import socketIo from 'socket.io-client';
import { toast } from 'react-toastify'

export function Orders () {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const uri = import.meta.env.DEV ? 'http://localhost:3333' : import.meta.env.API_URL;
    const io  = socketIo(uri, {
      transports: ['websocket'],
    });

    io.on('orders@new', (order) => {
      toast('Novo pedido cadastrado')
      setOrders(prevState => prevState.concat(order))
    })
  }, [])

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

  function handleOrderDelete(orderId: string) {
    setOrders(prevState => prevState.filter(order => order._id !== orderId));
  }

  if(isLoading) return null;

  return (
    <Container>
      <OrdersBoard
        status="WAITING"
        orders={waiting}
        onUpdateOrCancelOrder={handleOrdersExhibition}
        onDeleteOrder={handleOrderDelete}
        />
      <OrdersBoard
        status="IN_PRODUCTION"
        orders={inProduction}
        onUpdateOrCancelOrder={handleOrdersExhibition}
        onDeleteOrder={handleOrderDelete}
        />
      <OrdersBoard
        status="DONE"
        orders={done}
        onUpdateOrCancelOrder={handleOrdersExhibition}
        onDeleteOrder={handleOrderDelete}
        />
      <OrdersBoard
        status="CANCELED"
        orders={canceled}
        onUpdateOrCancelOrder={handleOrdersExhibition}
        onDeleteOrder={handleOrderDelete}
      />
    </Container>
  )
}
