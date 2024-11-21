class NumericConverter {
    static hexadecimal_abc = { 10 : 'A', 11 : 'B', 12 : 'C', 13 : 'D', 14 : 'E', 15 : 'F'};

    static ConvertDecimalToBinary(decimal) {
        let result = [];

        do {
            result.push((decimal % 2).toString());
            decimal = decimal >> 1;
        } while (decimal > 0);

        result.reverse();
        return result.join('');
    }

    static ConvertDecimalToHexadecimal(decimal) {
        let result = [];
        let stay = 0;

        do {
            stay = decimal % 16;

            if (stay in this.hexadecimal_abc)
                result.push(this.hexadecimal_abc[stay]);
            else
                result.push(stay.toString());

            decimal = decimal >> 4;
        } while (decimal > 0);

        result.reverse();
        return result.join('');
    }

    static ConvertBinaryToDecimal(binary) {
        let result = 0;
        let exponent = binary.length - 1;

        for (const number of binary) {
            result += number * Math.pow(2, exponent);
            exponent--;
        }

        return result;
    }

    static ConvertBinaryToHexadecimal(binary) {
        let result = '';
        let nybble = 0
        let binLength = binary.length;

        do {
            if (binLength >= 4) {
                nybble = this.ConvertBinaryToDecimal(binary.slice(0, 4));
                binary = binary.slice(4);
            }
            else
                nybble = this.ConvertBinaryToDecimal(binary);

            if (nybble in this.hexadecimal_abc)
                result += this.hexadecimal_abc[nybble];
            else
                result += nybble;

            binLength -= 4;

        } while (binLength > 0);

        return result;
    }

    static ConvertHexadecimalToDecimal(hexadecimal) {
        return parseInt(hexadecimal, 16);
    }

    static ConvertHexadecimalToBinary(hexadecimal) {
        let result = '';
        let hexadecimalAbcReversed = {};

        hexadecimal = hexadecimal.replace(/0*$/, '');

        for (const abcKey in this.hexadecimal_abc)
            hexadecimalAbcReversed[this.hexadecimal_abc[abcKey]] = abcKey;

        for (let char of hexadecimal) {
            if (char in hexadecimalAbcReversed)
                char = hexadecimalAbcReversed[char];

            result += this.ConvertDecimalToBinary(char);
        }

        return result;
    }
}