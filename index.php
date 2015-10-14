<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html ng-app = "baseModule">
    <head>
        <meta charset="UTF-8">
        <title>E-Commerce Online</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="styles/style.css">
    <body>         
        <div ng-include="'partials/navigation.html'" ng-if = "isLoggedIn"
          data-ng-controller="NavController"></div>
        <div ng-view class="view-animate"></div> 

        <script type="text/javascript" src="lib/angular.min.js"></script>
        <script type="text/javascript" src="lib/angular-route.min.js"></script>
        <script src = "app/baseModule.js"></script>
        <script src = "app/NavController.js"></script>
        <script src = "app/catalog/allCatalogController.js"></script>
        <script src = "app/catalog/singlePageController.js"></script>
        <script src = "app/CartController.js"></script>
        <script src = "app/CheckoutController.js"></script>
        <script src = "app/user/LoginController.js"></script>
        <script src = "app/route.js"></script>   
        <script src = "app/catalog/service.js"></script>
        <script src = "app/user/userService.js"></script>

    </body>
</html>
