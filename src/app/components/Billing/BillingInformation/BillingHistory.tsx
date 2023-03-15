import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { Divider } from '@mui/material';
import { BoxStyle1, StyledA } from './CurrentBill/CurrentBillStyle';
import { styled } from '@mui/system'




const BillingHistoryInfo =()=> {
  return (
  <>
        <p><b> Account Number</b> 425-267-9832-122322-5</p>
    <BoxStyle1>
        <MonthsDiv>
            <div>February 2023</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </MonthsDiv>     
        <Divider />
        <MonthsDiv>
            <div>January 2023</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </MonthsDiv>     
        <Divider />
        <MonthsDiv>
            <div>December 2022</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </MonthsDiv>     
        <Divider />
        <MonthsDiv>
            <div>November 2022</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </MonthsDiv>     
        <Divider />
        <MonthsDiv>
            <div>October 2022</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </MonthsDiv>     
        <Divider />
        <MonthsDiv>
            <div>September 2022</div>
            <StyledA><ChevronRightOutlinedIcon /></StyledA>
        </MonthsDiv>     
        <Divider />
        <StyledA>Show All Bills</StyledA>
    </BoxStyle1>
  </>
  )
}
export const MonthsDiv=styled('div')({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"10px",
    fontSize:"0.9rem",
    width:"475px"
})

export default BillingHistoryInfo



