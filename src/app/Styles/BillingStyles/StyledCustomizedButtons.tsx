import styled from "styled-components";
import { CustomizedButtonProps } from "../../Pages/Billing";


export const StyledCustomizedButton=styled.button<CustomizedButtonProps>`
border:none;
background-color:${({isActive})=>(isActive  ? "#0073f8fc" : "#eaeaead1")};
border-radius:3px;
color:${({isActive})=>(isActive  ? "#ffffff" : "#8f9092fc")};
padding:15px 32px;
text-align:center;
text-decoration:none;
display:inline-block;
font-size:16px;
cursor:pointer;
`

export const StyleCButton=styled(StyledCustomizedButton)`
padding:15px 95px;
`