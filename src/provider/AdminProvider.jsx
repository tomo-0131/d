import { createContext, useState } from "react";

export const AdminContext = createContext(false);

export const AdminProvider = (props) => {
  const { children } = props;

  const [isAdmin, setIsAdmin] = useState(false);
  // const sampleObj = { sampleValue: "テスト" };
  return (
    <AdminContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminContext.Provider>
  );
};
