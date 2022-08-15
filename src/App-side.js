import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//Pages
const App = () => {
  const itemsListS = useSelector((state) => state.cart.itemsList);
  console.log(itemsListS);

  const [itemsList, setItemsList] = useState(itemsListS);
  console.log(itemsList);

  useEffect(() => {
    setItemsList(itemsListS);
  }, [itemsListS]);
};

export default App;
