import useData from "@/hooks/useData.ts";
import {Genre} from "@/hooks/useGenres.ts";

export interface Platform {
    id:number;
    name:string;
    slug:string;
}

export interface Game {
    id:number;
    name:string;
    background_image:string;
    parent_platforms: {platform:Platform} [];
    metacritic: number;
}

export const useGames = (selectedGenre:Genre|null) => useData<Game>('/games',{params:{genres:selectedGenre?.id}},[selectedGenre?.id]);