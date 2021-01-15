<?php
    if(isset($_POST['submit'])){
        $name=$_POST['name'];
        $email=$_POST['email'];
        $phone=$_POST['item'];
        $msg=$_POST['msg'];

        $to='doesthislooknormal@gmail.com';
        $subject='New Special Request';
        $message="Name: ".$name"\n"."Item: ".$item."\n" "Special Request: "."\n\n".$msg;
        $headers="From: ".$email;
        
        if(mail($to, $subject, $message, $headers)){
            echo "<h1>Sent Successfully! Thank you!"." ".$name.", We will contact you by the email provided shortly!</h1>";
        }
        else {
            echo "Something Went Wrong!!! Try Again Please";
        }
    }
?>