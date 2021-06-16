<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require __DIR__.'/Exception.php';
require __DIR__.'/PHPMailer.php';
require __DIR__.'/SMTP.php';
function ValidateEmail($email)
{
   $pattern = '/^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i';
   return preg_match($pattern, $email);
}
function ReplaceVariables($code)
{
   foreach ($_POST as $key => $value)
   {
      if (is_array($value))
      {
         $value = implode(",", $value);
      }
      $name = "$" . $key;
      $code = str_replace($name, $value, $code);
   }
   $code = str_replace('$ipaddress', $_SERVER['REMOTE_ADDR'], $code);
   return $code;
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['formid']) && $_POST['formid'] == 'digitallockerlayoutgrid1')
{
   $mailto = 'kaustavroy338@gmail.com';
   $mailfrom = isset($_POST['email']) ? $_POST['email'] : $mailto;
   $subject = 'Website form';
   $message = '<font style="color:#ED7D31;font-family:Arial Greek;font-size:16px"><strong>Testing Data</strong></font>';
   $success_url = './index.html';
   $error_url = './page2.php';
   $autoresponder_from = 'contact.krmw@gmail.com';
   $autoresponder_name = 'Kaustav Roy Media Works';
   $autoresponder_to = isset($_POST['email']) ? $_POST['email'] : $mailfrom;
   $autoresponder_subject = 'Thank You';
   $autoresponder_message = '<font style="color:#000000;font-family:Copperplate Gothic Bold;font-size:35px">This Is A Test From KRMW</font>';
   $eol = "\n";
   $error = '';
   $mail = new PHPMailer(true);
   try
   {
      $subject = ReplaceVariables($subject);
      $mail->Subject = stripslashes($subject);
      $mail->From = $mailfrom;
      $mail->FromName = $mailfrom;
      $mailto_array = explode(",", $mailto);
      for ($i = 0; $i < count($mailto_array); $i++)
      {
         if(trim($mailto_array[$i]) != "")
         {
            $mail->AddAddress($mailto_array[$i], "");
         }
      }
      if (!ValidateEmail($mailfrom))
      {
         $error .= "The specified email address (" . $mailfrom . ") is invalid!\n<br>";
         throw new Exception($error);
      }
      $mail->AddReplyTo($mailfrom);
      $mail->CharSet = 'ISO-8859-1';
      if (!empty($_FILES))
      {
         foreach ($_FILES as $key => $value)
         {
            if ($_FILES[$key]['error'] == 0)
            {
               if (is_array($_FILES[$key]['name']))
               {
                  $count = count($_FILES[$key]['name']);
                  for ($file = 0; $file < $count; $file++)
                  {
                     $mail->AddAttachment($_FILES[$key]['tmp_name'][$file], $_FILES[$key]['name'][$file]);
                  }
               }
               else
               {
                  $mail->AddAttachment($_FILES[$key]['tmp_name'], $_FILES[$key]['name']);
               }
            }
         }
      }
      $message = ReplaceVariables($message);
      $message = stripslashes($message);
      $mail->MsgHTML($message);
      $mail->IsHTML(true);
      $mail->Send();
      if (!ValidateEmail($autoresponder_from))
      {
         $error .= "The specified autoresponder email address (" . $autoresponder_from . ") is invalid!\n<br>";
         throw new Exception($error);
      }
      $mail->ClearAddresses();
      $mail->ClearAttachments();
      $autoresponder_subject = ReplaceVariables($autoresponder_subject);
      $mail->Subject = stripslashes($autoresponder_subject);
      $mail->From = $autoresponder_from;
      $mail->FromName = $autoresponder_name;
      $mail->AddAddress($autoresponder_to, "");
      $mail->AddReplyTo($autoresponder_from);
      $autoresponder_message = ReplaceVariables($autoresponder_message);
      $autoresponder_message = stripslashes($autoresponder_message);
      $mail->MsgHTML($autoresponder_message);
      $mail->IsHTML(true);
      $mail->Send();
      header('Location: '.$success_url);
   }
   catch (Exception $e)
   {
      $errorcode = file_get_contents($error_url);
      $replace = "##error##";
      $errorcode = str_replace($replace, $e->getMessage(), $errorcode);
      echo $errorcode;
   }
   exit;
}
?>
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>DigitalLocker_KRMW</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css?family=Courgette" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Reggae+One" rel="stylesheet">
<link href="Kaustav_Roy_Media_Works.css?v=16" rel="stylesheet">
<link href="page2.css?v=16" rel="stylesheet">
<script src="jquery-1.12.4.min.js"></script>
<script src="page2.js?v=16"></script>
</head>
<body>
   <div id="wb_digitallockerLayoutGrid1">
      <form name="digitallockerLayoutGrid1" method="post" action="<?php echo basename(__FILE__); ?>" enctype="multipart/form-data" id="digitallockerLayoutGrid1">
         <input type="hidden" name="formid" value="digitallockerlayoutgrid1">
         <div class="row">
            <div class="col-1">
               <input type="text" id="page2Editbox1" name="email" value="" spellcheck="false">
            </div>
            <div class="col-2">
               <input type="file" accept=".jpg,.png" name="page2FileUpload1" id="page2FileUpload1">
               <input type="submit" id="page2Button1" name="" value="Submit">
            </div>
         </div>
      </form>
   </div>
   <div id="preloader"></div>
</body>
</html>