import React, { Component } from 'react';
import {
    Alert
} from 'react-native';

import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

class Screen extends Component {
    static navigationOptions = {
        title: 'Verify Code',

    }

    constructor(props) {
        super(props);
        this.state = {
            resetcode: '',
            fpwemail: '',




        };
    }
   // setEmail() {
       // const { state } = this.props.navigation;
       // var emailparam = state.params.fpwemail;
        //Alert.alert(emailparam);
     //   this.setState({ fpwemail: emailparam })

        //this.UpdateAttempt();
   // }
    UpdateAttempt() {

       // const { state } = this.props.navigation;
        //var emailparam = state.params.fpwemail;
        //this.setState({ fpwemail: emailparam })
        //Alert.alert(this.state.fpwemail)
        fetch('https://api.vesyl.in/forgot-password', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                method: 'verifyResetCode',
                api_token: 'flashsaleapitoken',
                fpwemail: this.state.fpwemail,
                resetcode: this.state.resetcode,



            })
        })
            
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.code == 400) {
                    (responseJson.message); {
                        Alert.alert("please give correct input and try again!!");
                        //Alert.alert(this.emailparam);
                    }


                }
                else if (responseJson.code == 200) {
                    Alert.alert("Reset Code Verified Successfully.");
                    this.props.navigation.navigate('ResetPwd',{fpwemail: this.state.fpwemail,resetcode:this.state.resetcode})
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }
    handleChange(resetcode, emailparam){
        this.setState({resetcode: resetcode})
        this.setState({fpwemail: emailparam})
    }



    render() {
          const { state } = this.props.navigation;
        var emailparam = state.params.fpwemail;
        
       
        return (
            <Container>
                <Content style={{backgroundColor:'#fff'}}>
                    <Form>

                        <Item floatingLabel last>
                            <Label>Reset Code</Label>
                            <Input
                                returnKeyType='next'
                                onChangeText={(resetcode) => this.handleChange(resetcode,emailparam)}
                            />
                        </Item>



                        <Button block
                            onPress={() => this.UpdateAttempt()}
                        >
                            <Text>Proceed</Text>
                        </Button>


                    </Form>


                </Content>
            </Container>

        );
    }
}

export default Screen;

