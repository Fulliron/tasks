/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    } else if (numbers.length === 1) {
        const numberReturn = [...numbers, ...numbers];
        return numberReturn;
    } else {
        const numberReturn = [numbers[0], numbers[numbers.length - 1]];
        return numberReturn;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const numberReturn = numbers.map((num: number): number => num * 3);
    return numberReturn;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const numbersFromString = numbers.map((num: string): number =>
        isNaN(parseInt(num)) ? 0 : parseInt(num)
    );
    return numbersFromString;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const filterSymbol = amounts.map((amount: string): string =>
        amount[0] === "$" ? amount.slice(1) : amount
    );
    return stringsToIntegers([...filterSymbol]);
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQuestions = messages.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    const toShout = [...removeQuestions].map((msg: string): string =>
        msg[msg.length - 1] === "!" ? msg.toUpperCase() : msg
    );
    return toShout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = [...words].filter(
        (word: string): boolean => word.length < 4
    );
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const checked = [...colors].filter(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue"
    );
    return checked.length === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = [...addends].reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    return sum + "=" + addends.join("+") + (addends.length === 0 ? "0" : "");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNeg = values.findIndex((value: number): boolean => value < 0);
    const subset = [...values].slice(
        0,
        firstNeg !== -1 ? firstNeg : values.length
    );
    const sum = subset.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const returnArray = [...values];
    returnArray.splice(firstNeg !== -1 ? firstNeg + 1 : values.length, 0, sum);
    return returnArray;
}
