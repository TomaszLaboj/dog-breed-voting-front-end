import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
} from "@chakra-ui/react";
import { Dog } from "../types/dog";
import { useEffect, useState } from "react";
import axios from "axios";

interface OneVotePictureProps {
    oneDog: Dog;
    handleVote: (oneDog: Dog) => Promise<void>;
}

export function OneVotePicture({
    oneDog,
    handleVote,
}: OneVotePictureProps): JSX.Element {
    const [imageURL, setImageURL] = useState(oneDog.imageUrl);

    useEffect(() => {
        setImageURL(oneDog.imageUrl);
    }, [oneDog]);

    async function getAndSetNewImage() {
        const response = await axios.get(
            `https://dog-breed-voting-back-end.onrender.com/dogs/${oneDog.breed_name}`
        );
        const newDogImageURL = response.data.imageUrl;
        setImageURL(newDogImageURL);
    }

    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src={imageURL}
                    alt={`${oneDog.breed_name}`}
                    borderRadius="lg"
                    onClick={() => getAndSetNewImage()}
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{oneDog.breed_name}</Heading>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button
                    variant="solid"
                    colorScheme="blue"
                    onClick={() => handleVote(oneDog)}
                >
                    Vote
                </Button>
            </CardFooter>
        </Card>
    );
}
