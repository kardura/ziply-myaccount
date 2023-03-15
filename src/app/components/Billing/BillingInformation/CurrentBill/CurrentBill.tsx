
import React from 'react'

import { BOStyledButton, StyledCard } from '../../../../Styles/BillingStyles/StyledBilling'
import { BoxStyle2, BoxStyle1, StyledA,StyledP, StyledSpan } from './CurrentBillStyle'
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import CardContent from '@mui/material/CardContent'
import { styled } from '@mui/system'



function CurrentBillInfo() {
  return (
    <BoxStyle1>
      <div><p>Here is a detailed view of your current Ziply Fiber Bill. Click the <br /> "+ view details" to expand each section and reveal line item charges.</p></div>
      <div><p><b>Account Number</b> 425-267-9832-122322-5 <b> Billing Date</b> Jan 23 2020</p></div>
      <BoxStyle2>
        <BoxStyle2>
          <div><p><FeedOutlinedIcon /></p></div>
          <div><h3>Current Bill for 1/24/23-2/23/23</h3></div>
        </BoxStyle2>
        <div><StyledA>View Bill</StyledA></div>
      </BoxStyle2>
      <StyledCard>
        <CardContent>
          <BoxStyle2>
            <div><b>Ziply Monthly Service Charges</b> <StyledA>- hide details</StyledA></div>
            <div><p>$ 0.00</p></div>
          </BoxStyle2>
          <BoxStyle2>
            <div><StyledSpan> TOTAL MONTHLY SERVICE CHARGES</StyledSpan></div>
            <div> <StyledSpan>$ 0.00</StyledSpan></div>
          </BoxStyle2>
          <BoxStyle2>
            <div>Balance Forward</div>
            <div><StyledP>$73.35</StyledP></div>
          </BoxStyle2>
          <BoxStyle2>
            <div>New Charges</div>
            <div><StyledP>$0.00</StyledP></div>
          </BoxStyle2>
          <BoxStyle2>
            <div>Total Bill Amount</div>
            <div><StyledP><b>$73.35</b></StyledP></div>
          </BoxStyle2>
        </CardContent>
      </StyledCard>
      <BOStyledButton variant='outlined' color='success'  disableTouchRipple>Compare Bills</BOStyledButton>
    </BoxStyle1>
  )
  
}

export default CurrentBillInfo

