import React from "react";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <div>
      整体框架样式页面
      <Outlet />
    </div>
  );
}

export default Index;
