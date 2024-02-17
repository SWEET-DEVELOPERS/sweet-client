export const TimeOptionHelper = (
  hours: number,
  tournamentStartDate: string,
  deliveryDate: string,
) => {
  const optionDateTime = new Date(tournamentStartDate);
  optionDateTime.setHours(optionDateTime.getHours() + hours);

  const deliveryDateStart = new Date(deliveryDate);
  deliveryDateStart.setHours(0, 0, 0, 0);

  const deliveryDateEnd = new Date(deliveryDate);
  deliveryDateEnd.setHours(23, 59, 59, 999);

  const isAfterDelivery = optionDateTime.getTime() > deliveryDateEnd.getTime();
  const isBeforeDelivery = optionDateTime.getTime() < deliveryDateStart.getTime();

  const dateType = isAfterDelivery
    ? '선물 전달일 이후'
    : isBeforeDelivery
      ? ''
      : '선물 전달일 당일';

  return { optionDateTime, dateType, isAfterDelivery };
};
