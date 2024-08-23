# README #

## Repository description
The objective of the repo is to provide for the hiring team resolution of the task implemented with Cypress+JS+mochareport which covers GUI and API testing part of the application. 

* Please note that I was not able to finalize verification of the user, because some paper work had to be done.

## Test cases covered in this task

* API

1) User tries to log in with invalid Email, we are verifying response code 401 to be received
2) Valid login  with response code 200
3) Interesting case, we are sending invalid Method(POST) to the endPoint which should work only with (PUT) method

* GUI

1) User tries to log in to the app not providing any credentials, verify Error messages shown in both Email and Password fields
2) User tries to log in and provide Email in the wrong format, verifying the error message is shown in the Email field
3) User logs in with valid credentials, we are verifying that Welcome message is present ont he User Dashboard page
4) We are verifying all the links (a tags) to have (href) property and listing all of them in the Log. We are not failing the test on 404 response for the link. 

## Approach in API testing
In order to implement API tests we might use different approaches on how to get information about API requests. 
1) DevTools from Chrome.
2) Postman Proxy. I was using it, because it was easier to implement requests having all the information prepared
In any case you can use any proxy to intercept requests from the Web Client, to find api requests

