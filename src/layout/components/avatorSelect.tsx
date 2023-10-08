import type { MenuProps } from "antd";
import { Dropdown } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        个人中心
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer">
        修改密码
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a style={{ color: "red" }} target="_blank" rel="noopener noreferrer">
        退出登录
      </a>
    ),
  },
];
function AvatorSelect({ children }: any) {
  return (
    <>
      <Dropdown menu={{ items }} placement="bottomLeft">
        {children}
      </Dropdown>
    </>
  );
}

export default AvatorSelect;
