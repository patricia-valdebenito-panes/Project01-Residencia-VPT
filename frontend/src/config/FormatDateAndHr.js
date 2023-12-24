const formatDateAndTime = (input) => {
    const date = new Date(input);
 // Verificar si la fecha es válida
 if (isNaN(date.getTime())) {
    console.error('Fecha no válida');
    return { dayDate: '', dayHour: '' };
  }

  // Obtener la fecha en formato 'YYYY-MM-DD'
  const dayDate = date.toISOString().split('T')[0];

  // Obtener la hora en el huso horario de Chile
  const chileTime = new Intl.DateTimeFormat('es-CL', {
    timeZone: 'America/Santiago',
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    fractionalSecondDigits: 1
  });

  const dayHour = chileTime.format(date);

  return { dayDate, dayHour };
  }
  

export default formatDateAndTime;