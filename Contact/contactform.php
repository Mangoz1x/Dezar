<?php

if(isset($_POST['submit'])) {
    $fname = $_POST['FirstName'];
    $lname = $_POST['LastName'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $dd = $_POST['day'];
    $mm = $_POST['month'];
    $yyyy = $_POST['year'];

    $mailTo = "drops@fotovat.com";
    $headers = "From: ".$email;
    $txt = "You have received an e-mail from ".$email.".\n\n".$message;

    mail($email, $lname, $email, $phone, $dd, $mm, $yyyy);
}

?>