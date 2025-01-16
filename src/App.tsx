import {Grid, GridItem, useBreakpointValue,} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";

function App() {
    const isLargeScreen = useBreakpointValue({base: false, lg: true});

    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
        }}>
            <GridItem area="nav">
                <NavBar/>
            </GridItem>
            {isLargeScreen && <GridItem area="aside">Aside</GridItem>}
            <GridItem area="main">
                <GameGrid/>
            </GridItem>
        </Grid>
    );
}
export default App
