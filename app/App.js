import React from 'react';
import {
    AppRegistry,
    Text,
    StatusBar,
    Platform,
    View,
    StyleSheet,
    Image,
    Animated
    
} from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import {Tabs, Drawer} from './config/routes';

const Vesyl = () => (
  //<AlertProvider>
      
      <View style={{ flex: 1 }}>
       
        <StatusBar
          backgroundColor="#fff"
          barStyle="dark-content"
        />
        {Platform.OS == 'ios' ? <Tabs /> : <Drawer />}
      </View>
 // </AlertProvider>
);


//export default App;
AppRegistry.registerComponent('Vesyl', () => Vesyl);












