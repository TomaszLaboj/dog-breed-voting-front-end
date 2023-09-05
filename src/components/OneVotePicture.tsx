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
}

export function OneVotePicture({ oneDog }: OneVotePictureProps): JSX.Element {
    return (
        <Card maxW="sm">
            <CardBody>
                <Image
                    src={oneDog.imageUrl}
                    alt={`${oneDog.name}`}
                    borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                    <Heading size="md">{oneDog.name}</Heading>
                </Stack>
            </CardBody>
            <CardFooter>
                <Button variant="solid" colorScheme="blue">
                    Vote
                </Button>
            </CardFooter>
        </Card>
    );
}
