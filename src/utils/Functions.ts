export default abstract class Functions {

    /**
     * Get a random number between in between
     * @param min Minimum value
     * @param max Maximum value
     * @returns Number in between
     */
    public static getRandomArbitrary(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }
}