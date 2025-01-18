import {Card, CardBody, Heading, HStack, Image, } from "@chakra-ui/react";
import {Game} from "@/hooks/useGames.ts";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import getCroppedImageUrl from "@/services/image-url.ts";

interface Props {
    game:Game
}
export const GameCard = ({game}:Props) => {
    return(
        <Card borderRadius={10} overflow={"hidden"}>
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
               <HStack justifyContent="space-between">
                <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
                <CriticScore score={game.metacritic}></CriticScore>
               </HStack>
            </CardBody>
        </Card>
    )
}
export default GameCard;