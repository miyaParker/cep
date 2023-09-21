import { createContext } from "react";

const BannerContext = createContext({ visible:true, toggleVisible:(value:boolean)=>{} });
export default BannerContext;
