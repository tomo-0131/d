import { Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AdminContext } from "../provider/AdminProvider";

export const EditButton = () => {
  // isAdminを利用すれば、管理者・ゲストかを判定できるため、setIsAdminは必要ない
  // useContextは、export内に書く
  const { isAdmin } = useContext(AdminContext);

  return <Button disabled={!isAdmin}>編集</Button>;
};
