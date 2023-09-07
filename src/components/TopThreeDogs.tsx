import { HStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { DogWithVotes } from "../types/dog";
import { OneTopDog } from "./OneTopDog";

export function TopThreeDogs(): JSX.Element {
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
