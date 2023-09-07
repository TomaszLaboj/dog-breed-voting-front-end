import { Box, Button, Heading } from "@chakra-ui/react";
import { LeaderboardDog } from "../types/dog";
import { OneLeaderboardDog } from "./OneLeaderboardDog";

interface LeaderboardProps {
    leaderboard: LeaderboardDog[] | undefined;
    getAndSetLeaderboard(): Promise<void>;
}

export function Leaderboard({
    leaderboard,
    getAndSetLeaderboard,
}: LeaderboardProps): JSX.Element {
    return (
        <>
            <Box>
                <Heading>Top voted dog breeds</Heading>
                {leaderboard ? (
                    leaderboard.map((dog) => (
                        <OneLeaderboardDog key={dog.breed_name} dog={dog} />
                    ))
                ) : (
                    <h4>loading leaderboard</h4>
                )}
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
