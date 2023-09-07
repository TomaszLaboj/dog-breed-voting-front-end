import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Heading,
    Image,
    Stack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { breed_nameToDisplay_name, getNewDogImage } from "../core/utils";
import { Dog } from "../types/dog";

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

    async function handleImageClick() {
        const newImageUrl = await getNewDogImage(oneDog.breed_name);
        setImageURL(newImageUrl);
    }

    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src={imageURL}
                    alt={`${oneDog.breed_name}`}
                    borderRadius="lg"
                    onClick={handleImageClick}
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">
                        {breed_nameToDisplay_name(oneDog.breed_name)}
                    </Heading>
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
