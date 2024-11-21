<?php
if (isset($form_elements) && WShield::IsArray($form_elements)) {
    foreach ($form_elements as $element) {
        $enabled = ($element['enabled']) ? '' : 'readonly ';

        echo scf('<label for="' . $element['id'] . '">Système ' . $element['title'] . '</label>', 3)
            .scf('<input type="text" id="' . $element['id'] . '" ' . $enabled . '/>', 3, 2);
    }
}