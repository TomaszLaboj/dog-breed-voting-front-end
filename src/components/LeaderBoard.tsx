import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
import { TriangleUpIcon } from "@chakra-ui/icons";
import { LeaderboardDog } from "../types/dog";
import { useEffect, useState } from "react";
import axios from "axios";

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
            <Heading>Top voted dog breeds</Heading>
            <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
            >
                <Stack>
                    <CardBody>
                        <Heading size="md">The perfect latte</Heading>
                        {<TriangleUpIcon />}
                        <Text py="2">
                            Caffè latte is a coffee beverage of Italian origin
                            made with espresso and steamed milk.
                        </Text>
                    </CardBody>
                </Stack>
            </Card>
        </>
    );
}
