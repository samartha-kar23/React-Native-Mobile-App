import React, { Component } from 'react';
import {
    KeyboardAvoidingView, StyleSheet, Alert, Image, AsyncStorage, StatusBar,
} from 'react-native';

import { Container, Content, Form, View, Item, Thumbnail, Input, Label, Button, Text, Left, Right, Header } from 'native-base';



class Screen extends Component {
    static navigationOptions = {
        title: 'User Profile',
    }



    constructor(props) {
        super(props);
        this.state = {
            Username: '',
            firstname: '',
            lastname: '',
            email: '',
            contact: '',
            user_id: '',

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
                console.log('profile')
                this.props.navigation.navigate('Login');
            }
        } catch (error) {
            Alert.alert('some error happened');
        }

        // }
    }


    UpdateAttempt() {
        // Alert.alert(this.props.user_id);

        fetch('https://api.vesyl.in/profile-ajax-handler', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                method: 'changegeneralinfo',
                api_token: 'flashsaleapitoken',
                user_id: this.state.user_id,
                username: this.state.Username,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email

            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.code == 100) {
                    if (responseJson.message.firstname) {
                        Alert.alert(responseJson.message.firstname[0]);
                    }
                    else if (responseJson.message.lastname) {
                        Alert.alert(responseJson.message.lastname[0]);
                    }
                    else if (responseJson.message.username) {
                        Alert.alert(responseJson.message.username[0]);
                    }
                    else if (responseJson.message.email) {
                        Alert.alert(responseJson.message.email[0]);
                    }

                }
                else if (responseJson.code == 200) {
                    Alert.alert('update successful!');

                }

            })
            .catch((error) => {
                console.error(error);
            });
    }

    nav() {

        this.props.navigation.navigate('PwdChange');

    }


    render() {
        return (
            <Container>
                <StatusBar
                    backgroundColor='#191970'
                    barStyle="light-content"
                />
                <Content style={{ backgroundColor: '#fff' }}>


                    <Left>
                        <Image
                            source={require('../images/1.png')}
                            style={{ flex: 2, width: 100, height: 100, alignSelf: 'stretch', resizeMode: 'cover', borderRadius: 10, borderWidth: 2 }} /></Left>
                    <Right>
                        <Button transparent
                        // onPress={() => this.props.navigation.navigate('ChangePW')}
                        >
                            <Text>Change Profile Picture</Text>
                        </Button></Right>


                    <Form>
                        <KeyboardAvoidingView behavior='padding'>

                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input
                                    returnKeyType='next'
                                    onChangeText={(Username) => this.setState({ Username })}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>First Name</Label>
                                <Input
                                    returnKeyType='next'
                                    onChangeText={(firstname) => this.setState({ firstname })}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Last Name</Label>
                                <Input
                                    returnKeyType='next'
                                    onChangeText={(lastname) => this.setState({ lastname })}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>E-Mail Address</Label>
                                <Input
                                    returnKeyType='next'
                                    onChangeText={(email) => this.setState({ email })}
                                />
                            </Item>
                            <Item floatingLabel last>
                                <Label>Contact Number</Label>
                                <Input
                                    returnKeyType='go'
                                    onChangeText={(contact) => this.setState({ contact })}
                                />
                            </Item>

                            <Text></Text>
                            <Button block
                                onPress={() => this.nav()}
                            >
                                <Text>Change Password</Text>
                            </Button>
                            <Text></Text>
                            <Button block onPress={() => this.UpdateAttempt()}>
                                <Text>Save</Text>
                            </Button>
                        </KeyboardAvoidingView>
                    </Form>
                </Content>
            </Container>
        );
    }
}


export default Screen;
