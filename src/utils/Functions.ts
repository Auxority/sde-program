export default abstract class Functions {

    /**
     * Get a random number between in between
     * @param min Minimum value
     * @param max Maximum value
     * @returns Number in between
     */
    public static getRandomArbitrary(min: number, max: number) {
        return min + Math.random() * (max - min);
    }

    /**
     * Creates an html image element with the given source.
     * @param src The source of the image.
     * @returns HTML Image element
     */
    public static createImage(src: string): HTMLImageElement {
        const image = new Image();
        image.src = src;
        return image;
    }

    /**
     * Search something within a enum
     * @param enumName in which enum it needs to search
     * @returns item within the enum
     */
    public static getRandomEnum<T>(enumName: T): T[keyof T] {
        const enumValues = Object.values(enumName) as unknown as T[keyof T][];
        const randomIndex = Math.floor(Math.random() * enumValues.length);
        return enumValues[randomIndex];
    }
}