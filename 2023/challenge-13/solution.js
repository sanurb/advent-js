function calculateTime(deliveries) {
  const SECONDS_PER_MINUTE = 60;
  const SECONDS_PER_HOUR = 3600;
  const TIME_LIMIT_HOURS = 7;
  const maxTimeInSeconds = SECONDS_PER_HOUR * TIME_LIMIT_HOURS;
  let totalTimeInSeconds = 0;

  for (const d of deliveries) {
    const [hours, minutes, seconds] = d.split(':').map(Number);
    totalTimeInSeconds += hours * SECONDS_PER_HOUR + minutes * SECONDS_PER_MINUTE + seconds;
  }

  const timeDifference = maxTimeInSeconds - totalTimeInSeconds;
  const sign = timeDifference > 0;

  totalTimeInSeconds = Math.abs(timeDifference);

  let response = ['', '-'][+sign];

  response += `${(~~(totalTimeInSeconds / SECONDS_PER_HOUR)).toString().padStart(2, '0')}:`;
  totalTimeInSeconds %= SECONDS_PER_HOUR;
  response += `${(~~(totalTimeInSeconds / SECONDS_PER_MINUTE)).toString().padStart(2, '0')}:`;
  totalTimeInSeconds %= SECONDS_PER_MINUTE;
  response += `${totalTimeInSeconds}`.padStart(2, '0');

  return response;
}

export { calculateTime };
