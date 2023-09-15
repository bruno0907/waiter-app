import { useEffect } from "react";
import { boardProps } from "../../assets/constants/BoardProps";
import { formatCurrency } from "../../utils/formatCurrency";
import { Order } from "../OrdersBoard";
import { Container, Overlay } from "./style";
import closeIcon from '../../assets/images/close-icon.svg'

interface ModalProps {
  isVisible: boolean;
  order: Order | null;
  onClose: () => void;
}

export function OrderModal ({ isVisible, order, onClose }: ModalProps) {

  const total = order?.products.reduce((acc, products) => {
    return acc + (products.product.price * products.quantity)
  }, 0) ?? 0

  async function handleCancelOrder(orderId: string) {
    console.log('canceled order: ' ,{ orderId })
    onClose()
  }

  async function handleUpdateOrderStatus(order: Order) {
    let orderStatus

    if(order.status === 'WAITING') {
      orderStatus = 'IN_PRODUCTION'
    }

    if(order.status === 'IN_PRODUCTION') {
      orderStatus = 'DONE'
    }

    const updatedOrder = {
      _id: order._id,
      status: orderStatus
    }

    console.log('updated order status: ', { updatedOrder })
  }

  useEffect(() => {
    function handleCloseModalByESC(e: KeyboardEvent) {
      if(isVisible && e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keyup', handleCloseModalByESC)

    return () => document.removeEventListener('keyup', handleCloseModalByESC)

  }, [onClose, isVisible])

  if (!isVisible || !order) return null;

  return (
    <Overlay>
      <Container>
        <header>
          <strong>Mesa {order?.table}</strong>
          <button onClick={onClose}>
            <img src={closeIcon} />
          </button>
        </header>

        <div className="status">
          <span>Status do Pedido</span>
          <strong className="status">{boardProps[order.status].icon} {boardProps[order.status].label}</strong>
        </div>

        <ul>
          {order.products.map((product) => {
            return (
              <li key={product._id}>
                <img src={`http://localhost:3333/uploads/${product.product.imagePath}`} />

                <span>{product.quantity}x</span>
                <div>
                  <strong>{product.product.name}</strong>
                  <span>{formatCurrency(product.product.price)}</span>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="total">
          <span>Total</span>
          <strong>{formatCurrency(total)}</strong>
        </div>

        <footer>
          {order.status === 'WAITING' && (
            <button
              className="primary"
              onClick={() => handleUpdateOrderStatus(order)}
            >👩‍🍳 Iniciar Produção</button>
          )}

          {order.status === 'IN_PRODUCTION' && (
            <button
              className="primary"
              onClick={() => handleUpdateOrderStatus(order)}
            >✅ Concluir Pedido</button>
          )}

          <button
            className="secondary"
            onClick={() => handleCancelOrder(order._id)}
          >❌ Cancelar Pedido</button>
        </footer>

      </Container>
    </Overlay>
  )
}
