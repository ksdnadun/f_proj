import { Component, OnInit } from '@angular/core';

//import * as AWSCognito from 'amazon-cognito-identity-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*
  authentication() {

    const authenticationData = {
      ClientId : 'aaa',
      UserPoolId : '111',
      Username : 'username',
      Password : 'password',
    };
    // Later on
    const userPool = new AWSCognito.CognitoUserPool(authenticationData);
    const authDetails = new AWSCognito.AuthenticationDetails({
      Username: 'testusername',
      Password: 'testpassword'
    });
    const cognitoUser = new AWSCognito.CognitoUser({
      Username: 'testusername',
      Pool: userPool
    });
    cognitoUser.authenticateUser(authDetails, {
      onSuccess: (result) => {
        console.log(`access token = ${result.getAccessToken().getJwtToken()}`);
      },
      onFailure: (err) => {
        alert(err);
      }
    });
  }*/



}
