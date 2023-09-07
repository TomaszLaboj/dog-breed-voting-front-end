import axios from "axios";

export async function getNewDogImage(breed_name: string): Promise<string> {
    const response = await axios.get(
        `https://dog-breed-voting-back-end.onrender.com/dogs/${breed_name}`
    );
    const newDogImageURL = response.data.imageUrl;
    return newDogImageURL;
}

export function breed_nameToDisplay_name(breed_name: string): string {
    const split_name = breed_name.split("-");
    if (split_name.length === 1) {
        return breed_name;
    }
    const display_name = [split_name[1], split_name[0]].join(" ");
    return display_name;
}
