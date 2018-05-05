import React, { Component } from 'react';
import { Text, StatusBar, Platform, ListView, StyleSheet, Image, TouchableOpacity, View, ScrollView, FlatList } from 'react-native';
import { NavigationActions } from 'react-navigation';
import {
    Icon, Button, Container,
    Thumbnail, Header, Left, Right,
} from 'native-base';


export default class ScrollHorizontal extends Component {

    handleScrollPress(category) {
        if (category === 'fashion') {
           return this.props
               .navigation
               .dispatch(NavigationActions.reset(
                 {
                    index: 0,
                    actions: [
                      NavigationActions.navigate({ routeName: 'Fashion'})
                    ]
                  }));

        }
       


    }
    render() {
        return (
            <View style={styles.navScroll}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>


                    <View style={[styles.box, styles.boxOne]}>
                        <TouchableOpacity onPress={() => this.reset('Explore')} ><Text>Fashion</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.box, styles.boxTwo]}>
                        <TouchableOpacity onPress={() => this.handleScrollPress('Beauty')}><Text>Beauty</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.box, styles.boxThree]}>
                        <TouchableOpacity onPress={() => this.handleScrollPress('Health')}><Text>Health</Text></TouchableOpacity>
                    </View>


                    <View style={[styles.box, styles.boxFour]}>
                        <TouchableOpacity onPress={() => this.handleScrollPress('Sports')}><Text>Sports</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.box, styles.boxFive]}>
                        <TouchableOpacity onPress={() => this.handleScrollPress('Electronics')}><Text>Electronics</Text></TouchableOpacity>
                    </View>
                    <View style={[styles.box, styles.boxSix]}>
                        <TouchableOpacity onPress={() => this.handleScrollPress('Groceries')}><Text>Groceries</Text></TouchableOpacity>
                    </View>


                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
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