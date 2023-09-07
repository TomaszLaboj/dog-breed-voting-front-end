import { Box, Button, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { LeaderboardDog } from "../types/dog";
import { OneLeaderboardDog } from "./OneLeaderboardDog";

export function Leaderboard(): JSX.Element {
    const [leaderboard, setLeaderboard] = useState<LeaderboardDog[]>();

    async function getAndSetLeaderboard() {
        const result = await axios.get(
            "https://dog-breed-voting-back-end.onrender.com/leaderboard"
        );
        setLeaderboard(result.data);
    }

    useEffect(() => {
        getAndSetLeaderboard();
    }, []);
    console.log(leaderboard);

    return (
        <>
            <Box>
                <Heading>Top voted dog breeds</Heading>
                {leaderboard !== undefined &&
                    leaderboard.map((dog) => (
                        <OneLeaderboardDog key={dog.breed_name} dog={dog} />
                    ))}
                <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => getAndSetLeaderboard()}
                >
                    Refresh
                </Button>
            </Box>
        </>
    );
}
