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

interface OneVotePictureProps {
    oneDog: Dog;
    handleVote: (oneDog: Dog) => Promise<void>;
}

export function OneVotePicture({
    oneDog,
    handleVote,
}: OneVotePictureProps): JSX.Element {
    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src={oneDog.imageUrl}
                    alt={`${oneDog.breed_name}`}
                    borderRadius="lg"
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
