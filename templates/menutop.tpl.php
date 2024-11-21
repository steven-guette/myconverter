<?php
$menuList = array(
    array(
        'filename' => 'binary',
        'title' => 'Binaire'
    ),
    array(
        'filename' => 'hexadecimal',
        'title' => 'Hexadécimal'
    ),
    array(
        'filename' => 'inch',
        'title' => 'Pouces'
    )
);

echo scf('<div id="MenuTop">', 0);

foreach ($menuList as $link) {
    $class = '';

    if (isset($filename) && $link['filename'] == $filename)
        $class = ' class="selectedLink"';

    echo scf('<a href="'.ROOTPATH.'/index.php?fn='.$link['filename'].'"' . $class . '>'.$link['title'].'</a>', 3);
}

echo scf('</div>', 2);