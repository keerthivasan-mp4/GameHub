 import { HStack, Image,   } from "@chakra-ui/react";
 import ColorModeSwitch from "../component/ColorMode.tsx"

import logo from  "../assets/logo.png";
 const NavBar = ()=>{
    return(
        <HStack justifyContent='space-between' padding='1rem'>
            <Image src={logo} boxSize='4rem'/>
            <ColorModeSwitch/>
        </HStack>
    )
 }

 export default NavBar;  