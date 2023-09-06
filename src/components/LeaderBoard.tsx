import { TriangleUpIcon } from "@chakra-ui/icons";
import { Box, Card, CardBody, Heading, Stack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { LeaderboardDog } from "../types/dog";

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
    function formatLeaderboardDog(dog: LeaderboardDog) {
        return (
            <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
            >
                <Stack>
                    <CardBody>
                        <Heading size="md">
                            {dog.breed_name}
                            <TriangleUpIcon />
                            {dog.votes}
                        </Heading>
                    </CardBody>
                </Stack>
            </Card>
        );
    }
    return (
        <>
            <Box>
                <Heading>Top voted dog breeds</Heading>
                {leaderboard === undefined
                    ? null
                    : leaderboard.map((dog) => formatLeaderboardDog(dog))}
            </Box>
        </>
    );
}
