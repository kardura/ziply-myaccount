import { CardContent } from "@mui/material";
import React from "react";
import { StyledCustomizedButton } from "../../../Styles/BillingStyles/StyledCustomizedButtons";
import BillingTransactionCompleted from "./CompletedTransaction";
import ScheduledTransaction from "./ScheduledTransaction";

const TransactionButtons = ({ names }: any) => {
  const [completedActive, setCompletedActive] = React.useState(true);
  const [scheduledActive, setScheduledActive] = React.useState(false);

  const handleCompleted = () => {
    setCompletedActive(true);
    setScheduledActive(false);
  };

  const handleScheduled = () => {
    setCompletedActive(true);
    setScheduledActive(false);
  };

  return (
    <div>
      <StyledCustomizedButton
        isActive={completedActive}
        onClick={handleCompleted}>
        {names[0]}
      </StyledCustomizedButton>
      <StyledCustomizedButton
        isActive={scheduledActive}
        onClick={handleScheduled}>
        {names[1]}
      </StyledCustomizedButton>
      <CardContent>
        {completedActive && <BillingTransactionCompleted />}
        {scheduledActive && <ScheduledTransaction />}
      </CardContent>
    </div>
  );
};

export default TransactionButtons;
