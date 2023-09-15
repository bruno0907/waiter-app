import { Order, OrdersBoard } from "../OrdersBoard";
import { Container } from "./styles";

const mock = {
  WAITING: [
    {
      _id: '1',
      table: 5,
      status: 'WAITING',
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: '1668472896991-quatro-queijos.png',
            price: 40,
          },
          quantity: 3,
          _id: '6372e48cbcd195b0d3d0f7f4'
        },
        {
          product: {
            name: 'Coca cola',
            imagePath: '1668473462705-coca-cola.png',
            price: 7,
          },
          quantity: 2,
          _id: '6372e48cbcd195b0d3d0f7f5'
        }
      ]
    },
    {
      _id: '2',
      table: 2,
      status: 'WAITING',
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: '1668472896991-quatro-queijos.png',
            price: 40,
          },
          quantity: 3,
          _id: '6372e48cbcd195b0d3d0f7f4'
        },
        {
          product: {
            name: 'Coca cola',
            imagePath: '1668473462705-coca-cola.png',
            price: 7,
          },
          quantity: 2,
          _id: '6372e48cbcd195b0d3d0f7f5'
        }
      ]
    },
  ],
  IN_PRODUCTION: [
    {
      _id: '3',
      table: 4,
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: '1668472896991-quatro-queijos.png',
            price: 40,
          },
          quantity: 3,
          _id: '6372e48cbcd195b0d3d0f7f4'
        },
      ]
    },
  ],
  DONE: [
    {
      _id: '4',
      table: 1,
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: '1668472896991-quatro-queijos.png',
            price: 40,
          },
          quantity: 3,
          _id: '6372e48cbcd195b0d3d0f7f4'
        },
        {
          product: {
            name: 'Coca cola',
            imagePath: '1668473462705-coca-cola.png',
            price: 7,
          },
          quantity: 2,
          _id: '6372e48cbcd195b0d3d0f7f5'
        }
      ]
    },
    {
      _id: '5',
      table: 3,
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: '1668472896991-quatro-queijos.png',
            price: 40,
          },
          quantity: 3,
          _id: '6372e48cbcd195b0d3d0f7f4'
        },
        {
          product: {
            name: 'Coca cola',
            imagePath: '1668473462705-coca-cola.png',
            price: 7,
          },
          quantity: 2,
          _id: '6372e48cbcd195b0d3d0f7f5'
        }
      ]
    },
    {
      _id: '6',
      table: 7,
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: '1668472896991-quatro-queijos.png',
            price: 40,
          },
          quantity: 3,
          _id: '6372e48cbcd195b0d3d0f7f4'
        },
        {
          product: {
            name: 'Coca cola',
            imagePath: '1668473462705-coca-cola.png',
            price: 7,
          },
          quantity: 2,
          _id: '6372e48cbcd195b0d3d0f7f5'
        }
      ]
    },

  ],

}

export function Orders () {

  return (
    <Container>
      {Object.entries(mock).map((order) => {
        return (
          <OrdersBoard
            key={order[0]}
            statusLabel={order[0]}
            orders={order[1] as Order[]}
          />
        )
      })}
    </Container>
  )
}
