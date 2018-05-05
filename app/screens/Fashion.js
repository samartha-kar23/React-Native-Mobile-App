import React, { Component } from 'react';
import {
    Text, StatusBar, Platform, ListView, StyleSheet,
    Alert, Image, TouchableOpacity, View, ScrollView, FlatList, AsyncStorage,
} from 'react-native';
import { DrawerNavigator, navigation } from 'react-navigation';
import {
    Icon, Label, List, ListItem, Button, DeckSwiper, Content, Container, Input,
    Card, CardItem, Item, Thumbnail, Header, Body, Title, Left, Right, flex, Spinner,
} from 'native-base';
import MaterialTabs from 'react-native-material-tabs';

var Mens = [];
var Womens = [];
var Kids = [];
var Shoe = [];
var Beauty = [];

export default class Shoes extends Component {
    constructor(props) {
        super(props);
        state = {

            show: '',
            isLoading: false,
            isItemsLoading: false,

        }
    }
    static navigationOptions = {
        title: 'Fashion',
    }

    state = {
        selectedTab: 0
    }
    componentWillMount() {
        //   const {state} = this.props.navigation;
        //   var tab = parseInt(state.params.tab, 10) ;
        //   Alert.alert(JSON.stringify(tab));
        //   this.setState({selectedTab: tab})
        clearTimeout(this.timer1);
        clearTimeout(this.timer2);
        clearTimeout(this.timer3);
        clearTimeout(this.timer4);
        clearTimeout(this.timer5);
        clearTimeout(this.timer6);
        clearTimeout(this.timer7);
        clearTimeout(this.timer8);
        clearTimeout(this.timer9);
        clearTimeout(this.timer10);
        clearTimeout(this.timer11);
    }
    componentDidMount() {
        this.handleMen();
        this.handleWomen();
        this.handleKids();
        this.handleShoe();
        this.handleBeauty();
    }

    setTab(tab) {

        this.setState({ selectedTab: tab })
        this.setState({ isItemsLoading: true })
        if (tab === 0) {
            this.timer6 = setTimeout(
                () => this.handleMen(),
                1000
            );
        }
        else if (tab === 1) {
            this.timer7 = setTimeout(
                () => this.handleWomen(),
                1000
            );
        }
        else if (tab === 2) {
            this.timer8 = setTimeout(
                () => this.handleKids(),
                1000
            );
        }
        else if (tab === 3) {
            this.timer9 = setTimeout(
                () => this.handleBeauty(),
                1000
            );
        }
        else if (tab === 4) {
            this.timer10 = setTimeout(
                () => this.handleShoe(),
                1000
            );
        }
        this.timer11 = setTimeout(
            () => this.setState({ isItemsLoading: false }),
            1000
        );

    }

    handleMen() {
        console.log(' handle MEn 2.');
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        this.setState({ isLoading: false })
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '313',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Mens = responseJson.data;
                console.log(Mens.product_id);
                console.log(Mens.for_shop_id);
                console.log(Mens.product_name);
                console.log(Mens.price_total);
                console.log(Mens.list_price);
                console.log(Mens.in_stock);
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer1 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }

    handleWomen() {
        console.log(' handle women 2.');
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        this.setState({ isLoading: false })
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '314',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Womens = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer2 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }

    handleKids() {
        console.log(' handle Tablets 2.');
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '316',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Kids = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer3 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }

    handleShoe() {
        console.log(' handle Tablets 2.');
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        this.setState({ isLoading: false })
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '315',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Shoe = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer4 = setTimeout(
            () => this.setState({ isLoading: true }),
            4000
        );
    }
    handleBeauty() {
        console.log(' handle Tablets 2.');
        // let { pId, sId, pName, Price, tDesc, lPrice, Stock} =this.state;
        this.setState({ isLoading: false })
        fetch('https://api.vesyl.in/get-prod', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                catId: '319',


            })
        })
            .then((response) => response.json())
            .then((responseJson) => {

                Beauty = responseJson.data;
            })
            .catch((error) => {
                console.error(error);
            });
        this.timer5 = setTimeout(
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
                            items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
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
                                    items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleMen()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/men.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                                <List dataArray={Mens}
                                    renderRow={(Mens) =>
                                        <TouchableOpacity >
                                            <Card>
                                                <CardItem>
                                                    <Body>
                                                        <Text>{Mens.product_name}</Text>
                                                    </Body>
                                                    <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                                </CardItem>
                                                <CardItem footer>
                                                    <Left><Text style={{ color: 'green' }}>In Stock:{Mens.in_stock}</Text></Left>
                                                    <Right><Text style={{ fontWeight: 'bold' }}>₹ {Mens.list_price}</Text></Right>
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
                                    items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleMen()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/men.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
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
                                    items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleWomen()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/shoppers.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity>
                                <List dataArray={Womens}
                                    renderRow={(Womens) =>
                                        <TouchableOpacity>
                                            <Card>
                                                <CardItem>
                                                    <Body>
                                                        <Text>{Womens.product_name}</Text>
                                                    </Body>
                                                    <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                                </CardItem>
                                                <CardItem footer>
                                                    <Left><Text style={{ color: 'green' }}>In Stock:{Womens.in_stock}</Text></Left>
                                                    <Right><Text style={{ fontWeight: 'bold' }}>₹ {Womens.list_price}</Text></Right>
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
                                    items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
                                    selectedIndex={this.state.selectedTab}
                                    onChange={this.setTab.bind(this)}
                                    barColor="#1fbcd2"
                                    indicatorColor="#fffe94"
                                    activeTextColor="white"
                                    scrollable={true}
                                />
                            </View>
                            <Content>
                                <TouchableOpacity onPress={() => this.handleWomen()}>
                                    <Card>
                                        <CardItem cardBody>
                                            <Image source={require('../images/shoppers.png')}
                                                style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                                            />
                                        </CardItem>
                                    </Card>
                                </TouchableOpacity><Spinner/></Content></Container>
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
                                items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleKids()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/kids.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                            <List dataArray={Kids}
                                renderRow={(Kids) =>
                                    <TouchableOpacity>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <Text>{Kids.product_name}</Text>
                                                </Body>
                                                <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                            </CardItem>
                                            <CardItem footer>
                                                <Left><Text style={{ color: 'green' }}>In Stock:{Kids.in_stock}     Gender: {(Kids.for_gender === 1) ? 'M' : 'F'}</Text></Left>
                                                <Right><Text style={{ fontWeight: 'bold' }}>₹ {Kids.list_price}</Text></Right>
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
                                items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleKids()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/kids.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity><Spinner/></Content></Container>
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
                                items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleBeauty()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/Products/beauty.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                            <List dataArray={Beauty}
                                renderRow={(Beauty) =>
                                    <TouchableOpacity>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <Text>{Beauty.product_name}</Text>
                                                </Body>
                                                <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                            </CardItem>
                                            <CardItem footer>
                                                <Left><Text style={{ color: 'green' }}>In Stock:{Beauty.in_stock}    Gender: {(Beauty.for_gender === 1) ? 'M' : 'F'}</Text></Left>
                                                <Right><Text style={{ fontWeight: 'bold' }}>₹ {Beauty.list_price}</Text></Right>
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
                                items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleBeauty()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/Products/beauty.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'cover', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity><Spinner/></Content></Container>
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
                                items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleShoe()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/shoes.png')}
                                            style={{ flex: 1, flexDirection: 'row', width: 100, height: 350, resizeMode: 'contain', marginHorizontal: 4 }}
                                        />
                                    </CardItem>
                                </Card>
                            </TouchableOpacity>
                            <List dataArray={Shoe}
                                renderRow={(Shoe) =>
                                    <TouchableOpacity>
                                        <Card>
                                            <CardItem>
                                                <Body>
                                                    <Text>{Shoe.product_name}</Text>
                                                </Body>
                                                <Right><Icon name='ios-arrow-forward' onPress={() => { }}></Icon></Right>
                                            </CardItem>
                                            <CardItem footer>
                                                <Left><Text style={{ color: 'green' }}>In Stock:{Shoe.in_stock}    Gender: {(Shoe.for_gender === 1) ? 'M' : 'F'}</Text></Left>
                                                <Right><Text style={{ fontWeight: 'bold' }}>₹ {Shoe.list_price}</Text></Right>
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
                                items={['Men', 'Women', 'Kids', 'Beauty', 'Shoes']}
                                selectedIndex={this.state.selectedTab}
                                onChange={this.setTab.bind(this)}
                                barColor="#1fbcd2"
                                indicatorColor="#fffe94"
                                activeTextColor="white"
                                scrollable={true}
                            />
                        </View>
                        <Content>
                            <TouchableOpacity onPress={() => this.handleShoe()}>
                                <Card>
                                    <CardItem cardBody>
                                        <Image source={require('../images/shoes.png')}
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

