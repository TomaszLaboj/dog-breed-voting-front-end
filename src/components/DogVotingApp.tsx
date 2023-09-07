import { Grid, VStack } from "@chakra-ui/react";
import { Header } from "./Header";
import { Leaderboard } from "./LeaderBoard";
import { VoteSection } from "./VoteSection";
import { TopThreeDogs } from "./TopThreeDogs";
import { useEffect, useState } from "react";
import axios from "axios";
import { LeaderboardDog } from "../types/dog";

export function DogVotingApp(): JSX.Element {
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
            <Header />
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={4}
            >
                <VStack>
                    <TopThreeDogs leaderboard={leaderboard} />
                    <VoteSection getAndSetLeaderboard={getAndSetLeaderboard} />
                </VStack>
                <Leaderboard
                    leaderboard={leaderboard}
                    getAndSetLeaderboard={getAndSetLeaderboard}
                />
            </Grid>
        </>
    );
}
