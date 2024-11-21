<?php
echo scf('<script type="text/javascript" src="./javascript/whiteshield.class.js"></script>', 2)
    .scf('<script type="text/javascript" src="./javascript/toolsbox.class.js"></script>', 2)
    .scf('<script type="text/javascript" src="./javascript/functions.js"></script>', 2);

if (isset($filename) && file_exists("./javascript/$filename.js")) {
    switch ($filename) {
        case 'binary':
        case 'hexadecimal':
            echo scf('<script type="text/javascript" src="./javascript/numeric-converter.class.js"></script>', 2);
        break;
    }

    echo scf('<script type="text/javascript" src="./javascript/' . $filename . '.js"></script>', 2);
}