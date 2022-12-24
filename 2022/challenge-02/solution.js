const countHours = (year, holidays) => {
  return holidays.reduce((overtimeHours, holiday) => {
    const dayOfWeek = new Date(`${holiday}/${year}`).getDay();
    return dayOfWeek > 0 && dayOfWeek < 6 ? overtimeHours + 2 : overtimeHours;
  }, 0);
};

export { countHours };
