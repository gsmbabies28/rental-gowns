import { createContext } from "react";

const ShopPageContext = createContext(()=>{});

export const ShopPageContextProvider= ShopPageContext.Provider;

export default ShopPageContext;