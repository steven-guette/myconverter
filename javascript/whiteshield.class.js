class WShield {
    static IsNumber(value, negative=true) {
        if (negative)
            return /^-?[0-9]+(?:[.,][0-9]*)?$/.test(value);
        return /^[0-9]+(?:[.,][0-9]*)?$/.test(value);
    }

    static IsInt(value, negative=true) {
        if (negative)
            return /^-?[1-9][0-9]*$/.test(value);
        return /^[1-9][0-9]*$/.test(value);
    }

    static IsFloat(value, negative=true) {
        if (negative)
            return /^-?[0-9]+([.,][0-9]*)$/.test(value);
        return /^[0-9]+([.,][0-9]*)$/.test(value);
    }

    static RIPBadChars(value, pattern) {
        let newValue = '';

        if (typeof value == 'string') {
            for (const char of value) {
                if (char.match(pattern))
                    newValue += char;
            }
        }

        return newValue;
    }
}