import React, {createContext, useContext, useEffect, useState} from 'react';
import constants from '../constants';
import axios from 'axios';

export const SheetContext = createContext({
  productList: null,
  setProductList: () => {},
});

export default function SheetProvider({children}) {
  const {googleapis} = constants;
  const [productList, setProductList] = useState(null);

  useEffect(() => {
    getProductList();
  }, []);

  const getSheetAPI = tab =>
    `${googleapis.baseURL}${googleapis.sheetId}/values/${tab}?alt=json&key=${googleapis.key}`;

  const parseProductList = inputList => {
    const keys = inputList[0];
    const result = inputList
      .slice(1)
      .map(item =>
        item.reduce(
          (acc, value, index) => ({...acc, [keys[index]]: value}),
          {},
        ),
      );
    console.log('result', result);
    return result;
  };

  const getProductList = async () => {
    const result = await axios({
      method: 'get',
      url: getSheetAPI(googleapis.tab.product.name),
    });
    setProductList(parseProductList(result.data.values));
  };

  const updateProductList = data => {
    setProductList(data);
  };

  return (
    <SheetContext.Provider
      value={{
        productList,
        updateProductList,
      }}>
      {children}
    </SheetContext.Provider>
  );
}

export function useSheet() {
  return useContext(SheetContext);
}
