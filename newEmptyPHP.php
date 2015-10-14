<?php
 $servername = "localhost";
              $username = "agilisla_salman";
              $password = "Defod3ll!";
              $dbname = "agilisla_liarapptesters";
         
                 // Create connection
              $conn = mysqli_connect($servername, $username, $password, $dbname);       
                 // Check connection
              if ($conn->connect_error) {
                     echo "Sorry!!! Could not complete the request. Please try later";
              }