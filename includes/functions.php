<?php
function GetGlobalValue($globalKey, $defaultValue=null) {
    if (is_string($globalKey) && !empty(trim($globalKey))) {
        if (array_key_exists($globalKey, $_GET))
            return $_GET[$globalKey];
        else if (array_key_exists($globalKey, $_POST))
            return $_POST[$globalKey];
    }

    return $defaultValue;
}

function scf($content, $tabs, $lineBreaks=1) {
    $t = str_repeat("\t", $tabs);
    $l = str_repeat("\n", $lineBreaks);

    return $t . $content . $l;
}