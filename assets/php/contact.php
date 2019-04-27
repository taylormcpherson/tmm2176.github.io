
<!----------------------------------------
* @author: Taylor McPherson
* 
* WDD Final Project, contact.php
* I was trying to get my contact form to 
* properly submit. Didn't work. 
* Still kept this for reference.
------------------------------------------>
<?php
 if(isset($_POST['submit'])){
    $to = "contact.taylormcpherson@gmail.com"; // this is your Email address
    $from = $_POST['userEmail']; // this is the sender's Email address
    $name = $_POST['userName'];
    $message = $_POST['message'];
    $subject2 = "Copy of your form submission";
    $message1 = $first_name . " " . $last_name . " wrote the following:" . "\n\n" . $_POST['message'];
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo 'Submitted. Thanks!';
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    }
?>
