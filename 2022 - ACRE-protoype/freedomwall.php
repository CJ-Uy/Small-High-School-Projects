<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT); // report errors

    // data to connect to local host
    $servername = 'localhost';
    $username = 'admin';
    $dbname = 'sffreedomwall';
    $password = "tUJ1D<~|I?0GRh4@";

    // connect to local host
    $conn = new mysqli($servername, $username, $password, $dbname);

    // check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // select data from the table
    $selectData = "SELECT id, codeName, cnMessage FROM freedomwall ORDER BY id DESC";

    // query for selected data
    $result = $conn->query($selectData);

    // show data
    if($result->num_rows > 0){

        while($row = $result->fetch_assoc()) {
            echo "<div>" . "<h3>" . $row["id"] . "</h3>" . "<p>" . $row["cnMessage"] . "</p>". "<br>" . "<h3>" . "<h3 style='display: inline;'>- </h3>" . $row["codeName"] . "</h3>" . "<h3 style='display: inline;'> -</h3>" . "</div>";
        }

    }
    else {
        echo "0 results";
    }

    // close database connection
    $conn->close();
    ?>
</body>
</html>