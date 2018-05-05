import React, { Component } from 'react';
import { AppRegistry, KeyboardAvoidingView, View, Image, StyleSheet, StatusBar, Platform, Alert } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';

var data =[];

class Screen extends Component {
    static navigationOptions = {
        title: 'Product Details',
    }
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected3: 'key3',
            selected4: 'key3',
            results: {
                items: []
            }
        }
    }
    componentDidMount() {
        const { state } = this.props.navigation;
        var catId = state.params.catId;
        Alert.alert(catId);
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: catId,


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                data = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {

        
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require('../images/1.png')} />
                                <Body>
                                    <Text>NativeBase</Text>
                                    <Text note>April 15, 2016</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Image source={require('../images/1.png')} style={{ height: 200, width: 200, flex: 1 }} />
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                        <CardItem>
                            <Left>
                                <Button transparent textStyle={{ color: '#87838B' }}>
                                    <Icon name="logo-github" />
                                    <Text>1,926 stars</Text>
                                </Button>
                            </Left>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}
export default Screen;