import React, { Component } from 'react';
import {
    Text, StatusBar, Platform, ListView, StyleSheet,
    Alert, Image, TouchableOpacity, View, ScrollView, FlatList, AsyncStorage
} from 'react-native';
import { DrawerNavigator, navigation } from 'react-navigation';
import {
    Icon, Label, List, ListItem, Button, DeckSwiper, Content, Container, Input,
    Card, CardItem, Item, Thumbnail, Header, Body, Title, Left, Right, flex, Spinner
} from 'native-base';
import MaterialTabs from 'react-native-material-tabs';

import TimerMixin from 'react-timer-mixin';

var data = [];
var Tablets = [];
var Cameras = [];
var Headphones = [];
var Speakers = [];
var Tvs = [];
var Laptops = [];
var Soliddrives = [];
var Gender = [];


export default class Shoes extends Component {
    mixins = {
        TimerMixin
    }

    constructor(props) {
        super(props);
        state = {
            dumb: [],
            data: [],
            show: '',
            isLoading: false,
            prodDesc: false,
            isItemsLoading: false,

        }
    }
    static navigationOptions = {
        title: 'Electronics',
    }

    state = {
        selectedTab: 0
    }

    componentWillMount() {

        console.log('component will mount 1.');
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        clearTimeout(this.timer3);
        clearTimeout(this.timer4);
        clearTimeout(this.timer5);
        clearTimeout(this.timer6);
        clearTimeout(this.timer7);
        clearTimeout(this.timer8);


    }
    componentDidMount() {
        console.log('component did mount 4.');
        //            this.timerID = setTimeout(
        //     () => this.handleMobiles(),
        //     9000
        // );
        // this.setState({ show: 'Show Mobiles' });
        this.handleMobiles();
        this.handleTablets();
        this.handleCameras();
        this.handleHeadphones();
        this.handleSpeakers();
        this.handleTvs();
        this.handleLaptops();
        this.handleSoliddrives();

    }


    setTab(tab) {

        this.setState({ selectedTab: tab })
        this.setState({ isItemsLoading: true })
        if (tab === 0) {
            this.timer6 = setTimeout(
                () => this.handleMobiles(),
                1000
            );
        }
        else if (tab === 1) {
            this.timer7 = setTimeout(
                () => this.handleTablets(),
                1000
            );
        }
        else if (tab === 2) {
            this.timer8 = setTimeout(
                () => this.handleCameras(),
                1000
            );
        }
        else if (tab === 3) {
            this.timer9 = setTimeout(
                () => this.handleHeadphones(),
                1000
            );
        }
        else if (tab === 4) {
            this.timer10 = setTimeout(
                () => this.handleSpeakers(),
                1000
            );
        }
        else if (tab === 5) {
            this.timer10 = setTimeout(
                () => this.handleTvs(),
                1000
            );
        }
        else if (tab === 6) {
            this.timer10 = setTimeout(
                () => this.handleLaptops(),
                1000
            );
        }
        else if (tab === 7) {
            this.timer10 = setTimeout(
                () => this.handleSoliddrives(),
                1000
            );
        }
        this.timer11 = setTimeout(
            () => this.setState({ isItemsLoading: false }),
            1000
        );

    }

    handleMobiles() {
        console.log(' handle mobiles 2.');
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        this.setState({ isLoading: false })
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '297',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                data = responseJson.data;
                console.log(data.product_id);
                console.log(data.for_shop_id);
                console.log(data.product_name);
                console.log(data.price_total);
                console.log(data.list_price);
                console.log(data.in_stock);
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer1 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );


    }
    handleTablets() {
        console.log(' handle Tablets 2.');
        this.setState({ isLoading: false })
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '304',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Tablets = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer2 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }

    handleCameras() {
        this.setState({ isLoading: false })
        console.log(' handle Cameras 2.');
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '298',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Cameras = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer3 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }

    handleHeadphones() {
        this.setState({ isLoading: false })
        console.log(' handle Cameras 2.');
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '299',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Headphones = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer4 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }

    handleSpeakers() {
        console.log(' handle Cameras 2.');
        this.setState({ isLoading: false })
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '303',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Speakers = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer5 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }

    handleTvs() {
        console.log(' handle Cameras 2.');
        this.setState({ isLoading: false })
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '301',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Tvs = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer6 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }
    handleLaptops() {
        console.log(' handle Cameras 2.');
        this.setState({ isLoading: false })
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '302',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Laptops = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer7 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }
    handleSoliddrives() {
        this.setState({ isLoading: false })
        console.log(' handle Cameras 2.');
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '300',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Soliddrives = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer8 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }



    render() {
        if (this.state.isItemsLoading === true) {
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

                    </Header>
                    <View style={styles.containe}>
                        <MaterialTabs
                            items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                            selectedIndex={this.state.selectedTab}
                            onChange={this.setTab.bind(this)}
                            barColor="#1fbcd2"
                            indicatorColor="#fffe94"
                            activeTextColor="white"
                            scrollable={true}
                        />
                    </View><Spinner /></Container>
            );
        }
        else {
            if (this.state.selectedTab === 0) {
                if (this.state.isLoading === true) {
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

                            </Header>
                            <View style={styles.containe}>
                                <MaterialTabs
                                    items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleMobiles()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/mobiles.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>

                                <List dataArray={data}
                                    renderRow={(data) =>
                                        <TouchableOpacity>
                                            <Card>
                                                <CardItem>
                                                    <Body>
                                                        <Text>{data.product_name}</Text>
                                                    </Body>
                                                    <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                                </CardItem>
                                                <CardItem footer>
                                                    <Left><Text style={{ color: 'green' }}>In Stock:{data.in_stock}</Text></Left>
                                                    <Right><Text style={{ fontWeight: 'bold' }}>₹ {data.list_price}</Text></Right>
                                                </CardItem>
                                            </Card>
                                        </TouchableOpacity>}>

                                </List>
                            </Content>
                        </Container>
                    );
                }
                else {
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

                            </Header>
                            <View style={styles.containe}>
                                <MaterialTabs
                                    items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleMobiles()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/mobiles.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                                <Spinner />
                            </Content></Container>
                    );
                }
            }
            else if (this.state.selectedTab === 1) {
                if (this.state.isLoading === true) {
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

                            </Header>
                            <View style={styles.containe}>
                                <MaterialTabs
                                    items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleTablets()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/tablets.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                                <List dataArray={Tablets}
                                    renderRow={(Tablets) =>
                                        <TouchableOpacity>
                                            <Card>
                                                <CardItem>
                                                    <Body>
                                                        <Text>{Tablets.product_name}</Text>
                                                    </Body>
                                                    <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                                </CardItem>
                                                <CardItem footer>
                                                    <Left><Text style={{ color: 'green' }}>In Stock:{Tablets.in_stock}</Text></Left>
                                                    <Right><Text style={{ fontWeight: 'bold' }}>₹ {Tablets.list_price}</Text></Right>
                                                </CardItem>
                                            </Card>
                                        </TouchableOpacity>}>

                                </List>

                            </Content>
                        </Container>
                    );
                }
                else {
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

                            </Header>
                            <View style={styles.containe}>
                                <MaterialTabs
                                    items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleTablets()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/tablets.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                                <Spinner />
                            </Content></Container>
                    );
                }
            }

            else if (this.state.selectedTab === 2) {
                if (this.state.isLoading === true) {
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

                            </Header>
                            <View style={styles.containe}>
                                <MaterialTabs
                                    items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleCameras()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/cameras.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                                <List dataArray={Cameras}
                                    renderRow={(Cameras) =>
                                        <TouchableOpacity>
                                            <Card>
                                                <CardItem>
                                                    <Body>
                                                        <Text>{Cameras.product_name}</Text>
                                                    </Body>
                                                    <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                                </CardItem>
                                                <CardItem footer>
                                                    <Left><Text style={{ color: 'green' }}>In Stock:{Cameras.in_stock}</Text></Left>
                                                    <Right><Text style={{ fontWeight: 'bold' }}>₹ {Cameras.list_price}</Text></Right>
                                                </CardItem>
                                            </Card>
                                        </TouchableOpacity>}>

                                </List>
                            </Content>
                        </Container>
                    );
                }
                else {
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

                            </Header>
                            <View style={styles.containe}>
                                <MaterialTabs
                                    items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleCameras()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/cameras.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                                <Spinner />
                            </Content></Container>
                    );
                }
            }
            else if (this.state.selectedTab === 3) {
                if (this.state.isLoading === true) {
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

                            </Header>
                            <View style={styles.containe}>
                                <MaterialTabs
                                    items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleHeadphones()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/headphones.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                                <List dataArray={Headphones}
                                    renderRow={(Headphones) =>
                                        <TouchableOpacity>
                                            <Card>
                                                <CardItem>
                                                    <Body>
                                                        <Text>{Headphones.product_name}</Text>
                                                    </Body>
                                                    <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                                </CardItem>
                                                <CardItem footer>
                                                    <Left><Text style={{ color: 'green' }}>In Stock:{Headphones.in_stock}</Text></Left>
                                                    <Right><Text style={{ fontWeight: 'bold' }}>₹ {Headphones.list_price}</Text></Right>
                                                </CardItem>
                                            </Card>
                                        </TouchableOpacity>}>

                                </List>
                            </Content>
                        </Container>
                    );
                }
                else {
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

                            </Header>
                            <View style={styles.containe}>
                                <MaterialTabs
                                    items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleHeadphones()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/headphones.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                                <Spinner />
                            </Content></Container>
                    );
                }
            }
            else if (this.state.selectedTab === 4) {
                if (this.state.isLoading === true) {
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

                            </Header>
                            <View style={styles.containe}>
                                <MaterialTabs
                                    items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleSpeakers()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/speakers.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                                <List dataArray={Speakers}
                                    renderRow={(Speakers) =>
                                        <TouchableOpacity>
                                            <Card>
                                                <CardItem>
                                                    <Body>
                                                        <Text>{Speakers.product_name}</Text>
                                                    </Body>
                                                    <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                                </CardItem>
                                                <CardItem footer>
                                                    <Left><Text style={{ color: 'green' }}>In Stock:{Speakers.in_stock}</Text></Left>
                                                    <Right><Text style={{ fontWeight: 'bold' }}>₹ {Speakers.list_price}</Text></Right>
                                                </CardItem>
                                            </Card>
                                        </TouchableOpacity>}>

                                </List>
                            </Content>
                        </Container>
                    );
                }
                else {
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

                            </Header>
                            <View style={styles.containe}>
                                <MaterialTabs
                                    items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleSpeakers()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/speakers.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity><Spinner /></Content></Container>
                    );
                }
            }
            else if (this.state.selectedTab === 5) {
                   if (this.state.isLoading === true) {
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

                        </Header>
                        <View style={styles.containe}>
                            <MaterialTabs
                                items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleTvs()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/tv.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                            <List dataArray={Tvs}
                                renderRow={(Tvs) =>
                                    <TouchableOpacity>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <Text>{Tvs.product_name}</Text>
                                                </Body>
                                                <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                            </CardItem>
                                            <CardItem footer>
                                                <Left><Text style={{ color: 'green' }}>In Stock:{Tvs.in_stock}</Text></Left>
                                                <Right><Text style={{ fontWeight: 'bold' }}>₹ {Tvs.list_price}</Text></Right>
                                            </CardItem>
                                        </Card>
                                    </TouchableOpacity>}>

                            </List>
                        </Content>
                    </Container>
                );
            }
    else{
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

                        </Header>
                        <View style={styles.containe}>
                            <MaterialTabs
                                items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleTvs()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/tv.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity><Spinner/></Content></Container>
          );
    }    
    }
            else if (this.state.selectedTab === 6) {
                  if (this.state.isLoading === true) {
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

                        </Header>
                        <View style={styles.containe}>
                            <MaterialTabs
                                items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleLaptops()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/laptops.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                            <List dataArray={Laptops}
                                renderRow={(Laptops) =>
                                    <TouchableOpacity>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <Text>{Laptops.product_name}</Text>
                                                </Body>
                                                <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                            </CardItem>
                                            <CardItem footer>
                                                <Left><Text style={{ color: 'green' }}>In Stock:{Laptops.in_stock}</Text></Left>
                                                <Right><Text style={{ fontWeight: 'bold' }}>₹ {Laptops.list_price}</Text></Right>
                                            </CardItem>
                                        </Card>
                                    </TouchableOpacity>}>

                            </List>
                        </Content>
                    </Container>
                );
            }
    else{
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

                        </Header>
                        <View style={styles.containe}>
                            <MaterialTabs
                                items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleLaptops()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/laptops.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity><Spinner/></Content></Container>
          );
    }    
    }
            else if (this.state.selectedTab === 7) {
                 if (this.state.isLoading === true) {
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

                        </Header>
                        <View style={styles.containe}>
                            <MaterialTabs
                                items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleSoliddrives()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/pendrive.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                            <List dataArray={Soliddrives}
                                renderRow={(Soliddrives) =>
                                    <TouchableOpacity>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <Text>{Soliddrives.product_name}</Text>
                                                </Body>
                                                <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                            </CardItem>
                                            <CardItem footer>
                                                <Left><Text style={{ color: 'green' }}>In Stock:{Soliddrives.in_stock}</Text></Left>
                                                <Right><Text style={{ fontWeight: 'bold' }}>₹ {Soliddrives.list_price}</Text></Right>
                                            </CardItem>
                                        </Card>
                                    </TouchableOpacity>}>

                            </List>
                        </Content>
                    </Container>
                );
            }
        else{
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

                        </Header>
                        <View style={styles.containe}>
                            <MaterialTabs
                                items={['Mobiles', 'Tablets', 'Cameras', 'HeadPhones', 'Speakers', 'TVs', 'Laptops', 'Solid Drives']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleSoliddrives()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/pendrive.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity><Spinner/></Content></Container>
             );
        }    
        }
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

