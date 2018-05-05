import React, { Component } from 'react';
import {
    Text, StatusBar, Platform, ListView,
    Alert, StyleSheet, Image, TouchableOpacity, Dimensions,
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import {
    Icon, Label, List, ListItem, Button, DeckSwiper, Content, Container, Input,
    Card, CardItem, Item, Thumbnail, View, Header, Body, Title, Left, Right, flex, Spinner
} from 'native-base';

var {height, width} = Dimensions.get('window');

const API = 'https://api.vesyl.in/vesyl-home-suggestions';

var data = [];
var subs = [];



class Screen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: false,
            searchInput: '',
            Prods: [],
            // query: '',
            currentArea: 'koramangala',
            currentCity: 'bangalore',
            isLoading: false,
        }
    }
    componentWillMount(){
        clearInterval(this.timerID);
    }

    handleChange(text) {
        this.setState({isLoading: false})
        fetch(`${API}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                q: text,
                currentArea: this.state.currentArea,
                currentCity: this.state.currentCity,


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {
             
                data = responseJson.data;
                console.log(data.category_name);

            })
            .catch((error) => {
                console.error(error);
            });
             this.timerID = setTimeout(
            () => this.setState({ isLoading: true }),
            1000
        );
    }






    static navigationOptions = {
        title: 'Home',
    }
    // handleAlert = () => {
    //     this.alertWithType('info', 'hey!', 'alering people is useful');
    // }
    render() {
      
        if (this.state.search){
            if(this.state.isLoading === true){
            return (

                <Container>

                    <StatusBar
                        backgroundColor="#008B8B"
                        barStyle="light-content"
                    />
                    <Content style={{backgroundColor:'#fff'}}>
                        {Platform.OS == 'android' ?
                            <Header searchBar style={{ backgroundColor: 'white' }} >
                                <Item>
                                    <Button transparent
                                        onPress={() => this.setState({ search: false })}>
                                        <Icon name="arrow-back" style={{ color: '#008B8B' }} />
                                    </Button>
                                    <Input
                                        onChangeText={(text) => this.handleChange(text)}
                                        placeholder="Search" />
                                    <Icon name="ios-search" style={{ color: '#008B8B' }} />

                                </Item>
                            </Header>
                            : <Header searchBar rounded>
                                <Button transparent
                                    onPress={() => this.setState({ search: false })}
                                >
                                    <Icon name="arrow-back" style={{ color: '#008B8B' }} />

                                </Button>
                                <Item>

                                    <Icon name="ios-search" style={{ color: '#008B8B' }} />
                                    <Input placeholder="Search" onChangeText={(text) => this.handleChange(text)} />

                                </Item>
                                <Button transparent>
                                    <Text>Search</Text>
                                </Button>
                            </Header>

                        }

                        <List dataArray={data}
                            renderRow={(data) =>
                                <TouchableOpacity onPress={() =>{} }>
                                    <Card transparent>
                                        <CardItem>
                                            <Body>
                                                <Text>{data.category_name}</Text>
                                            </Body>
                                            <Right><Icon name='ios-arrow-forward' onPress={() => {}}></Icon></Right>
                                        </CardItem>
                                      
                                    </Card>
                                </TouchableOpacity>}>

                        </List>
                    </Content>
                </Container>

            );}
            else{
                 return (

                <Container>

                    <StatusBar
                        backgroundColor="#008B8B"
                        barStyle="light-content"
                    />
                    <Content style={{backgroundColor:'#fff'}}>
                        {Platform.OS == 'android' ?
                            <Header searchBar style={{ backgroundColor: 'white' }} >
                                <Item>
                                    <Button transparent
                                        onPress={() => this.setState({ search: false })}>
                                        <Icon name="arrow-back" style={{ color: '#008B8B' }} />
                                    </Button>
                                    <Input
                                        onChangeText={(text) => this.handleChange(text)}
                                        placeholder="Search" />
                                    <Icon name="ios-search" style={{ color: '#008B8B' }} />

                                </Item>
                            </Header>
                            : <Header searchBar rounded>
                                <Button transparent
                                    onPress={() => this.setState({ search: false })}
                                >
                                    <Icon name="arrow-back" style={{ color: '#008B8B' }} />

                                </Button>
                                <Item>

                                    <Icon name="ios-search" style={{ color: '#008B8B' }} />
                                    <Input placeholder="Search" onChangeText={(text) => this.handleChange(text)} />

                                </Item>
                                <Button transparent>
                                    <Text>Search</Text>
                                </Button>
                            </Header>

                        }
                        <Spinner/>
                        </Content></Container>);
            }
        }
        else return (
            <Container>
                 <StatusBar
                        backgroundColor="#008B8B"
                        barStyle="light-content"
                    />
                <Header style={{ backgroundColor: 'white' }}>
                    <Left>
                        <Button transparent
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            {Platform.OS == 'ios' ?
                                <Icon name='ios-menu' style={{ color: '#008B8B' }} /> : <Icon name='md-menu' style={{ color: '#008B8B' }} />}

                            <Image source={require('../images/hh5.png')} style={{ marginLeft: 30 }} />
                        </Button>

                    </Left>
                    <Right>
                        <Button transparent
                            onPress={() => this.setState({ search: true })}>
                            <Icon name="ios-search" style={{ color: '#008B8B' }} />
                        </Button>
                        <Button transparent
                            onPress={() => this.props.navigation.navigate('CatagoryList')}>
                            <Icon name="cart" size={20} style={{ color: '#008B8B' }} />

                        </Button>
                    </Right>
                </Header>
                <Content style={{backgroundColor:'#fff'}}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Shop')}>
                        <Card >
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../images/shopthumb.png')} />
                                    <Body>
                                        <Text>Shops</Text>
                                        <Text note>Fashion,Electronics,Groceries</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../images/shop.png')}
                                    style={{ flex: 1, width: width, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                                />
                            </CardItem>

                        </Card>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Product')}>
                        <Card >
                            <CardItem>
                                <Left>
                                    <Thumbnail source={require('../images/productthumb.png')} />
                                    <Body>
                                        <Text>Products</Text>
                                        <Text note>Men,Women,Kids,Shoes,Mobile,Cameras,Laptops</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem cardBody>
                                <Image source={require('../images/product.png')}
                                    style={{ flex: 1, width: width, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                                />
                            </CardItem>
                            <CardItem>

                            </CardItem>
                        </Card>
                    </TouchableOpacity>
                    
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    icon: {
        width: 24,
        height: 24,
    },
});
export default Screen;


