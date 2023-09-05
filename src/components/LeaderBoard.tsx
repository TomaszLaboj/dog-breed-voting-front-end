import { Card, CardBody, Heading, Stack, Text } from "@chakra-ui/react";
// import { TriangleUpIcon } from "@chakra-ui/icons";

export function Leaderboard(): JSX.Element {
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
                        {/* <TriangleUpIcon /> */}
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
