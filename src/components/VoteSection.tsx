import { HStack, Heading } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Dog } from "../types/dog";
import { OneVotePicture } from "./OneVotePicture";

export function VoteSection(): JSX.Element {
    const [dogs, setDogs] = useState<Dog[]>();

    async function getAndSetDogs() {
        const result = await axios.get(
            "https://dog-breed-voting-back-end.onrender.com/dogs"
        );
        setDogs(result.data);
    }
    const handleVote = async (oneDog: Dog) => {
        await axios.put(
            `https://dog-breed-voting-back-end.onrender.com/vote/${oneDog.name}`
        );
        await getAndSetDogs();
    };

    useEffect(() => {
        getAndSetDogs();
    }, []);

    return (
        <>
            <Heading as="h3" size="lg" p={4}>
                Pick your favourite
            </Heading>
            {dogs && (
                <HStack>
                    <OneVotePicture oneDog={dogs[0]} handleVote={handleVote} />
                    <OneVotePicture oneDog={dogs[1]} handleVote={handleVote} />
                </HStack>
            )}
        </>
    );
}
