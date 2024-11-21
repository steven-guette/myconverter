const iDecimal = document.getElementById("ITextDecimal");
const iHexadecimal = document.getElementById("ITextHexadecimal");
const iBinary = document.getElementById("ITextBinary");



function ConvertDecimal() {
    const iValue = WShield.RIPBadChars(iDecimal.value, /[0-9]/);

    if (iValue.length > 0) {
        iDecimal.value = iValue;
        iHexadecimal.value = NumericConverter.ConvertDecimalToHexadecimal(iValue);
        iBinary.value = NumericConverter.ConvertDecimalToBinary(iValue);
    } else {
        ClearFields(iHexadecimal, iBinary);
    }
}

function ConvertHexadecimal() {
    const iValue = WShield.RIPBadChars(iHexadecimal.value, /[0-9]|[a-f]/i);

    if (iValue.length > 0) {
        iHexadecimal.value = iValue.toUpperCase();
        iDecimal.value = NumericConverter.ConvertHexadecimalToDecimal(iValue);
        iBinary.value = NumericConverter.ConvertHexadecimalToBinary(iValue);
    } else {
        ClearFields(iDecimal, iBinary);
    }
}

iDecimal.addEventListener('keyup', ConvertDecimal);
iDecimal.addEventListener('paste', function(event) {
    event.preventDefault();
    iDecimal.value = GetClipboardData(event);
    ConvertDecimal();
});

iHexadecimal.addEventListener('keyup', ConvertHexadecimal);
iHexadecimal.addEventListener('paste', function(event) {
   event.preventDefault();
   iHexadecimal.value = GetClipboardData(event);
   ConvertHexadecimal();
});