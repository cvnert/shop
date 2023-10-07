import React from "react";
import { Outlet } from "react-router-dom";

function Index() {
  return (
    <div>
      产品页面
      <Outlet />
    </div>
  );
}

export default Index;
