import React, { Component } from 'react';
import {
    AppRegistry, KeyboardAvoidingView, Alert, AsyncStorage, StyleSheet, Image,
} from 'react-native';

import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';


class Screen extends Component {
     static navigationOptions = {
        title: 'Change Password',
    }
    constructor(props) {
        super(props);
        this.state = {
            user_id: '',
            oldPassword: '',
            newPassword: '',
            reNewPassword: '',



        };
        this.checkId();
    }

    async checkId() {
        // async handleUserID() {
        try {
            const value = await AsyncStorage.getItem('user_id');
            if (value !== null) {
                // We have data!!
                // Alert.alert('asyncstorage has me ' + value);
                this.setState({ user_id: value })
            }
            else {
                Alert.alert('please login!')
                // this.props.navigation.navigate('Login');
            }
        } catch (error) {
            Alert.alert('some error happened');
        }

        // }
    }


    UpdateAttempt() {
        //  Alert.alert(this.props.user_id);

        fetch('https:api.vesyl.in/profile-ajax-handler', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                method: 'changepassword',
                api_token: 'flashsaleapitoken',
                user_id: this.state.user_id,
                oldPassword: this.state.oldPassword,
                newPassword: this.state.newPassword,
                reNewPassword: this.state.reNewPassword,





            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.code == 100) {
                    if (responseJson.message.oldPassword) {
                        Alert.alert(responseJson.message.oldPassword[0]);
                    }
                    else if (responseJson.message.newPassword) {
                        Alert.alert(responseJson.message.newPassword[0]);
                    }
                    else if (responseJson.message.reNewPassword) {
                        Alert.alert(responseJson.message.reNewPassword[0]);
                    }

                }

                else if (responseJson.code == 400) {
                    Alert.alert('invalid old Password');
                }
                else if (responseJson.code == 200) {

                    Alert.alert('update successful!');
                    this.props.navigation.navigate('Profile');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }




    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'#fff'}}>
                    <Form>
                        <KeyboardAvoidingView behavior='padding'>

                            <Item floatingLabel>
                                <Label>Old Password</Label>
                                <Input
                                    returnKeyType='next'
                                    onChangeText={(oldPassword) => this.setState({ oldPassword })}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>New Password</Label>
                                <Input
                                    secureTextEntry
                                    returnKeyType='next'
                                    onChangeText={(newPassword) => this.setState({ newPassword })}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Retype Password</Label>
                                <Input
                                    secureTextEntry
                                    returnKeyType='next'
                                    onChangeText={(reNewPassword) => this.setState({ reNewPassword })}
                                />
                            </Item>




                            <Button block onPress={() => this.UpdateAttempt()}>
                                <Text>Save Password </Text>
                            </Button>
                        </KeyboardAvoidingView>

                    </Form>


                </Content>
            </Container>
        );
    }
}

export default Screen;
