import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import "./nav.scss";

export default function Nav() {
  const navigate = useNavigate();
  const goto = (key) => {
    const routeMap = {
      Wallets: "/",
      Add: "/add",
      Settings: "/settings",
    };
    navigate(routeMap[key]);
  };
  return (
    <Tabs
      color="primary"
      size="lg"
      aria-label="Tabs colors"
      radius="full"
      className="my-nav"
      onSelectionChange={(key) => goto(key)}
    >
      <Tab
        key="Wallets"
        title={
          <div className="flex items-center space-x-2 gap-1.5">
            <i className="ri-wallet-3-line text-xl font-black"></i>
            <span className="text-base">Wallets</span>
          </div>
        }
      />
      <Tab
        key="Add"
        title={
          <div className="flex items-center space-x-2 gap-1.5">
            <i className="ri-add-circle-line text-xl"></i>
            <span className="text-base">Add</span>
          </div>
        }
      />
      <Tab
        key="Settings"
        title={
          <div className="flex items-center space-x-2 gap-1.5">
            <i className="ri-settings-line text-xl"></i>
            <span className="text-base">Settings</span>
          </div>
        }
      />
    </Tabs>
  );
}
