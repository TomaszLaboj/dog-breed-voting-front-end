import { HStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { DogWithVotes, LeaderboardDog } from "../types/dog";
import { OneTopDog } from "./OneTopDog";

interface TopThreeDogsProps {
    leaderboard: LeaderboardDog[] | undefined;
}

export function TopThreeDogs({ leaderboard }: TopThreeDogsProps): JSX.Element {
    const [topDogs, setTopDogs] = useState<DogWithVotes[]>();

    async function getAndSetTopDogs() {
        const response = await axios.get<DogWithVotes[]>(
            "https://dog-breed-voting-back-end.onrender.com/leaderboard/3"
        );
        const fetchedTopDogs = response.data;
        setTopDogs(fetchedTopDogs);
    }

    useEffect(() => {
        getAndSetTopDogs();
    }, []);

    useEffect(() => {
        getAndSetTopDogs();
    }, [leaderboard]);

    if (topDogs) {
        return (
            <HStack>
                {topDogs.map((oneTopDog) => {
                    return (
                        <OneTopDog
                            key={oneTopDog.breed_name}
                            topDog={oneTopDog}
                        />
                    );
                })}
            </HStack>
        );
    } else {
        return (
            <div>
                <h4>loading top dogs</h4>
            </div>
        );
    }
}
