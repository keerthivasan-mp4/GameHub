import{HStack,Switch,Text, useColorMode} from "@chakra-ui/react";
import React from "react";
 

function ColorModeToggle(){
    const{toggleColorMode, colorMode  } = useColorMode();
    return(
        <HStack>
            <Switch isChecked={colorMode==='dark'} onChange={toggleColorMode}/>
            <text>Dark Mode</text>
        </HStack>
        
    )
}

export default ColorModeToggle;