import { Grid, GridItem, Show} from '@chakra-ui/react'

import NavBar from './component/NavBar';
import GameGrid from './component/GameGrid';



function App(){
  return(
    <Grid templateAreas={{base:`"nav" "main"`,
      lg:`"nav nav" "aside main"`,
      md:`"nav aside" "main"`
    }}>

      <GridItem area='nav' bg=""><NavBar/>
      </GridItem>

      <GridItem area='main' bg="">
        <GameGrid/>
      </GridItem>

      
      <Show above='lg'>
      <GridItem area='aside' bg="">aside</GridItem>

      </Show>

    </Grid>
    
  )

}
 export default App;