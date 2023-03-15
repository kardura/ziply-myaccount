import { Box, Button, Card } from "@mui/material";

import { styled } from '@mui/system'

export const StyledBox=styled(Box)({
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-between",
    alignItems:"center",

})

export const StyledCard=styled(Card)({
    padding:"25px",
})

export const StyledDiv=styled('div')({
    padding:"60px 100px",
    display:"flex",
    justifyContent:"space-around"

})


export const StyledInnerDiv=styled('div')({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    gap:"20px"
})

export const StyledIconDiv=styled('div')({
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    gap:"20px"
})


export const StyledButton=styled(Button)(({theme})=>({
    padding:"10px 40px",
    borderRadius:"25px",
    marginY:"1rem",
    
}))

// export const OStyledButton=styled(StyledButton)({
//     border:"2px solid ",
//     "&:hover":{background:"none",border:"2px solid"}
   
// })

export const StyledManageButton=styled(Button)({
    "&.MuiButton-root":{
        padding:"10px 50px",
        borderRadius:"25px"
    }
})

export const SkeltonDiv=styled('div')({
    marginTop:"80px ",
    display:"flex",
    flexDirection:"column",
    gap:"50px",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"620px"
})

export const StyledB=styled('b')({
    fontSize:"2rem"
})


export const StyledSpan=styled('span')({
    display:"flex",
    alignItems:"center"
})

export const StyledSp=styled(StyledSpan)({
    color:"#098500",
})

export const OStyledButton=styled(Button)(({theme})=>({
    padding:"10px 40px",
    border:"2px solid",
    borderRadius:"25px",
    "&:hover":{background:"none",border:"2px solid"}
}))


export const BOStyledButton=styled(OStyledButton)({
    width:"50%",
    marginTop:"30px"
})