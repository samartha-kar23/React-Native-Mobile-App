import React, { Component } from 'react';
import { Text, AsyncStorage, Alert, View } from 'react-native';
import {Spinner} from 'native-base';
import Container from '../components/Container';

class Screen extends Component {
    static navigationOptions = {
        title: 'Logout',
    }

    async componentWillMount() {
        try {
            const value = await AsyncStorage.removeItem('user_id');
            const username = await AsyncStorage.removeItem('username');
            if (value == null && username == null) {
                // We have data!!
                Alert.alert('Logging out...')
            }
            else Alert.alert('we have value')
        } catch (error) {
                Alert.alert('error while logging out');
        }
        this.props.navigation.navigate('Home')

    }

    render() {

        return (
           <View style={{alignContent:'center',justifyContent:'center'}}>
               <Spinner/>
           </View>
        );
    }
}

export default Screen;
