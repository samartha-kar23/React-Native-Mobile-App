import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Body, Label, Text, Button, InputGroup } from 'native-base';
import { StyleSheet, Alert, AsyncStorage, StatusBar, View, TouchableOpacity } from 'react-native';
import { StackNavigator, NavigationActions, withNavigation } from 'react-navigation';
//import {Stack1} from '../routes' 
import { Drawer } from '../config/routes';


export class Screen extends Component {


    static navigationOptions = {
        title: 'Login',
    }

    constructor(props) {
        super(props);
        this.state = {
            navCode: '0',
            Username: '',
            Password: '',
            user_id: '',
            isLoggedin: false

        };
    }
    async componentDidMount() {
        // Alert.alert('please login!')
        try {
            const value = await AsyncStorage.getItem('username', (errs, result) => {
                if (!errs) {
                    if (result !== null) {
                        this.setState({ isLoggedin: true });
                        this.setState({ Username: result });
                    }
                }
            });


            // if (value !== null) {
            //     // We have data!!
            //   Alert.alert('you are already logged in');

            //   setState({navCode:'2'});
            // }

        }
        catch (error) {
            Alert.alert('some error happened');
            this.props.navigation.navigate('Home');
        }

    }



    LoginAttempt() {
        // const { state } = this.props.navigation;
        //var isLoggedin = state.params.isLoggedin;
        //var navCode = state.params.navCode;
        fetch('https://api.vesyl.in/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                api_token: 'flashsaleapitoken',
                username: this.state.Username,
                password: this.state.Password,
            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.code == 200) {
                    Alert.alert('Hello' + ' ' + responseJson.data.name);
                    this.setState({ user_id: responseJson.data.id });
                    // Alert.alert(this.state.user_id);
                    //  this.props.new_user_id(newId);
                    //if( navCode === '2'){
                    // Alert.alert("inside Login 2")
                    // this.props.navigation.navigate('Profile',{user_id: this.state.user_id, navCode: '1'})
                    //  this.props.navigation.//navigate('Login', { isLoggedin: this.state.isLoggedin, navCode: this.state.navCode })
                    //  navigate('Stack0',{},
                    //  {
                    //type: "Navigate",
                    //    routeName: 'Profile',
                    //   params: { navCode: '1'}
                    //     }
                    //   )        
                    this.nav();

                }

                else if (responseJson.code == 400) {
                    Alert.alert('Invalid login credentials');
                }




            })
            .catch((error) => {
                console.error(error);
            });

        // <Drawer screenProps={user_id = 'hello'} />

    }

    async nav() {

        try {
            await AsyncStorage.setItem('user_id', this.state.user_id);
            await AsyncStorage.setItem('username', this.state.Username);
            // if (value !== null) {
            // We have data!!
            //    Alert.alert(value);
        }
        catch (error) {
            Alert.alert('some error happened now');
        }


        this.props.navigation.navigate('Home')


    }

    ForgotAttempt() {
        // Alert.alert("forgot clicked")
        this.props.navigation.navigate('ForgotPwd');

    }
    SignupAttempt() {
        // Alert.alert("signup Clicked")
        this.props.navigation.navigate('Signup');
    }
    // CheckLogin() {
    //    const { state } = this.props.navigation;
    //  var navCode = state.params.navCode;


    //if (navCode === '2') {
    //  this.LoginAttempt(navCode);
    //}
    //else {
    //  this.LoginAttempt();
    //}

    /*  if("undefined"=== typeof this.props.navigation.params.navCode){
          Alert.alert('undefined nacCode')
          this.LoginAttempt();
      }
      else{
          const { state } = this.props.navigation;
      //var isLoggedin = state.params.isLoggedin;
      var navCode = state.params.navCode;
      Alert.alert(state.params.navCode)
      this.LoginAttempt(navCode);
  }
  */

    //}

    render() {

        if (this.state.isLoggedin) {
            var username = this.state.Username;
            return (
                <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor:'#fff' }}>
                    <StatusBar
                        backgroundColor='#191970'
                        barStyle="light-content"
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Logout')}>
                        <Text>Not {username} ? <Text style={{ color: 'blue' }}>Logout.</Text></Text>
                    </TouchableOpacity>
                </View>
            );
        }
        else
            return (

                <Container>
                    <StatusBar
                        backgroundColor='#191970'
                        barStyle="light-content"
                    />

                    <Content style={{backgroundColor:'#fff'}}>
                        <Form>

                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input
                                    returnKeyType='next'
                                    onChangeText={(Username) => this.setState({ Username })}
                                />
                            </Item>

                            <Item floatingLabel last>
                                <Label>Password</Label>
                                <Input secureTextEntry
                                    returnKeyType='go'
                                    onChangeText={(Password) => this.setState({ Password })}
                                />
                            </Item>
                        </Form>

                        <Text></Text>

                        <Text></Text>

                        <Button block onPress={() => this.LoginAttempt()} >


                            <Text>Login</Text>

                        </Button>


                        <Button block onPress={() => this.SignupAttempt()} style={{ marginTop: 20 }} >
                            <Text> Signup </Text>
                        </Button>

                        <Button block transparent onPress={() => this.ForgotAttempt()} style={{ marginTop: 20 }} >
                            <Text> forgot password? </Text>
                        </Button>

                    </Content>

                </Container>


            );
    }
}

export default Screen;

