import React, { Component } from 'react';
import { Platform, ScrollView, View, Image, TouchableOpacity, StyleSheet, AsyncStorage, Alert } from 'react-native';
import { StackNavigator, TabNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Container, Content, Card, CardItem, Text, Icon, Right, Button } from 'native-base';



import Home from '../screens/Home';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import VerifyRC from '../screens/VerifyRC';
import ForgotPwd from '../screens/ForgotPwd';
import ResetPwd from '../screens/ResetPwd';
import Profile from '../screens/Profile';
import PwdChange from '../screens/PwdChange';
import Logout from '../screens/Logout';
import Shop from '../screens/Shop';
import Product from '../screens/Product';
import Beauty from '../screens/Beauty';
import Groceries from '../screens/Groceries';
import Fashion from '../screens/Fashion';
import Electronics from '../screens/Electronics';
import productFashion from '../screens/productFashion';
import productElectronics from '../screens/productElectronics';

var username = 'abc';   // Username to display in Drawer 


class DrawerContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressStatus: false,
            username: 'abc',
            isLoggedin: false,
        };
    }
    render() {
        return (<View style={{ borderWidth: 0, flex: 1, backgroundColor: '#fff', }}>


            <View style={{ alignItems: 'center', backgroundColor: '#fff', flex: 1, justifyContent: 'center', elevation: 0 }}>

                <Image
                    source={require('../images/vesyl_mini.png')}
                    style={{
                        width: 80, height: 80,
                        borderRadius: 10, borderWidth: 2
                    }} />


            </View>

            <View style={{ flex: 3, marginTop: 11 }}>
                <Content style={{ backgroundColor: '#fff' }} >


                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                        <View style={styles.container}>
                            <View style={styles.item1}>
                                <Icon active name="md-home" style={{ color: "#008B8B" }}></Icon>
                            </View>
                            <View style={styles.item2}>
                                <Text style={{ color: "#008B8B" }}>Home</Text></View>
                        </View>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
                        <View style={styles.container}>
                            <View style={styles.item1}>
                                <Icon name="md-person" style={{ color: "#008B8B" }}></Icon></View>
                            <View style={styles.item2}>
                                <Text style={{ color: "#008B8B" }}>User Profile</Text></View>
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
                        <View style={styles.container}>
                            <View style={styles.item1}>
                                <Icon active name="md-person-add" style={{ color: "#008B8B" }}>
                                </Icon></View>
                            <View style={styles.item2}>
                                <Text style={{ color: "#008B8B" }}>Login</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Fashion')}>
                        <View style={styles.container}>
                            <View style={styles.item1}>
                                <Icon active name="ios-flower-outline" style={{ color: "#008B8B" }}></Icon></View>
                            <View style={styles.item2}>
                                <Text style={{ color: "#008B8B" }}>Fashion</Text></View>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Electronics')}>
                        <View style={styles.container} >
                            <View style={styles.item1}>
                                <Icon active name="ios-laptop-outline" style={{ color: "#008B8B" }} ></Icon></View>
                            <View style={styles.item2}>
                                <Text style={{ color: "#008B8B" }}>Electronics</Text></View>

                        </View>
                    </TouchableOpacity>
                    {/*<TouchableOpacity onPress={() => this.props.navigation.navigate('Groceries')}>
                        <View style={styles.container}>
                            <View style={styles.item1}>
                                <Icon active name="ios-basket" style={{ color: "#008B8B" }}></Icon>
                            </View>
                            <View style={styles.item2}>
                                <Text style={{ color: "#008B8B" }}>Groceries</Text></View>

                        </View>
                    </TouchableOpacity>*/}

                </Content>
            </View>

        </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 15,
        // justifyContent: 'center',
        padding: 2,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#008B8B',
        margin: 2,


    },
    item1: {
        marginLeft: 15,
        padding: 10,
        // backgroundColor: 'red',
        justifyContent: 'center',
    },
    item2: {
        padding: 10,
        marginLeft: 2,
        // backgroundColor: 'blue',
        justifyContent: 'center',
    },
})

export const Stack1 = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            header: null,
        },
    },
    Shop: {
        screen: Shop,
    },
    Product: {
        screen: Product,
    },

    // productElectronics: {
    //     screen: productElectronics,                  //Screen Supposed to handle search item's description
    // }

});


export const Stack2 = StackNavigator({
    Login: {
        screen: Login,
        header: null,

    },
    Signup: {
        screen: Signup,
        header: null,
    },
    ForgotPwd: {
        screen: ForgotPwd,
        header: null,
    },
    VerifyRC: {
        screen: VerifyRC,
        header: null,
    },
    ResetPwd: {
        screen: ResetPwd,
        header: null,
    },
}, {


    });



export const Stack4 = StackNavigator({
    Logout: {
        screen: Logout,
        header: null,
    }
});


export const Stack5 = StackNavigator({
    Profile: {
        screen: Profile,
        navigationOptions: {
            header: null,
        },
    },
    PwdChange: {
        screen: PwdChange,

    },
});


export const Stack10 = StackNavigator({
    Fashion: {
        screen: Fashion,
        navigationOptions: {
            header: null,
        },
    },
    productFashion: {
        screen: productFashion,
        navigationOptions: {
            header: null,
        },
    },


}, {
        navigationOptions: {
            cardStack: {
                gesturesEnabled: true,
            },
        },
    });

export const Stack11 = StackNavigator({
    Electronics: {
        screen: Electronics,
        navigationOptions: {
            header: null,
        },
    },
    productElectronics: {
        screen: productElectronics,

    },

});

export const Stack12 = StackNavigator({
    Groceries: {
        screen: Groceries,
        navigationOptions: {
            header: null,
        },
    },


});


export const Drawer = DrawerNavigator({
    Home: {
        screen: Stack1,
        navigationOptions: {                    // Stack1 contains Home, Shop, Product Screen
            drawer: {
                label: 'Home',
            },

        },
    },
    Profile: {
        screen: Stack5,
        navigationOptions: {                    // Stack5 contains Profile, PwdChange Screens
            drawer: {
                label: 'User Profile',
            },
        },
    },
    // ChangePwd: {
    //     screen: Stack0,                      //Instead of ChangePwd, PwdChange is in use
    //     navigationOptions: { 
    //         drawer: {
    //             label: 'ChangePwd',
    //         },
    //     },
    // },
    Login: {
        screen: Stack2,                         // Stack2 contains Login, Signup, ForgotPwd, VerifyRC, ResetPwd Screen
        navigationOptions: {
            drawer: {
                label: 'Login',
            },
        },
    },

    Logout: {
        screen: Stack4,                         // Stack4 contains Logout Screen
        navigationOptions: {
            drawer: {
                label: 'Logout',
            },
        },
    },

    Fashion: {
        screen: Stack10,                        //Stack10 contains Fashion Screen
        navigationOptions: {
            drawer: {
                label: 'Fashion',
            },
        },
    },
    Electronics: {
        screen: Stack11,                        //Stack11 contians Electronics Screen
        navigationOptions: {
            drawer: {
                label: 'Electronics',
            },
        },
    },
    // Groceries: {
    //     screen: Stack12,                     //Presently not is use
    //     navigationOptions: {
    //         drawer: {
    //             label: 'Groceries',
    //         },
    //     },
    // },
}, {
        initialRouteName: 'Home',
        contentComponent: ({ navigation }) => <DrawerContent navigation={navigation} />,
        mode: Platform.OS === 'ios' ? 'modal' : 'card',
    }
)

