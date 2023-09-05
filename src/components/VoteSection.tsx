import { HStack, Heading } from "@chakra-ui/react";
import { OneVotePicture } from "./OneVotePicture";

export function VoteSection(): JSX.Element {
    return (
        <>
            <Heading as="h3" size="lg" p={4}>
                Pick your favourite
            </Heading>
            <HStack>
                <OneVotePicture />
                <OneVotePicture />
            </HStack>
        </>
    );
}
