import {SimpleGrid, Text} from "@chakra-ui/react";
import {useGames} from '../hooks/useGames';
import Game_Card from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";

const GameGrid = () => {

    const skeletons = [1,2,3,4,5,6,7,8,9,10];
        const {data, error,isLoading}= useGames();

        return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm:1, md:2 , lg:3 , xl:5}} spacing={3} padding={5}  >
                {isLoading && skeletons.map(skeleton=>(
                    <GameCardContainer>
                        <GameCardSkeleton key={skeleton}/>
                    </GameCardContainer>))}
                {data.map((game)=>(
                    <GameCardContainer>
                        <Game_Card key={game.id} game={game}></Game_Card>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        </>
    )
}
export default GameGrid;