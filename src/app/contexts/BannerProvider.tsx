import BannerContext from "@/app/contexts/BannerContext";
import { ReactElement, useState } from "react";

const BannerProvider = ({ children }: { children: ReactElement }) => {
  const [visible, setVisible] = useState(true);
  return (
    <BannerContext.Provider value={{ visible, toggleVisible: (value: boolean) => setVisible(value) }}>
      {children}
    </BannerContext.Provider>
  );
};
export default BannerProvider;
