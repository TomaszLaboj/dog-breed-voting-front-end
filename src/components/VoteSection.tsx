import { HStack, Heading } from "@chakra-ui/react";
import { OneVotePicture } from "./OneVotePicture";
import { useState, useEffect } from "react";
import { Dog } from "../types/dog";
import axios from "axios";

export function VoteSection(): JSX.Element {
    const [dogs, setDogs] = useState<Dog>();

    useEffect(() => {
        async function getAndSetDogs() {
            const result = await axios.get(
                "https://dog-breed-voting-back-end.onrender.com/dogs"
            );
            setDogs(result.data);
        }
        getAndSetDogs();
    }, []);
    console.log(dogs);
    return (
        <>
            <Heading as="h3" size="lg" p={4}>
                Pick your favourite
            </Heading>
            {dogs && (
                <HStack>
                    <OneVotePicture />
                    <OneVotePicture />
                </HStack>
            )}
        </>
    );
}
