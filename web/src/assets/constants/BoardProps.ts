interface BoardProps {
  [key: string]: {
    label: string
    icon: string
  }
}

export const boardProps: BoardProps = {
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
