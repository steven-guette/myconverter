<?php require './includes/config.php'; ?>

<!DOCTYPE html>
<html lang="fr">
    <head>
        <title>My Converter</title>
        <?php include './includes/header.php'; ?>
    </head>
    <body>
        <?php
        include './templates/menutop.tpl.php';

        if (isset($filename) && file_exists("./$filename.php")) {
            echo scf('<div id="BodyLine">', 2, 2);
            include("./$filename.php");
            echo scf('</div>', 2, 2);
        }

        include './templates/footer.tpl.php';
        ?>
    </body>
</html>
