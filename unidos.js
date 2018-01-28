<!-- Pixelhacks II 1/27/18
TEAM MEMBERS: Jenny, Brycedia, Litzy
 -->

 import React, { Component } from 'react';
 import { Text, View } from 'react-native';
 import { TheGreatestComponentInTheWorld } from './your-native-code';

 class SomethingFast extends Component {
   render() {
     return (
       <View>
         <TheGreatestComponentInTheWorld />
         <Text>
          Por favor ponga su informacion. Esta applicacion se llama 'Unidos'
         </Text>

         <Text>
         Please put your information. This application is called 'Unidos'
         </Text>
       </View>
     );
   }
 }


 // code from SafeTrek
 //import the unirest module - make sure to install it by running "npm install unirest --save"
var unirest = require('unirest');

var body = {
  name: "John Smith",
  phone: "5555555555",
  pin: "1234",
  location: {
    lat: 34.32334,
    lon: -117.3343,
    accuracy: 5
  }
};

unirest.post('https://sandbox.sendpolice.com/v1/alerts?user_key=')
  .type('json')
  .send(body)
  .end(function (response) {
    console.log(response);
  });
