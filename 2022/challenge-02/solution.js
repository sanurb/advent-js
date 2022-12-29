const countHours = (year, holidays) => {
  return holidays.reduce((overtimeHours, holiday) => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay();
    return dayOfWeek > 0 && dayOfWeek < 6 ? overtimeHours + 2 : overtimeHours;
  }, 0);
};

const countHoursAlt = (year, holidays) => {
  const weekdays = [1, 2, 3, 4, 5];

  const weekdaysHolidays = holidays.filter(holiday => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay();
    return weekdays.includes(dayOfWeek);
  });

  return weekdaysHolidays.length * 2;
};

export { countHours, countHoursAlt };
