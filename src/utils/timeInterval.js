import { intervalToDuration } from 'date-fns';

function timeInterval (date) {
  const startDate = new Date(date);
  const endDate = new Date();

  const durations = intervalToDuration({
    start: startDate,
    end: endDate
  });
  
  if(durations.years > 0){
    return `há ${durations.years} anos`;
  }
  else if(durations.months > 0){
    return `há ${durations.months} meses`;
  }
  else if(durations.days > 0){
    return `há ${durations.days} dias`;
  }
  else if(durations.hours > 0){
    return `há ${durations.hours} horas`;
  }
  else if(durations.minutes > 0){
    return `há ${durations.minutes} minutos`;
  }
  else{
    return 'neste momento';
  }
}

export default timeInterval;
