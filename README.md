WHAT THIS INCLUDES:
  1. A already created AuthContainer for managing login/signup
  2. A loginComponent that renders a username and password text field as well as a submit button. The login componenet recieves a onClick function from the authContainer. This is called onLogin() and is used to pass the state that's stored in the loginComponent up to the authContainer for submission to a auth endpoint.
  3. A signupComponent that renders 3 input fields and a signup button.  1. a text field for the email, 2. a text field for the password,  3. A text field for the confirm password input. This component also recieves a function from authContainer called onSignup() which should be called with the data the user has inputted into the signup component. 


TECHNOLOGIES USED HERE
  "babel-core": "^6.24.1",
  "babel-eslint": "^7.2.1",
  "babel-loader": "^6.4.1",
  "babel-plugin-syntax-decorators": "^6.13.0",
  "babel-plugin-transform-object-rest-spread": "^6.23.0",
  "babel-polyfill": "^6.23.0",
  "babel-preset-es2015": "^6.24.1",
  "babel-preset-es2016": "^6.24.1",
  "babel-preset-react": "^6.24.1",
  "babel-preset-react-hmre": "^1.1.1",
  "redux": "^3.6.0",
  "redux-devtools-extension": "^2.13.0",
  "redux-thunk": "^2.2.0",
  "webpack": "^2.3.3",
  "webpack-bundle-analyzer": "^2.3.1",
  "webpack-dev-middleware": "^1.10.1",
  "webpack-hot-middleware": "^2.18.0"
