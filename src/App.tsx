import {Button, ButtonGroup, Grid, GridItem, Show} from '@chakra-ui/react'
import { button } from 'framer-motion/client';
import NavBar from './component/NavBar';



function App(){
  return(
    <Grid templateAreas={{base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`,
      md:`"nav aside" "main"`
    }}>

      <GridItem area='nav' bg=""><NavBar/>


      </GridItem>
      <GridItem area='main' bg="">main</GridItem>
      <Show above='lg'>
      <GridItem area='aside' bg="">aside</GridItem>

      </Show>

    </Grid>
    
  )

}
 export default App;