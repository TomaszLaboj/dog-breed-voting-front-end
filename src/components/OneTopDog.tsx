import {
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { breed_nameToDisplay_name, getNewDogImage } from "../core/utils";
import { DogWithVotes } from "../types/dog";

interface OneTopDogProps {
    topDog: DogWithVotes;
}

export function OneTopDog({ topDog }: OneTopDogProps): JSX.Element {
    const [imageURL, setImageURL] = useState(topDog.imageUrl);

    async function handleImageClick() {
        const newImageUrl = await getNewDogImage(topDog.breed_name);
        setImageURL(newImageUrl);
    }

    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src={imageURL}
                    alt={`${topDog.breed_name}`}
                    borderRadius="lg"
                    onClick={handleImageClick}
                />
            </CardBody>
            <CardFooter>
                <Stack mt="6" spacing="3">
                    <Heading size="md">
                        {breed_nameToDisplay_name(topDog.breed_name)}
                    </Heading>
                    <Heading size="md">votes: {topDog.votes}</Heading>
                </Stack>
            </CardFooter>
        </Card>
    );
}
