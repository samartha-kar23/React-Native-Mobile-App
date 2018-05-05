import React, { Component } from 'react';
import { Text, StatusBar, Platform, ListView, StyleSheet,
    Alert, Image, TouchableOpacity, View, ScrollView, FlatList, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
    Icon, Button, Container,
    Thumbnail, Header, Left, Right,
} from 'native-base';
import MaterialTabs from 'react-native-material-tabs';
import ScrollHorizontal from '../components/scrollHorizontal';



class Screen extends Component {
    static navigationOptions = {
        title: 'Sports',
    }
    // constructor(props) {
    //     super(props);
    //     state = {
    //         selectedTab: 0
    //     }
    // }
    state = {
        selectedTab: 0
    }
   async componentWillMount() {
       
           try {
               
            const value = await AsyncStorage.getItem('tab');
            if (value !== null) {
                // We have data!!
                console.log('Sports')
                console.log(value);
                //Alert.alert(value);
                this.setState({ selectedTab: value });
            }
            
        }
        catch (error) {
            console.log('error catched in Sports tab');
        }
    
    
    }


     

    setTab(tab) {
        //stats from 0-n
        console.log(tab);
        this.handleChange(tab);
    }

    async handleChange(tab) {
        try {
            await AsyncStorage.setItem('tab', JSON.stringify(tab));
        }
        catch (error) {
            console.log('Sports.js async error')
        }
        if (tab === 0)
            this.props.navigation.navigate('Explore');
        if (tab === 1)
            this.props.navigation.navigate('Fashion');
        if (tab === 2)
            this.props.navigation.navigate('Beauty');
        if (tab === 3)
            this.props.navigation.navigate('Health');
        // if (tab === 4)
        //     this.props.navigation.navigate('Sports');
        if (tab === 5)
            this.props.navigation.navigate('Electronics');
        if (tab === 6)
            this.props.navigation.navigate('Groceries');
    }



    // handleScrollPress() {
    //     const resetAction = NavigationActions.reset({
    //         index: 0,
    //         actions: [
    //             NavigationActions.navigate({ routeName: 'Fashion' })
    //         ]
    //     })
    //     this.props.navigation.dispatch(resetAction)
    // }

    render() {
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

                <View style={styles.contain}>
                    <MaterialTabs
                        items={['Explore', 'Fashion', 'Beauty', 'health', 'Sports', 'Electronics', 'Groceries']}
                        selectedIndex={this.state.selectedTab}
                        onChange={this.setTab.bind(this)}
                        barColor="#1fbcd2"
                        indicatorColor="#fffe94"
                        activeTextColor="white"
                        scrollable={true}
                    />
                </View>







                {/*<View style={styles.navScroll}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>


                        <View style={[styles.box, styles.boxOne]}>
                            <TouchableOpacity onPress={() => this.props
                                .navigation
                                .dispatch(NavigationActions.reset(
                                    {
                                        index: 1,
                                        actions: [
                                            NavigationActions.navigate({ routeName: 'Explore' }),
                                            NavigationActions.navigate({ routeName: 'Fashion' })
                                        ]
                                    }))} ><Text>Fashion</Text></TouchableOpacity>
                        </View>
                        <View style={[styles.box, styles.boxTwo]}>
                            <TouchableOpacity onPress={() => this.props
                                .navigation
                                .dispatch(NavigationActions.reset(
                                    {
                                        index: 1,
                                        actions: [
                                            NavigationActions.navigate({ routeName: 'Explore' }),
                                            NavigationActions.navigate({ routeName: 'Beauty' })
                                        ]
                                    }))} ><Text>Beauty</Text></TouchableOpacity>
                        </View>
                        <View style={[styles.box, styles.boxThree]}>
                            <TouchableOpacity onPress={() => this.props
                                .navigation
                                .dispatch(NavigationActions.reset(
                                    {
                                        index: 1,
                                        actions: [
                                            NavigationActions.navigate({ routeName: 'Explore' }),
                                            NavigationActions.navigate({ routeName: 'Health' })
                                        ]
                                    }))} ><Text>Health</Text></TouchableOpacity>
                        </View>


                        <View style={[styles.box, styles.boxFour]}>
                            <TouchableOpacity onPress={() => this.props
                                .navigation
                                .dispatch(NavigationActions.reset(
                                    {
                                        index: 1,
                                        actions: [
                                            NavigationActions.navigate({ routeName: 'Explore' }),
                                            NavigationActions.navigate({ routeName: 'Sports' })
                                        ]
                                    }))} ><Text>Sports</Text></TouchableOpacity>
                        </View>
                        <View style={[styles.box, styles.boxFive]}>
                            <TouchableOpacity onPress={() => this.props
                                .navigation
                                .dispatch(NavigationActions.reset(
                                    {
                                        index: 1,
                                        actions: [
                                            NavigationActions.navigate({ routeName: 'Explore' }),
                                            NavigationActions.navigate({ routeName: 'Electronics' })
                                        ]
                                    }))} ><Text>Electronics</Text></TouchableOpacity>
                        </View>
                        <View style={[styles.box, styles.boxSix]}>
                            <TouchableOpacity onPress={() => this.props
                                .navigation
                                .dispatch(NavigationActions.reset(
                                    {
                                        index: 1,
                                        actions: [
                                            NavigationActions.navigate({ routeName: 'Explore' }),
                                            NavigationActions.navigate({ routeName: 'Groceries' })
                                        ]
                                    }))} ><Text>Groceries</Text></TouchableOpacity>
                        </View>


                    </ScrollView>
                </View>           */}








                <View style={styles.iconContainer}>
                    <View style={styles.container}>

                        <View style={[styles.boxContainer, styles.boxOne]}>
                            <TouchableOpacity />
                            <Text>Sports</Text>
                        </View>
                        <View style={[styles.boxContainer, styles.boxTwo]}>
                            <TouchableOpacity />
                        </View>
                        <View style={[styles.boxContainer, styles.boxThree]}>
                            <TouchableOpacity />
                        </View>
                    </View>
                    <View style={styles.container}>
                        <View style={[styles.boxContainer, styles.boxFour]}>
                            <TouchableOpacity />
                        </View>
                        <View style={[styles.boxContainer, styles.boxFive]}>
                            <TouchableOpacity />
                        </View>
                        <View style={[styles.boxContainer, styles.boxSix]}>
                            <TouchableOpacity />
                        </View>
                    </View>
                </View>
                <View style={styles.bodyContainer}>
                </View>
            </Container>


        );
    }
}

const styles = StyleSheet.create({
    jumboContainer: {
        backgroundColor: '#2c3e50',
    },
    iconContainer: {
        flex: 3,
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
        flex: 3,
        backgroundColor: '#ecf0f1',
    },
    box: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
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
    }
})
export default Screen;
