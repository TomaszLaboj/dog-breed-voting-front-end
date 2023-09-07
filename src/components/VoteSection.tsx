import { Box, Button, HStack, Heading, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Dog } from "../types/dog";
import { OneVotePicture } from "./OneVotePicture";
import { useSound } from "use-sound";

import bark from "/bark.wav";

export function VoteSection(): JSX.Element {
    const [dogs, setDogs] = useState<Dog[]>();
    console.log(dogs);

    const [play] = useSound(bark);

    async function getAndSetDogs() {
        const result = await axios.get(
            "https://dog-breed-voting-back-end.onrender.com/dogs"
        );
        setDogs(result.data);
    }
    const handleVote = async (oneDog: Dog) => {
        play();
        await axios.put(
            `https://dog-breed-voting-back-end.onrender.com/vote/${oneDog.breed_name}`
        );

        await getAndSetDogs();
    };

    useEffect(() => {
        getAndSetDogs();
    }, []);

    return (
        <>
            <Box>
                <Heading as="h3" size="lg" p={4}>
                    Pick your favourite
                </Heading>
                {dogs && (
                    <VStack>
                        <HStack>
                            <OneVotePicture
                                oneDog={dogs[0]}
                                handleVote={handleVote}
                            />
                            <OneVotePicture
                                oneDog={dogs[1]}
                                handleVote={handleVote}
                            />
                        </HStack>
                        <Button
                            variant="solid"
                            colorScheme="blue"
                            onClick={() => getAndSetDogs()}
                        >
                            Skip
                        </Button>
                    </VStack>
                )}
            </Box>
        </>
    );
}
