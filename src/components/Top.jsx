import { useContext } from "react";
import { AdminContext } from "../provider/AdminProvider";
import { EditButton } from "./EditButton";
import { Button } from "@chakra-ui/react";

export const Top = () => {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);

  const onClickButton = () => {
    // setIsAdminはisAdminを変更させる関数　!とすることで、クリックの度にtrue、falseが切り替わる
    setIsAdmin(!isAdmin);
  };

  return (
    <div>
      {isAdmin ? <span>管理者です</span> : <span>ゲストです</span>}
      <br />
      <Button onClick={onClickButton}>切り替え</Button>
      <EditButton />
    </div>
  );
};
