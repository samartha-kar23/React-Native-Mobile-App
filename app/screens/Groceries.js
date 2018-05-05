import React, { Component } from 'react';
import {
    Text, StatusBar, Platform, ListView, StyleSheet,
    Alert, Image, TouchableOpacity, View, ScrollView, FlatList, AsyncStorage
} from 'react-native';
import { DrawerNavigator, navigation } from 'react-navigation';
import {
    Icon, Label, List, ListItem, Button, DeckSwiper, Content, Container, Input,
    Card, CardItem, Item, Thumbnail, Header, Body, Title, Left, Right, flex
} from 'native-base';
import MaterialTabs from 'react-native-material-tabs';

export default class Shoes extends Component {
    static navigationOptions = {
        title: 'Groceries',
    }

    state = {
        selectedTab: 0
    }
    componentWillMount() {
        //   const {state} = this.props.navigation;
        //   var tab = parseInt(state.params.tab, 10) ;
        //   Alert.alert(JSON.stringify(tab));
        //   this.setState({selectedTab: tab})
    }

    setTab(tab) {

        this.setState({ selectedTab: tab })
    }

    render() {
        if (this.state.selectedTab === 0) {
            return (
                <Container style={{ backgroundColor: 'white' }}>
                    <Header style={{ backgroundColor: 'white' }}>
                        <Left>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                {Platform.OS == 'ios' ?
                                    <Icon name='ios-menu' style={{ color: '#008B8B' }} /> : <Icon name='md-menu' style={{ color: '#008B8B' }} />}

                                <Image source={require('../images/hh5.png')} style={{ marginLeft: 30 }} />
                            </Button>

                        </Left>
                        {/*<Right>
                            <Button transparent
                                onPress={() => this.setState({ search: true })}>
                                <Icon name="ios-search" style={{ color: '#008B8B' }} />
                            </Button>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('CatagoryList')}>
                                <Icon name="cart" size={20} style={{ color: '#008B8B' }} />

                            </Button>
                        </Right>*/}
                    </Header>
                    <View style={styles.containe}>
                        <MaterialTabs
                            items={['Mobiles','Tablets', 'Cameras', 'HeadPhones','Speakers','TVs', 'Laptops','Solid Drives']}
                            selectedIndex={this.state.selectedTab}
                            onChange={this.setTab.bind(this)}
                            barColor="#1fbcd2"
                            indicatorColor="#fffe94"
                            activeTextColor="white"
                            scrollable={true}
                        />
                    </View>
                    <Content>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>

                                        <Body>
                                            <Text>Men's</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image source={require('../images/village.png')}
                                        style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                                    />
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Women's</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image source={require('../images/goodfood.png')}
                                        style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                                    />
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </Content>
                </Container>
            );
        }
        else if (this.state.selectedTab === 1) {
            return (
                <Container style={{ backgroundColor: 'white' }}>
                    <Header style={{ backgroundColor: 'white' }}>
                        <Left>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                {Platform.OS == 'ios' ?
                                    <Icon name='ios-menu' style={{ color: '#008B8B' }} /> : <Icon name='md-menu' style={{ color: '#008B8B' }} />}

                                <Image source={require('../images/hh5.png')} style={{ marginLeft: 30 }} />
                            </Button>

                        </Left>
                        {/*<Right>
                            <Button transparent
                                onPress={() => this.setState({ search: true })}>
                                <Icon name="ios-search" style={{ color: '#008B8B' }} />
                            </Button>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('CatagoryList')}>
                                <Icon name="cart" size={20} style={{ color: '#008B8B' }} />

                            </Button>
                        </Right>*/}
                    </Header>
                    <View style={styles.containe}>
                        <MaterialTabs
                            items={['Shoes', 'Men', 'Women', 'Boys', 'Girls', 'Kids']}
                            selectedIndex={this.state.selectedTab}
                            onChange={this.setTab.bind(this)}
                            barColor="#1fbcd2"
                            indicatorColor="#fffe94"
                            activeTextColor="white"
                            scrollable={true}
                        />
                    </View>
                    <Content>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>

                                        <Body>
                                            <Text>T-Shirts & Polos</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Shirts</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Jackets & Gillets</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Suits & Blazers</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>SweatShits & Hoodies</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Innerwears</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Trousers</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Sleep & Lounge wear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Sportswear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Ethnic wear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Cargo Pants</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Belts</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Socks</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </Content>
                </Container>
            );
        }

         else if (this.state.selectedTab === 2) {
            return (
                <Container style={{ backgroundColor: 'white' }}>
                    <Header style={{ backgroundColor: 'white' }}>
                        <Left>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                {Platform.OS == 'ios' ?
                                    <Icon name='ios-menu' style={{ color: '#008B8B' }} /> : <Icon name='md-menu' style={{ color: '#008B8B' }} />}

                                <Image source={require('../images/hh5.png')} style={{ marginLeft: 30 }} />
                            </Button>

                        </Left>
                        {/*<Right>
                            <Button transparent
                                onPress={() => this.setState({ search: true })}>
                                <Icon name="ios-search" style={{ color: '#008B8B' }} />
                            </Button>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('CatagoryList')}>
                                <Icon name="cart" size={20} style={{ color: '#008B8B' }} />

                            </Button>
                        </Right>*/}
                    </Header>
                    <View style={styles.containe}>
                        <MaterialTabs
                            items={['Shoes', 'Men', 'Women', 'Boys', 'Girls', 'Kids']}
                            selectedIndex={this.state.selectedTab}
                            onChange={this.setTab.bind(this)}
                            barColor="#1fbcd2"
                            indicatorColor="#fffe94"
                            activeTextColor="white"
                            scrollable={true}
                        />
                    </View>
                    <Content>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>

                                        <Body>
                                            <Text>Western Wear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Ethnic Wear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Lingerie & Night Wear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Sports Wear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </Content>
                </Container>
            );
        }
         else if (this.state.selectedTab === 3) {
            return (
                <Container style={{ backgroundColor: 'white' }}>
                    <Header style={{ backgroundColor: 'white' }}>
                        <Left>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                {Platform.OS == 'ios' ?
                                    <Icon name='ios-menu' style={{ color: '#008B8B' }} /> : <Icon name='md-menu' style={{ color: '#008B8B' }} />}

                                <Image source={require('../images/hh5.png')} style={{ marginLeft: 30 }} />
                            </Button>

                        </Left>
                        {/*<Right>
                            <Button transparent
                                onPress={() => this.setState({ search: true })}>
                                <Icon name="ios-search" style={{ color: '#008B8B' }} />
                            </Button>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('CatagoryList')}>
                                <Icon name="cart" size={20} style={{ color: '#008B8B' }} />

                            </Button>
                        </Right>*/}
                    </Header>
                    <View style={styles.containe}>
                        <MaterialTabs
                            items={['Shoes', 'Men', 'Women', 'Boys', 'Girls', 'Kids']}
                            selectedIndex={this.state.selectedTab}
                            onChange={this.setTab.bind(this)}
                            barColor="#1fbcd2"
                            indicatorColor="#fffe94"
                            activeTextColor="white"
                            scrollable={true}
                        />
                    </View>
                    <Content>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>

                                        <Body>
                                            <Text>T-Shirts</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Shirts</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Jeans</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Pants</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Winter Wear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Outfits & Clothing Sets</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </Content>
                </Container>
            );
        }
         else if (this.state.selectedTab === 4) {
            return (
                <Container style={{ backgroundColor: 'white' }}>
                    <Header style={{ backgroundColor: 'white' }}>
                        <Left>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                {Platform.OS == 'ios' ?
                                    <Icon name='ios-menu' style={{ color: '#008B8B' }} /> : <Icon name='md-menu' style={{ color: '#008B8B' }} />}

                                <Image source={require('../images/hh5.png')} style={{ marginLeft: 30 }} />
                            </Button>

                        </Left>
                        {/*<Right>
                            <Button transparent
                                onPress={() => this.setState({ search: true })}>
                                <Icon name="ios-search" style={{ color: '#008B8B' }} />
                            </Button>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('CatagoryList')}>
                                <Icon name="cart" size={20} style={{ color: '#008B8B' }} />

                            </Button>
                        </Right>*/}
                    </Header>
                    <View style={styles.containe}>
                        <MaterialTabs
                            items={['Shoes', 'Men', 'Women', 'Boys', 'Girls', 'Kids']}
                            selectedIndex={this.state.selectedTab}
                            onChange={this.setTab.bind(this)}
                            barColor="#1fbcd2"
                            indicatorColor="#fffe94"
                            activeTextColor="white"
                            scrollable={true}
                        />
                    </View>
                    <Content>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>

                                        <Body>
                                            <Text>Tops & Tees</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                          <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Shirts</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Dresses</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                          <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Shorts</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Jeans</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Pants</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Winter Wear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                          <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Sweaters</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Outfits & Clothing Sets</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                    </Content>
                </Container>
            );
        }
        else if(this.state.selectedTab === 5){
            return (
                <Container style={{ backgroundColor: 'white' }}>
                    <Header style={{ backgroundColor: 'white' }}>
                        <Left>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                                {Platform.OS == 'ios' ?
                                    <Icon name='ios-menu' style={{ color: '#008B8B' }} /> : <Icon name='md-menu' style={{ color: '#008B8B' }} />}

                                <Image source={require('../images/hh5.png')} style={{ marginLeft: 30 }} />
                            </Button>

                        </Left>
                        {/*<Right>
                            <Button transparent
                                onPress={() => this.setState({ search: true })}>
                                <Icon name="ios-search" style={{ color: '#008B8B' }} />
                            </Button>
                            <Button transparent
                                onPress={() => this.props.navigation.navigate('CatagoryList')}>
                                <Icon name="cart" size={20} style={{ color: '#008B8B' }} />

                            </Button>
                        </Right>*/}
                    </Header>
                    <View style={styles.containe}>
                        <MaterialTabs
                            items={['Shoes', 'Men', 'Women', 'Boys', 'Girls', 'Kids']}
                            selectedIndex={this.state.selectedTab}
                            onChange={this.setTab.bind(this)}
                            barColor="#1fbcd2"
                            indicatorColor="#fffe94"
                            activeTextColor="white"
                            scrollable={true}
                        />
                    </View>
                     <Content>
                    <Card>
                    <CardItem header>
                       <Icon active name="logo-googleplus" />
                       <Text>Boys</Text>
                       <Right>
                          <Icon name="arrow-forward" />
                       </Right>
                     </CardItem>
                   </Card>
                    <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Coats & Jackets</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Ethnic Wear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Jeans</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Shirts</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Shorts</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Sweaters</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Trousers</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Underwear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        
                         <Card>
                    <CardItem header>
                       <Icon active name="logo-googleplus" />
                       <Text>Girls</Text>
                       <Right>
                          <Icon name="arrow-forward" />
                       </Right>
                     </CardItem>
                   </Card>
                    <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Coats & Jackets</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Ethnic Wear</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Jeans</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Skirts & Skorts</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>Tops & Tees</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                         <TouchableOpacity>
                            <Card >
                                <CardItem>
                                    <Left>
                                        <Body>
                                            <Text>SweatShirts & Hoodies</Text>
                                            <Text note></Text>
                                        </Body>
                                    </Left>
                                </CardItem>
                            </Card>
                        </TouchableOpacity>
                        
                </Content>
                    </Container>
            );
        }
    }
}

const styles = StyleSheet.create({
    jumboContainer: {
        backgroundColor: '#2c3e50',
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 5,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    boxContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        borderRadius: 5,
        elevation: 5,

    },
    boxOne: {
        backgroundColor: '#ecf0f1',
    },
    boxTwo: {
        backgroundColor: '#ecf0f1',
    },
    boxThree: {
        backgroundColor: '#ecf0f1',
    },
    boxFour: {
        backgroundColor: '#ecf0f1',
    },
    boxFive: {
        backgroundColor: '#ecf0f1',
    },
    boxSix: {
        backgroundColor: '#ecf0f1',
    },
    bodyContainer: {
        flex: 1.5,
        backgroundColor: '#ecf0f1',
    },
    box: {
        flex: 0.5,

        marginLeft: 5,
        width: 100,
        borderRadius: 10,
        elevation: 5,
    },
    navScroll: {
        flex: 1,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contain: {
        flex: 1
    }
})

