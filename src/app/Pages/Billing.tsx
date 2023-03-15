import React from "react";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import CustomizedButton from "../components/Billing/BillingInformation/BillingInfoButtons";
import BillingTransactionCB from "../components/Billing/Transactions/TransactionButtons";
import FmdBadIcon from "@mui/icons-material/FmdBad";
import { Avatar, CardContent, Skeleton, Stack } from "@mui/material";

import {
  StyledDiv,
  StyledInnerDiv,
  StyledButton,
  SkeltonDiv,
  StyledCard,
  StyledIconDiv,
  StyledB,
  StyledSpan,
  StyledSp,
  OStyledButton,
} from "../Styles/BillingStyles/StyledBilling";
import CButton from "../components/CustomTabs";

export interface CustomizedButtonProps {
  isActive: boolean;
  onClick: () => void;
}

const Billing = () => {
  return (
    <StyledDiv>
      <div>
        <StyledIconDiv>
          <div>
            <Avatar
              sx={{ backgroundColor: "white", border: "2px solid green" }}>
              <RequestQuoteIcon sx={{ color: "green" }} />
            </Avatar>
          </div>
          <div>
            <h3>Total Balance</h3>
          </div>
        </StyledIconDiv>
        <StyledCard>
          <CardContent>
            <StyledInnerDiv>
              <div>
                <div>
                  <StyledSp>Ziply Fiber Green Plan</StyledSp>
                  <p>
                    <StyledB>$60.00</StyledB>
                    <br />
                    <StyledSpan>
                      <FmdBadIcon sx={{ color: "#ffbe48" }} />
                      Payment due Mar 28
                    </StyledSpan>
                  </p>
                </div>
              </div>
              <div>
                <StyledButton color="secondary" variant="contained">
                  Make a Payment
                </StyledButton>
              </div>
            </StyledInnerDiv>
            <p>Manage Autopay/Paperless Billing</p>
            <div>
              <CButton names={["Autopay", "Paperless Billing"]} />
            </div>
            <SkeltonDiv>
              <div>
                <h3>You haven't signed up for Autopay</h3>
              </div>
              <OStyledButton variant="outlined" color="success" disableRipple>
                Sign Up for Autopay
              </OStyledButton>
              <div>
                <Stack spacing={0.2}>
                  <Skeleton
                    variant="text"
                    sx={{
                      borderRadius: "15px 15px 0px 0px",
                      width: "125px",
                      fontSize: "1rem",
                    }}
                  />
                  <Skeleton variant="rectangular" width={125} height={10} />
                </Stack>
              </div>
            </SkeltonDiv>
          </CardContent>
        </StyledCard>
      </div>
      <div>
        <div>
          <StyledIconDiv>
            <div>
              <Avatar
                sx={{ backgroundColor: "white", border: "2px solid green" }}>
                <AttachMoneyIcon sx={{ color: "green" }} />{" "}
              </Avatar>
            </div>
            <div>
              <h3>Billing Information</h3>
            </div>
          </StyledIconDiv>
          <StyledCard>
            <CustomizedButton names={["Current Bill", "Billing History"]} />
          </StyledCard>
        </div>
        <div>
          <StyledIconDiv>
            <div>
              <Avatar
                sx={{ backgroundColor: "white", border: "2px solid green" }}>
                <SyncAltIcon sx={{ color: "green" }} />{" "}
              </Avatar>
            </div>
            <div>
              <h3>Transactions</h3>
            </div>
          </StyledIconDiv>
          <StyledCard>
            <BillingTransactionCB names={["completed", "Scheduled"]} />
          </StyledCard>
        </div>
      </div>
    </StyledDiv>
  );
};

export default Billing;
