function GetClipboardData(event) {
    const clipboardData = event.clipboardData || window.clipboardData;
    return clipboardData.getData('text/plain');
}

function ClearFields() {
    for (const argument of arguments)
        argument.value = '';
}