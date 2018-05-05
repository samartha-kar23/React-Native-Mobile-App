import React, { Component } from 'react';
import { Alert } from 'react-native';
import {NavigationActions} from 'react-navigation';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

class Screen extends Component {
  static navigationOptions = {
    title: 'Forgot Password',
  }

  constructor(props) {
    super(props);
    this.state = {
      fpwemail: '',
    };
  }

  UpdateAttempt() {
    fetch('https://api.vesyl.in/forgot-password', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        method: 'EnterEmailId',
        api_token: 'flashsaleapitoken',
        fpwemail: this.state.fpwemail,
      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.code == 401) {

          Alert.alert("Enter EmailID");
        }
        else if (responseJson.code == 400) {
          Alert.alert("Enter correct emailId");
        }


        else if (responseJson.code == 200) {
          Alert.alert("Mail Sent with Reset code");
          this.props.navigation.navigate('VerifyRC',{fpwemail: this.state.fpwemail})

      }

      })
      .catch((error) => {
        console.error(error);
      });
    //  this.reset();
 }
   //  reset(){
  //  const setParamsAction = NavigationActions.setParams({
 // params: { fpwemail: this.state.fpwemail },
 // key: 'VerifyRC',
//})
//this.props.navigation.dispatch(setParamsAction)
//this.props.navigation.navigate('VerifyRC');
//   
// }


  render() {
    return (
      <Container>
        <Content style={{backgroundColor:'#fff'}}>
          <Form>
            <Item floatingLabel>
              <Label>Enter Email</Label>
              <Input
                returnKeyType='go'
                onChangeText={(fpwemail) => this.setState({ fpwemail })}
              />
            </Item>
            <Button block onPress={() => this.UpdateAttempt()}>
              <Text>Get Code</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}



//
//
//
//


export default Screen;
