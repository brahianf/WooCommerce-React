import { useState, useEffect } from 'react';

const useInitialState = API => {
  const [list, setList] = useState({ '': [] });

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(API);
        const data = await response.json();
        return setList(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchList();
  }, []);
  return list;
};

export default useInitialState;
