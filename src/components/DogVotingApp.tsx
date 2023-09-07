import { Grid, VStack } from "@chakra-ui/react";
import { Header } from "./Header";
import { Leaderboard } from "./LeaderBoard";
import { VoteSection } from "./VoteSection";
import { TopThreeDogs } from "./TopThreeDogs";

export function DogVotingApp(): JSX.Element {
    return (
        <>
            <Header />
            <Grid
                templateRows="repeat(2, 1fr)"
                templateColumns="repeat(2, 1fr)"
                gap={4}
            >
                <VStack>
                    <TopThreeDogs />
                    <VoteSection />
                </VStack>
                <Leaderboard />
            </Grid>
        </>
    );
}
