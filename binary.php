<?php
$form_elements = array(
    array(
        'id' => 'ITextDecimal',
        'title' => 'décimal',
        'enabled' => true
    ),
    array(
        'id' => 'ITextBinary',
        'title' => 'binaire',
        'enabled' => true
    ),
    array(
        'id' => 'ITextHexadecimal',
        'title' => 'hexadécimal',
        'enabled' => false
    )
);

include './templates/form.tpl.php';