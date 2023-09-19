export function formatCurrency(value: number) {
  if(!value) return;

  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}
