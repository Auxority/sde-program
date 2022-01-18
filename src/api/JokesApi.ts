export default class JokesApi {

    /**
     * Get a random joke from https://jokeapi.dev/
     * @returns joke wrapped within a Promise
     */
    public static async getRandomJoke(): Promise<string> {
        const res = await fetch(`https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single`);
        const data = await res.json();
        if (data.error) {
            return "An error occurred while attempting to get a new joke.";
        }
        return data.joke;
    }
}