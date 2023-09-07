import { TriangleUpIcon } from "@chakra-ui/icons";
import { Card, Stack, CardBody, Heading } from "@chakra-ui/react";
import { Dog, LeaderboardDog } from "../types/dog";

interface OneLeaderboardDogProps {
    dog: LeaderboardDog;
}

export function OneLeaderboardDog({
    dog,
}: OneLeaderboardDogProps): JSX.Element {
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
