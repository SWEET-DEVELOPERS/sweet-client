interface DateCheckType {
  date: string;
}

const DateCheck = ({ date }: DateCheckType) => {
  const currentDate = new Date();
  const targetDate = new Date(date);

  // 변환된 Date 객체를 사용하여 비교
  const isFutureDate = targetDate.getTime() > currentDate.getTime();

  return isFutureDate;
};

export default DateCheck;
