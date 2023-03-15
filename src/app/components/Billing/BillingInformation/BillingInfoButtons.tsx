import { CardContent } from "@mui/material";
import React from "react";
import { StyledCustomizedButton } from "../../../Styles/BillingStyles/StyledCustomizedButtons";
import CurrentBillInfo from "./CurrentBill/CurrentBill";
import BillingHistoryInfo from "./BillingHistory";

const BillingInfoButtons = ({ names }: any) => {
  const [activeCurrentBill, setActiveCurrentBill] = React.useState(true);
  const [activeBillingHistory, setActiveBillingHistory] = React.useState(false);

  const handleCurrentBill = () => {
    setActiveCurrentBill(true);
    setActiveBillingHistory(false);
  };
  const handleBillingHistory = () => {
    setActiveBillingHistory(true);
    setActiveCurrentBill(false);
  };

  return (
    <div>
      <StyledCustomizedButton
        isActive={activeCurrentBill}
        onClick={handleCurrentBill}>
        {names[0]}
      </StyledCustomizedButton>
      <StyledCustomizedButton
        isActive={activeBillingHistory}
        onClick={handleBillingHistory}>
        {names[1]}
      </StyledCustomizedButton>
      <CardContent>
        {activeCurrentBill && <CurrentBillInfo />}
        {activeBillingHistory && <BillingHistoryInfo />}
      </CardContent>
    </div>
  );
};

export default BillingInfoButtons;
