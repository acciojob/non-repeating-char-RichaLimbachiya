function firstNonRepeatedChar(str) {
    const charCount = {};

    // First pass: count character frequencies
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Second pass: find the first character with count 1
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeating character found
    return null;
}
