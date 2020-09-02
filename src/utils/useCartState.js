import { useState, useEffect } from 'react';

const useCartState = (data) => {
  
  const {id_user, id_product, id_shop, countShop} = data;

  const [list, setList] = useState({ '': [] });

  useEffect(() => {
    const fetchShop = async () => {
      try {
        // const response = await fetch(API);
        // const data = await response.json();
        return setList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShop();
  }, []);
  return list;
};

export default useCartState;
