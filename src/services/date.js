export function brazilianDate(date) {
  const dateObj = !!date ? new Date(date) : new Date();
  return new Intl.DateTimeFormat('pt-BR').format(dateObj);
}
