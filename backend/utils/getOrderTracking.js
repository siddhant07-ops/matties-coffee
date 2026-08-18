const getOrderTracking = (order) => {
  const now = new Date();

  const createdAt = new Date(order.createdAt);
  const estimatedDelivery = new Date(order.estimatedDelivery);

  const totalDuration =
    estimatedDelivery.getTime() - createdAt.getTime();

  const elapsedDuration =
    now.getTime() - createdAt.getTime();

  const progress = elapsedDuration / totalDuration;

  let status = "Order Confirmed";

  if (progress >= 1) {
    status = "Delivered";
  } else if (progress >= 0.75) {
    status = "Out for Delivery";
  } else if (progress >= 0.5) {
    status = "Packed";
  } else if (progress >= 0.25) {
    status = "Preparing";
  }

  const trackingProgress = Math.min(
    Math.max(Math.round(progress * 100), 0),
    100
  );

  return {
    status,
    progress: trackingProgress,
  };
};

export default getOrderTracking;