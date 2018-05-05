import React, { Component } from 'react';
import { AppRegistry, KeyboardAvoidingView, View, Image, StyleSheet, StatusBar } from 'react-native';
import { Container, Content, Form,Card,CardItem, Item, Icon, Input, 
    Label, Button, ListItem, Text, Picker, Header, Body, Title, Left, Right } from 'native-base';

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
    onValueChange(value: string) {
        this.setState({
            selected3: value
        });
    }
    onValueChange(value: string) {
        this.setState({
            selected4: value
        });
    }
    render() {
        return (
            <Container>
                <Content>
                   
                        <Card>
                            <CardItem>
                                <Text></Text>
                                </CardItem>
                            <CardItem>
                                <Image
                            style={{  width: 350 ,height:200 ,resizeMode:'center',}}
                            source={{ uri: 'https://facebook.github.io/react/img/logo_og.png' }}
                            />
                            </CardItem>
                            <CardItem>
                                <Text></Text>
                                </CardItem>
                        </Card>
                        
                            <Text style={{fontSize: 30,}}> Product Name </Text>
                            
                    <Header>
                        <Left>
                            <Picker
                                supportedOrientations={['portrait', 'landscape']}
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected3}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Item label="1" value="key0" />
                                <Item label="2" value="key1" />
                                <Item label="3" value="key2" />
                                <Item label="Varient" value="key3" />
                            </Picker>
                        </Left>
                        <Button Block>
                            <Text>Add to Cart</Text>
                        </Button>
                        <Right>
                            <Picker
                                supportedOrientations={['portrait', 'landscape']}
                                iosHeader="Select one"
                                mode="dropdown"
                                selectedValue={this.state.selected4}
                                onValueChange={this.onValueChange.bind(this)}>
                                <Item label="1" value="key0" />
                                <Item label="2" value="key1" />
                                <Item label="3" value="key2" />
                                <Item label="Quantity" value="key3" />
                            </Picker>
                        </Right>
                    </Header>
                    <Text></Text>
                    <Body>
                        <Title>Description</Title>
                    </Body>
                    <Text></Text>
                </Content>
            </Container>
        );
    }
}
export default Screen;