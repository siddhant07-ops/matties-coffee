const generateDeliveryDate = () => {
  const now = new Date();

  const randomDays = Math.floor(Math.random() * 5) + 1;

  const deliveryDate = new Date(now);

  deliveryDate.setDate(
    deliveryDate.getDate() + randomDays
  );

  return deliveryDate;
};

export default generateDeliveryDate;