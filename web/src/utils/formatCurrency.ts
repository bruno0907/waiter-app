export function formatCurrency(value: number) {
  if(!value) return;

  return Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}
