export function convertUsDateToFrDate(date) {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}

export function convetDateToFrDate(date) {
  var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  return new Date(date).toLocaleString('fr-FR', options);
}
