import React, { Component } from 'react';
import {
    AppRegistry,
    Text,
    StatusBar,
    Platform,

    ListView, StyleSheet,
    Image,
} from 'react-native';
import { Icon, Label, Button, Content, Container, Input, Card, CardItem, Item, Thumbnail, View, Header, Body, Title, Left, Right, flex } from 'native-base';

import { DrawerNavigator } from 'react-navigation';

class Screen extends Component {
    static navigationOptions = {
        title: 'Shops',
    }

    render() {
        return (
            <Container>
                <Content style={{backgroundColor:'#fff'}}>


                    <Card >
                        <CardItem>
                            <Left>

                                <Body>
                                    <Text>Village Hypermarkets</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../images/village.png')}
                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                            />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button transparent
                                    onPress={() => this.props.navigation.navigate('CatagoryList')}
                                >
                                    <Text>Proceed</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Good Food</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../images/goodfood.png')}
                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                            />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button transparent>
                                    <Text>Proceed</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Royalmart Supermarket</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../images/royal.png')}
                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button transparent>
                                    <Text>Proceed</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Basic Life</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../images/basiclife.png')}
                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button transparent>
                                    <Text>Proceed</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>foodbazar</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../images/foodbazar.png')}
                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button transparent>
                                    <Text>Proceed</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Godrej Natures's Basket Sadashiv Sagar</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../images/godrej.png')}
                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button transparent>
                                    <Text>Proceed</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Smart</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../images/village.png')}
                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button transparent>
                                    <Text>Proceed</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Shoppers Stop</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../images/shoppers.png')}
                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button transparent>
                                    <Text>Proceed</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>EZtrolley Online Supermarket in Bangalore Grocery Shopping Online</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem cardBody>
                            <Image source={require('../images/ez.png')}
                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Button transparent>
                                    <Text>Proceed</Text>
                                </Button>
                            </Body>

                        </CardItem>
                    </Card>



                </Content>
            </Container>
        );
    }
}

export default Screen;
