import axios from "axios";

export async function getNewDogImage(breed_name: string): Promise<string> {
    const response = await axios.get(
        `https://dog-breed-voting-back-end.onrender.com/dogs/${breed_name}`
    );
    const newDogImageURL = response.data.imageUrl;
    return newDogImageURL;
}
