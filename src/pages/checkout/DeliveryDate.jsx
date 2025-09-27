import dayjs from "dayjs";



export function DeliveryDate({ cartItem, deliveryOptions }) {
  const selectedDeliveryOption = deliveryOptions.find(deliveryOption => {
    return deliveryOption.id === cartItem.deliveryOptionId;
  });
  return (
    <div key={cartItem.productId} className="delivery-date">
      Delivery date:
      {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
        "dddd, MMMM D"
      )}
    </div>
  );
}
