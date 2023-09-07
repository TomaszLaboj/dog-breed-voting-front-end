import { TriangleUpIcon } from "@chakra-ui/icons";
import { Card, Stack, CardBody, Heading } from "@chakra-ui/react";
import { LeaderboardDog } from "../types/dog";

export function OneLeaderboardDog(dog: LeaderboardDog): JSX.Element {
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
