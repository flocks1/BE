# BE

// Login Endpoint
Url: https://build-week.herokuapp.com/login,
Data: {username: Username, password: Password},
Takes in an object with a username and a password. It will return an object with a message and a token.

// Register Endpoint
Url: https://build-week.herokuapp.com/register,
Data: {username: Username, password: Password},
Takes in an object and with a username and a password. It will save the user to the database.

//Login to Google
Url: https://build-week.herokuapp.com/login/google
It will redirect you to a google login page.

//Google redirect 
Url: https://build-week.herokuapp.com/login/google/redirect
It will your google data as a new user in the database and it will return the a object with a message and the token.

//Trend endpoint
Url: https://build-week.herokuapp.com/trends
It will get all the trends from the twitter api and it will return an array of objects with all the trends
