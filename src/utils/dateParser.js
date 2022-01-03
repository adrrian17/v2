export const monthAndYear = (date) => {
  let month = '';

  const monthNumber = new Intl.DateTimeFormat('es-MX', {
    month: 'numeric',
  }).format(new Date(date));

  const year = new Intl.DateTimeFormat('es-MX', {
    year: 'numeric',
  }).format(new Date(date));

  switch (monthNumber) {
    case '1':
      month = 'Enero';
      break;
    case '2':
      month = 'Febrero';
      break;
    case '3':
      month = 'Marzo';
      break;
    case '4':
      month = 'Abril';
      break;
    case '5':
      month = 'Mayo';
      break;
    case '6':
      month = 'Junio';
      break;
    case '7':
      month = 'Julio';
      break;
    case '8':
      month = 'Agosto';
      break;
    case '9':
      month = 'Septiembre';
      break;
    case '10':
      month = 'Octubre';
      break;
    case '11':
      month = 'Noviembre';
      break;
    case '12':
      month = 'Diciembre';
      break;

    default:
      break;
  }

  return `${month} ${year}`;
};

export const numericMonth = (date) => {
  return new Intl.DateTimeFormat('es-MX', {
    month: 'numeric',
  }).format(new Date(date));
};

export const dateFormatted = (date) => {
  return new Intl.DateTimeFormat('es-MX', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
};
