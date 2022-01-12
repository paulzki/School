<?php
  require "../Private/autoload.php";
  $user_data = check_login($connection);

  $username = "";
  if(isset($_SESSION['username']))
  {
    $username = $_SESSION['username'];
  }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="icon" href="logo.png" type="image/gif" sizes="64x64">
    <title>Account</title>
</head>
<style>
* {
  font-family: sans-serif;
  font-weight: 500;
}
body {
  margin: 0px;
  color: rgb(255, 255, 255);
  background-color: rgb(30, 30, 47);
  display:flex;
  justify-content:center;
  
}
#main {
    margin-top:25px;
    min-width:90%;
    min-height:600px;
    background-color: rgb(39, 41, 61);
    border-radius:40px;
}
</style>
<body>
    <div id="main">
    <p>123</p>
    </div>
</body>
</html>