
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");


$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
    $name=htmlspecialchars($_POST['name']);

  if (empty($_POST['email'])) {
    $errors[] = 'Email nie jest poprawny';
  } else {
    $email = $_POST['email'];
    
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Nieprawidłowy e-mail';
    }
  }
  if (empty($_POST['msg'])) {
    $errors[] = 'Wiadmość jest pusta';
  } else {
    $message = htmlspecialchars($_POST['msg']);
  }
  if (empty($errors)) {
    $date = date('j, F Y h:i A');
    
    $emailBody = "
    <html>
    <head>
    <title>$name is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Date: <span style=\"color:#888\">$date</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    </div>
    </body>
    </html>
    ";
    
    $headers = 	'From: kontakt z prudentcode.pl <kontakt@prudentcode.pl>' . "\r\n" .
    "Reply-To: $email" . "\r\n" .
    "MIME-Version: 1.0\r\n" . 
    "Content-Type: text/html; charset=utf-8\r\n";

    $to = 'kontakt@prudentcode.pl';
    $subject = 'Wiadomość z formularza kontaktowego prudentcode.pl ';
    
   
    
    
    if (mail($to, $subject, $emailBody, $headers) && mail($email, $subject, $emailBody, $headers) ) {
      $sent = true;	
    }
  }
}
?>
  <?php if (!empty($errors)) : ?> 

{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
  <?php endif; ?> 
  
  
  
  <?php if (isset($sent) && $sent === true) : ?> 

{
  "status": "success",
  "message": "Wiadomość wysłana - Dziękujemy za zainteresowanie naszą ofertą"
}
  <?php endif; ?>