import { Heading } from "@chakra-ui/react";

export function Header(): JSX.Element {
    return (
        <header>
            <Heading as="h1" size="2xl" p={8} >
                Dog breed voting app!
            </Heading>
        </header>
    );
}
