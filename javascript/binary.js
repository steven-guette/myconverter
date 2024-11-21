const iDecimal = document.getElementById("ITextDecimal");
const iBinary = document.getElementById("ITextBinary");
const iHexadecimal = document.getElementById("ITextHexadecimal");

function DecimalConvert() {
    const iValue = WShield.RIPBadChars(iDecimal.value, /[0-9]/);

    if (iValue.length > 0) {
        iDecimal.value = iValue;
        iBinary.value = NumericConverter.ConvertDecimalToBinary(iValue);
        iHexadecimal.value = NumericConverter.ConvertDecimalToHexadecimal(iValue);
    } else {
        ClearFields(iBinary, iHexadecimal);
    }
}

function BinaryConvert() {
    const iValue = WShield.RIPBadChars(iBinary.value, /[0-1]/);

    if (iValue.length > 0) {
        iBinary.value = iValue;
        iDecimal.value = NumericConverter.ConvertBinaryToDecimal(iValue);
        iHexadecimal.value = NumericConverter.ConvertBinaryToHexadecimal(iValue);
    } else {
        ClearFields(iDecimal, iHexadecimal);
    }
}

iDecimal.addEventListener('keyup', DecimalConvert);
iDecimal.addEventListener('paste', function(event) {
    event.preventDefault();
    iDecimal.value = GetClipboardData(event);
    DecimalConvert();
});

iBinary.addEventListener('keyup', BinaryConvert);
iBinary.addEventListener('paste', function(event) {
    event.preventDefault();
    iBinary.value = GetClipboardData(event);
    BinaryConvert();
});