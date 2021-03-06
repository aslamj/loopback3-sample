# Loopback3-sample

The project is generated by [LoopBack](http://loopback.io).

Clone the application:
````
git clone https://github.com/aslamj/loopback3-sample.git
cd loopback3-sample
````

Build the application:
````
npm i
````

Start the application:
````
node .
Web server listening at: http://localhost:3000
Browse your REST API at http://localhost:3000/explorer
````

## Sample user signup/login/logout using REST api

***User SignUp:***
````
curl -X POST \
  http://localhost:3000/api/users \
  -H 'Content-Type: application/json' \
  -d '{
	"email": "jaslam.test@gmail.com",
	"password": "Password123",
	"firstName": "Aslam",
	"lastName": "Test"
}'

Response 200, body:
{
    "email": "jaslam.test@gmail.com",
    "id": 1,
    "firstName": "Aslam",
    "lastName": "Test"
}
````

***User Login:***
````
curl -X POST \
  http://localhost:3000/api/users/login \
  -H 'Content-Type: application/json' \
  -d '{
	"email": "jaslam.test@gmail.com",
	"password": "Password123"
}'

Response 200,  body:
{
    "id": "xvcMPsG4vCCNGLIT5gkmti7IIDu7UrDrHhx0gyX46ChcrtCq4oZf6l4XuZvLC2jq",
    "ttl": 1209600,
    "created": "2018-10-08T03:46:41.618Z",
    "userId": 1
}
````

***User Details:***

````
curl -X GET \
  http://localhost:3000/api/users/1 \
  -H 'Authorization: xvcMPsG4vCCNGLIT5gkmti7IIDu7UrDrHhx0gyX46ChcrtCq4oZf6l4XuZvLC2jq' \
  -H 'Content-Type: application/json' 

Response 200, body
{
    "email": "jaslam.test@gmail.com",
    "id": 1,
    "firstName": "Aslam",
    "lastName": "Test"
}
````

***User Logout:***

````
curl -X POST \
  http://localhost:3000/api/users/logout \
  -H 'Authorization: xvcMPsG4vCCNGLIT5gkmti7IIDu7UrDrHhx0gyX46ChcrtCq4oZf6l4XuZvLC2jq' \
  -H 'Content-Type: application/json'

Response: 204
````

## Interview Task

**Add a Single Page Application (SPA) using ReactJS or AngularJS for above api-server (https://github.com/aslamj/loopback3-sample), which does following:**

1. Create the SPA's layout with Header, Main and Footer views (a sample react application is already present in client folder, but you are very welcome to create your own React or Anguilar sample application).
2. The Header and Footer must be sticky (i.e. header must stick on top of the page, footer must stick on the bottom of the page).
3. The SPA start at base route, like : localhost:4000/, with header showing Login and SignUp menu options (right alined) available to begin with.
4. Upon clicking SignUp, a modal shows up with a input-form asking user to input, first-name, last-name, email & password fields, with a sign-up button. After client side input validation, the form submits using REST api: POST: localhost:3000/users as described above in server REST section. 
5. After successful sign-up, UI (url: localhost:4000/home) implicitly call login REST API to log in the user. At this time the header Login and SignUp menu-items are removed and a new option of Logout is shown. Also the app's main content displays user details in format: Good Morning/Afternoon/Evening {{first-name}} {{last-name}}!! Here Morning/Afternoon/Evening is shown based on user's browser time and first-name last-name is obtained by calling another REST api: GET localhost:3000/api/users/<user-id>.
6. When Logout is click on the header, UI calls the REST API: POST: localhost:3000/apis/users/logout to perform logout. After successful logout the header starts displaying Login and SignUp menu-items again.
7. A pre-existing User clicks Login menu-item which dsiplays a form with email and password in modal to gain access to application using REST API call: localhost:3000/users/login.

Note: Overall stying of app is not needed here, but use of bootstrap or any other UI library (like material-ui) is welcomed. Here is an image showing the UI wireframe and flow: https://github.com/aslamj/loopback3-sample/blob/master/ui-flow.jpg.

***First ask, to be fulfilled in 24 hours time is to estimate how much time (1-5 days) is needed and when would you begin implementing the needed code? We believe in no pressure in coding while interviewing in-person, and  want to know how you estimate a story (ask/requirement) and code/test @ production level). Once you confirm these times with us, git clone the skeleton code, do the implemntation and submit the code using email. We'll review the pull-request and if code looks production level, we will then conduct a screen-share session, where we ask questions about your submitted code. If all goes well, we will respond accordingly to next steps.***
