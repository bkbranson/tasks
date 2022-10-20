/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return [];
    }
    if (numbers.length === 1) {
        return [...numbers, ...numbers];
    }
    const ret: number[] = [numbers[0], numbers[numbers.length - 1]];
    return ret;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((num: number) => num * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ret = numbers.map((str: string): number =>
        isNaN(parseInt(str)) ? 0 : parseInt(str)
    );
    return ret;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const ret = amounts.map((str: string): number =>
        isNaN(parseInt(str.replace("$", "")))
            ? 0
            : parseInt(str.replace("$", ""))
    );
    return ret;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const cut = messages.filter(
        (str: string): boolean => str.indexOf("?") === -1
    );
    const ret = cut.map((st: string): string =>
        st.indexOf("!") !== -1 ? st.toUpperCase() : st
    );
    return ret;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const total = words.reduce(
        (currT: number, curStr: string) =>
            curStr.length < 4 ? currT + 1 : currT + 0,
        0
    );
    return total;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    }
    const allrgb = colors.every(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue"
    );
    return allrgb;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((tot: number, add: number) => tot + add, 0);
    /*console.log("Test: " + addends.join("+"));*/
    let ret = sum + "=" + addends.join("+");
    if (addends.length === 0) {
        ret = ret + "0";
    }
    return ret;
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
    if (values.findIndex((neg: number): boolean => neg < 0) !== -1) {
        /*const sum = values.reduce((currTotal: number, num: number) =>
            num >= 0 && bool ? currTotal + num : (bool = false)
        );*/
        const sliced = values.slice(
            0,
            values.findIndex((neg: number): boolean => neg < 0)
        );
        const sum = sliced.reduce((tot: number, curr: number) => tot + curr, 0);
        const ret = [...values];
        ret.splice(
            values.findIndex((neg: number): boolean => neg < 0) + 1,
            0,
            sum
        );
        return ret;
    } else {
        /* Sum up all of the numbers in sum, put sum at end, return. Don't mutate make copies */
        const sum = values.reduce(
            (currTot: number, num: number) => currTot + num,
            0
        );
        const ret = [...values];
        ret.push(sum);
        return ret;
    }
}
