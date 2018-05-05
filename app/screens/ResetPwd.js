import React, { Component } from 'react';
import {
  Alert
} from 'react-native';
import {NavigationActions} from 'react-navigation';

import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

class Screen extends Component {
  static navigationOptions = {
    title: 'Reset Password',
  }

  constructor(props) {
    super(props);
    this.state = {
      resetcode: '',
      fpwemail: '',
      password: '',
      re_password: '',


    };
  }

  UpdateAttempt() {
    //  Alert.alert(this.props.user_id);

    fetch('https://api.vesyl.in/forgot-password', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        method: 'resetPassword',
        api_token: 'flashsaleapitoken',
        fpwemail: this.state.fpwemail,
        resetcode: this.state.resetcode,
        password: this.state.password,
        re_password: this.state.re_password,


      })
    })
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.code == 400) {
          (responseJson.message); {
            Alert.alert("please give correct input and try again!!");
          }


        }
        else if (responseJson.code == 200) {
          Alert.alert("Password Changed Successfully!");
          //this.props.navigation.navigate('Logiin')
        }

      })
      .catch((error) => {
        console.error(error);
      });
      this.reset();
  }
      
        reset(){
      return this.props
               .navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Login'})
                    ]
                  }));
  
  }
     handleChange(re_password, emailparam, resetcode ){
        this.setState({resetcode: resetcode})
        this.setState({fpwemail: emailparam})
        this.setState({ re_password: re_password })
    }


  render() {
     const { state } = this.props.navigation;
        var emailparam = state.params.fpwemail;
        var resetcode = state.params.resetcode;
        
    return (

      <Container>
        <Content style={{backgroundColor:'#fff'}}>
          <Form>

            <Item floatingLabel>
              <Label>Enter New Password</Label>
              <Input
                returnKeyType='next'
                onChangeText={(password) => this.setState({ password })}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Confirm New Password</Label>
              <Input
                returnKeyType='next'
                onChangeText={(re_password) => this.handleChange(re_password,emailparam, resetcode) }
              />
            </Item>
            <Button block
              onPress={() => this.UpdateAttempt()}
            >
              <Text>Reset Password</Text>
            </Button>
          </Form>


        </Content>
      </Container>
    );
  }
}

export default Screen;
