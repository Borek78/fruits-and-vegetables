import { useSelector } from "react-redux";
const address = useSelector((state) => state.delivery.deliveryAddress);

export const validateAddress = () => {
  console.log(address);
};
