<?php

if (isset($_POST["submit"])) {
    $target_dir = "uploads/"; // Dossier où sauvegarder les images
    $target_file = $target_dir . basename($_FILES["photo"]["name"]);
    $uploadOk = 1;
    $imageFileType = strtolower(pathinfo($target_file, PATHINFO_EXTENSION));
    
    // Vérifier si c'est une vraie image
    $check = getimagesize($_FILES["photo"]["tmp_name"]);
    if ($check !== false) {
        $uploadOk = 1;
    } else {
        echo "Le fichier n'est pas une image.";
        $uploadOk = 0;
    }
    
    // Vérifier si le fichier existe déjà
    if (file_exists($target_file)) {
        echo "Désolé, ce fichier existe déjà.";
        $uploadOk = 0;
    }
    
    // Limiter la taille du fichier (ici 5MB)
    if ($_FILES["photo"]["size"] > 5000000) {
        echo "Désolé, votre fichier est trop volumineux.";
        $uploadOk = 0;
    }
    
    // Autoriser certains formats
    if ($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
    && $imageFileType != "gif") {
        echo "Désolé, seuls les fichiers JPG, JPEG, PNG & GIF sont autorisés.";
        $uploadOk = 0;
    }
    
    // Vérifier si $uploadOk est à 0 à cause d'une erreur
    if ($uploadOk == 0) {
        echo "Désolé, votre fichier n'a pas été uploadé.";
    } else {
        if (move_uploaded_file($_FILES["photo"]["tmp_name"], $target_file)) {
            echo "Le fichier ". htmlspecialchars(basename($_FILES["photo"]["name"])). " a été uploadé.";
        } else {
            echo "Désolé, une erreur s'est produite lors de l'upload.";
        }
    }
}

?>
