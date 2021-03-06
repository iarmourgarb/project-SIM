<!--
  COMP 333: Software Engineering
  Sam Ephron, Magda Kisielinska, Isabel Armour-Garb
-->

<!DOCTYPE HTML>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="application/x-www-form-urlencoded"/>
    <title>Homework 2</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <p><?php
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "music-db";

        // Create server connection.
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check server connection.
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $out_value_reg = "";
        $out_value_look_up = "";

        if(isset($_REQUEST["submit"])){
            // Variables for the output and the web form below.
            $s_id = $_REQUEST['username'];

            // Check that the user entered data in the form.
            if(!empty($s_id)){
                // If so, prepare SQL query with the data.
                $sql_query = "SELECT * FROM ratings WHERE username = ('$s_id')";
                // Send the query and obtain the result.
                // mysqli_query performs a query against the database.
                $result = mysqli_query($conn, $sql_query);
                // mysqli_fetch_assoc rturns an associative array that corresponds to the
                // fetched row or NULL if there are no more rows.
                // Probably does not make much of a difference here, but, e.g., if there are
                // multiple rows returned, you can iterate over those with a loop.
                $count = $result-> num_rows;
                if ($count === 0){
                    $out_value_look_up .= "No songs rated by " . $s_id;
                }else {
                    $i = 0;
                    while ($i<$count) {
                        $i++;
                        $row = mysqli_fetch_assoc($result);
                        $out_value_look_up .= $row['song'] . "->" . $row['rating'] . "</br>";
                    }
                }
            }else {
                $out_value_look_up .= "No user given";
            }
        }else if (isset($_REQUEST["registration"])){
            $user = $_REQUEST['account-id'];
            $pw = $_REQUEST['password'];
            if (!empty($user) and !empty($pw)) {
                $sql_query = "INSERT INTO users VALUES ('$user', '$pw')";
                if (mysqli_query($conn, $sql_query)) {
                    $out_value_reg .= "User: " . $user . " registered successfully.";
                }else {
                    $out_value_reg .= "Username is taken, please give another.";
                }
            }else if (!empty($pw)){
                $out_value_reg .= "Username is missing.";
            }else if (!empty($user)){
                $out_value_reg .= "Password is missing.";
            }else {
                $out_value_reg .= "Username and Password missing.";
            }
        }
        // echo $out_value;

    $conn->close();

  ?></p>

  <div class="grid-container">

    <div class= "grid-item">
      <h2> Look-Up Songs Rated by Anyone </h2>
      <form method="POST" action="">
          Username: <input type="text" name="username" placeholder="Enter Username" /><br>
          <input type="submit" name="submit" value="Retrieve Ratings"/><br>
          <?=$out_value_look_up?>
      </form>
    </div>

    <div class="grid-item">
      <h2> Register </h2>
      <form method="POST" action="">
          Username: <input type="text" name="account-id" placeholder="Enter Username" /><br>
          Password: <input type="text" name="password" placeholder="Enter Password" /><br>
          <input type="submit" name="registration" value="Register"/>
          <?=$out_value_reg?>
      </form>

    </div>


  </form>
</body>
</html>
