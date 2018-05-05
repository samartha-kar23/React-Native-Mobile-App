import React, { Component } from 'react';
import { AppRegistry,
    Text,
    StatusBar,
  Platform,
    
    ListView, StyleSheet,
    Image, ScrollView, Dimensions} from 'react-native';
import {  Icon,Label,Button,Content,Container,Input, Card, CardItem, Item, Thumbnail,View, Header,Body,Title,Left,Right,flex} from 'native-base';

import { DrawerNavigator } from 'react-navigation';

var {height, width} = Dimensions.get('window');

class Screen extends Component {
  static navigationOptions={
    title: 'Product Catagories',
  }

  render() {
    //    const { state } = this.props.navigation;
    //    var item = state.params.item;
    return (
      <Container>
      

                <Content style={{backgroundColor:'#fff'}}>
                    
                    
                    
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <Card>
                        <CardItem>
                            <Left>
                              
                                <Body>
                                    <Text>Laptops</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image source={require('../images/laptops.png')}
                              style={{flex: 1, flexDirection: 'row', width:width, height: 350, resizeMode: 'contain', marginHorizontal: 4}}
                              />
                          </CardItem>
                          <CardItem>
                              <Body>
                              <Button transparent
                             // onPress={() => this.props.navigation.navigate('shop')}
                              >
                                  <Text>Proceed</Text>
                              </Button>
                              </Body>
                              
                        </CardItem>
                        </Card>
                         <Card>
                        <CardItem>
                            <Left>
                              
                                <Body>
                                    <Text>Mobiles</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image source={require('../images/mobiles.png')}
                              style={{flex: 1, flexDirection: 'row', width:width, height: 350, resizeMode: 'contain', marginHorizontal: 4}}
                              />
                          </CardItem>
                          <CardItem>
                              <Body>
                              <Button transparent
                             // onPress={() => this.props.navigation.navigate('shop')}
                              >
                                  <Text>Proceed</Text>
                              </Button>
                              </Body>
                              
                        </CardItem>
                        </Card>
                         <Card>
                        <CardItem>
                            <Left>
                              
                                <Body>
                                    <Text>Tablets</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image source={require('../images/tablets.png')}
                              style={{flex: 1, flexDirection: 'row', width:width, height: 350, resizeMode: 'contain', marginHorizontal: 4}}
                              />
                          </CardItem>
                          <CardItem>
                              <Body>
                              <Button transparent
                             // onPress={() => this.props.navigation.navigate('shop')}
                              >
                                  <Text>Proceed</Text>
                              </Button>
                              </Body>
                              
                        </CardItem>
                        </Card>
                         <Card>
                        <CardItem>
                            <Left>
                              
                                <Body>
                                    <Text>Headphones</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image source={require('../images/headphones.png')}
                              style={{flex: 1, flexDirection: 'row', width:width, height: 350, resizeMode: 'contain', marginHorizontal: 4}}
                              />
                          </CardItem>
                          <CardItem>
                              <Body>
                              <Button transparent
                             // onPress={() => this.props.navigation.navigate('shop')}
                              >
                                  <Text>Proceed</Text>
                              </Button>
                              </Body>
                              
                        </CardItem>
                        </Card>
                         <Card>
                        <CardItem>
                            <Left>
                              
                                <Body>
                                    <Text>Speakers</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image source={require('../images/speakers.png')}
                              style={{flex: 1, flexDirection: 'row', width:width, height: 350, resizeMode: 'contain', marginHorizontal: 4}}
                              />
                          </CardItem>
                          <CardItem>
                              <Body>
                              <Button transparent
                             // onPress={() => this.props.navigation.navigate('shop')}
                              >
                                  <Text>Proceed</Text>
                              </Button>
                              </Body>
                              
                        </CardItem>
                        </Card>
                       
                         <Card>
                        <CardItem>
                            <Left>
                              
                                <Body>
                                    <Text>TVs</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image source={require('../images/tv.png')}
                              style={{flex: 1, flexDirection: 'row', width:width, height: 350, resizeMode: 'contain', marginHorizontal: 4}}
                              />
                          </CardItem>
                          <CardItem>
                              <Body>
                              <Button transparent
                             // onPress={() => this.props.navigation.navigate('shop')}
                              >
                                  <Text>Proceed</Text>
                              </Button>
                              </Body>
                              
                        </CardItem>
                        </Card>
                          <Card>
                        <CardItem>
                            <Left>
                              
                                <Body>
                                    <Text>Solid Drives</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image source={require('../images/pendrive.png')}
                              style={{flex: 1, flexDirection: 'row', width:width, height: 350, resizeMode: 'contain', marginHorizontal: 4}}
                              />
                          </CardItem>
                          <CardItem>
                              <Body>
                              <Button transparent
                             // onPress={() => this.props.navigation.navigate('shop')}
                              >
                                  <Text>Proceed</Text>
                              </Button>
                              </Body>
                              
                        </CardItem>
                        </Card>
                        </ScrollView>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                   <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Men</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image source={require('../images/Products/fashion.png')}
                              style={{flex: 1, flexDirection: 'row', width:width, height: 350, resizeMode: 'cover', marginHorizontal: 4  }}
                              />
                          </CardItem>
                          <CardItem>
                              <Body>
                              <Button transparent>
                                  <Text>Proceed</Text>
                              </Button>
                              </Body>
                              
                        </CardItem>
                   </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Women</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image source={require('../images/shoppers.png')}
                              style={{flex: 1, flexDirection: 'row', width:width, height: 350, resizeMode: 'cover', marginHorizontal: 4  }}
                              />
                          </CardItem>
                          <CardItem>
                              <Body>
                              <Button transparent>
                                  <Text>Proceed</Text>
                              </Button>
                              </Body>
                              
                        </CardItem>
                   </Card>
                    <Card >
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>Kids</Text>
                                    <Text note></Text>
                                </Body>
                            </Left>
                          </CardItem>
                          <CardItem cardBody>
                              <Image source={require('../images/kids.png')}
                              style={{flex: 1, flexDirection: 'row', width:width, height: 350, resizeMode: 'contain', marginHorizontal: 4  }}
                              />
                          </CardItem>
                          <CardItem>
                              <Body>
                              <Button transparent>
                                  <Text>Proceed</Text>
                              </Button>
                              </Body>
                              
                        </CardItem>
                   </Card>
                   </ScrollView>
                   </Content>
                </Container>
    );
  }
}



export default Screen;
