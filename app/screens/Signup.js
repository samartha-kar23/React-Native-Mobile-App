import React, { Component, StyleSheet, Image } from 'react';
import {
  AppRegistry, Alert, Keyboard,
} from 'react-native';
import { NavigationActions } from 'react-navigation';

import { Container, Content, Form, Item, Input, Label, Button, Text, StyleProvider, InputGroup } from 'native-base';

export default class Screen extends Component {

  static navigationOptions = {
    title: 'Signup',

  }

  constructor(props) {
    super(props);
    this.state = {
      Username: '',
      first_name: '',
      last_name: '',
      email: '',
      inputBorder: '',
      text: ''
    };
  }

  SignupAttempt() {
    fetch('https://api.vesyl.in/signup', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_token: 'flashsaleapitoken',
        username: this.state.Username,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {

        if (responseJson.message && responseJson.code === 100) {
          if (responseJson.message.username) {
            Alert.alert(responseJson.message.username[0]);
          }
          else if (responseJson.message.first_name) {
            Alert.alert(responseJson.message.first_name[0]);
          }
          else if (responseJson.message.last_name) {
            Alert.alert(responseJson.message.last_name[0]);
          }
          else if (responseJson.message.email) {
            Alert.alert(responseJson.message.email[0]);
          }

        }
        if (responseJson.message && responseJson.code === 200) {
          Alert.alert('password sent to your email!');
          //this.props.navigation.navigate('Login')

        }
      })
      .catch((error) => {
        console.error(error);
      });

    this.reset();

  }

  reset() {
    return this.props
      .navigation
      .dispatch(NavigationActions.reset(
        {
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Login' })
          ]
        }));
  }
  render() {
    return (
      <Container>
        <Content style={{backgroundColor:'#fff'}}>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType='next'
                onChangeText={(Username) => this.setState({ Username })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>First Name</Label>

              <Input
                onSubmitEditing={Keyboard.dismiss}
                ref='first_name'
                returnKeyType='next'
                onChangeText={(first_name) => this.setState({ first_name })}

              />

            </Item>
            <Item floatingLabel last>
              <Label>Last Name</Label>
              <Input
                onSubmitEditing={Keyboard.dismiss}
                ref='last_name'
                returnKeyType='next'
                onChangeText={(last_name) => this.setState({ last_name })}


              />

            </Item>
            <Item floatingLabel last>
              <Label>E-Mail Address</Label>

              <Input
                onSubmitEditing={Keyboard.dismiss}
                ref='email'
                returnKeyType='go'
                onChangeText={(email) => this.setState({ email })}
              />



            </Item>
          </Form>

          <Button block onPress={() => this.SignupAttempt()} style={{ marginTop: 20 }} >
            <Text> Signup </Text>
          </Button>



        </Content>
      </Container>



    );
  }
}

