const iCentimeter = document.getElementById("ITextCentimeter");
const iInch = document.getElementById("ITextInch");
const inchValue = 2.54;

function ConvertCentimeterToInch(centimeter) {
    return centimeter * inchValue;
}

function ConvertInchToCentimeter(inch) {
    return inch / inchValue;
}

function ConvertCentimeter() {
    const iValue = iCentimeter.value;

    if (iValue.length === 0 || !WShield.IsNumber(iValue, false))
        iInch.value = '';
    else
        iInch.value = ConvertCentimeterToInch(ToolsBox.ParseFloat(iValue)).toFixed(2);
}

function ConvertInch() {
    const iValue = iInch.value;

    if (iValue.length === 0 || !WShield.IsNumber(iValue, false))
        iCentimeter.value = '';
    else
        iCentimeter.value = ConvertInchToCentimeter(ToolsBox.ParseFloat(iValue)).toFixed(2);
}

iCentimeter.addEventListener('keyup', ConvertCentimeter);
iCentimeter.addEventListener('paste', function(event) {
    event.preventDefault();
    iCentimeter.value = GetClipboardData(event);
    ConvertCentimeter();
});

iInch.addEventListener('keyup', ConvertInch);