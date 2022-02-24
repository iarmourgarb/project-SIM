<!-- 
  COMP 333: Software Engineering
  Sebastian Zimmeck (szimmeck@wesleyan.edu) 

  PHP sample script for querying a database with SQL. This script can be run 
  from inside the htdocs directory in XAMPP. The script assumes that there is a 
  database set up (e.g., via PHPMyAdmin) named COMP333_SQL_Tutorial with a 
  student_grades table per the sql_tutorial.md.
-->

<!DOCTYPE HTML>
<html lang="en">
<head>
  <!-- This is the default encoding type for the Html Form post submission. 
  Encoding type tells the browser how the form data should be encoded before 
  sending the form data to the server. 
  https://www.logicbig.com/quick-info/http/application_x-www-form-urlencoded.html-->
  <meta http-equiv="Content-Type" content="application/x-www-form-urlencoded"/>
<title>Sample Submission Form</title>
</head>

<body>
  <!-- 
    PHP code for retrieving data from the database.
  -->

  <!-- 
    HTML code for the form by which the user can query data.
    Note that we are using names (to pass values around in PHP) and not ids
    (which are for CSS styling or JavaScript functionality).
    You can leave the action in the form open 
    (https://stackoverflow.com/questions/1131781/is-it-a-good-practice-to-use-an-empty-url-for-a-html-forms-action-attribute-a)
  -->
  <form method="POST" action="">
  Student ID: <input type="text" name="username" placeholder="Enter Student ID" /><br>
  Test: <input type="text" name="test" placeholder="Enter Test" /><br>
  <input type="submit" name="submit" value="Submit"/>


  <p>
  <?php
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

    if(isset($_REQUEST["submit"])){
      // Variables for the output and the web form below.
      $out_value = "";
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
        if ($result-> num_rows === 0){
            echo "No songs rated by " . $s_id;}
        else{
            do {
                $row = mysqli_fetch_assoc($result);
                if ($row != NULL) {
                    $out_value = $row['song'] . "->" . $row['rating'] . "</br>";
                    echo $out_value;
                }
        } while ($row != NULL);}
        
        
      }
      else {
        echo "No user given";
      }
    }

    $conn->close();
  ?> </p>
  </form>
</body>
</html>
