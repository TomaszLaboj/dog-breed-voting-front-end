import { Header } from "./Header";
import { Leaderboard } from "./LeaderBoard";
import { VoteSection } from "./VoteSection";

export function DogVotingApp(): JSX.Element {
    return (
        <>
            <Header />
            <VoteSection />
            <Leaderboard />
        </>
    );
}
