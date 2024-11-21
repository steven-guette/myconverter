class ToolsBox {
    static ParseFloat(value) {
        if (value.indexOf(',') !== -1)
            value = value.replace(/,/g, '.');

        if (value.indexOf('.') !== -1 && parseInt(value.slice(value.indexOf('.') + 1)) === 0) {
            value = value.slice(0, value.indexOf('.'));
        }

        return parseFloat(value);
    }
}