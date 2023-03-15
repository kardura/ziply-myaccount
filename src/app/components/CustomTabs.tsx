import React from 'react'
import { StyleCButton, StyledCustomizedButton } from '../Styles/BillingStyles/StyledCustomizedButtons'

const CustomTabs=({names}:any)=> {
    const [autoPayActive,setAutoPayActive]=React.useState(true)
    const [paperLessActive,setPaperLessActive]=React.useState(false)


    const handleAutoPay=()=>{
      setAutoPayActive(true);
      setPaperLessActive(false);
    }
  
    const handlePaperLess=()=>{
      setPaperLessActive(true);
      setAutoPayActive(false);    
    }
   
    return (
      <div>
        <StyleCButton
            isActive={autoPayActive  }
            onClick={handleAutoPay}
        >
        {names[0]}
        </StyleCButton>
        <StyledCustomizedButton
            isActive={paperLessActive }
            onClick={ handlePaperLess}
        >
        {names[1]} 
        </StyledCustomizedButton> 
        
      </div>
    )
}

export default CustomTabs
