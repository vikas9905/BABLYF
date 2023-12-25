/*eslint-disable*/
import React, {component, useState, useEffect,createRef,useRef } from "react";
import { View, SafeAreaView, FlatList,TouchableOpacity,Pressable,StyleSheet,Dimensions,ScrollView,useCallback,TouchableWithoutFeedback } from "react-native";
import { Image } from '@rneui/themed';
import { useSelector, useDispatch , useStore} from "react-redux";
import {
  Stack,
  ActivityIndicator,Box,Flex
} from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Divider, Snackbar} from 'react-native-paper';
import { Skeleton } from '@rneui/themed';
import { Rating, AirbnbRating, Button } from '@rneui/themed';
import PagerView from 'react-native-pager-view';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import Carousel from 'react-native-reanimated-carousel';
import { SkeletonComp } from "../components/skelton";
import Container from "../container/container";
import Header from "../components/header";
import { ListProduct } from "../components/listProducts";
import { Address } from "../components/listAddress";
import { RadioButton } from "react-native-paper";
import { scale } from 'react-native-size-matters';
import { Avatar, Button as rpButton, Card, Text } from 'react-native-paper';
import axios from 'axios';
import { saveOrder } from "../actions/action";
import { routes, urls } from "../utils/constants";
import {razorpay_key,razorpay_secret} from '@env';
import RazorpayCheckout from 'react-native-razorpay';
import { replacer } from "../utils/utils";
import { BusyIndicator } from "../components/busyIndicator";

export default BillList = ({navigation}) => {
    const {width} = Dimensions.get('window');
    const ImageWidth = (width-30)
    let viewPagerRef =  React.createRef();
    const dispatch = useDispatch();
    
    const product_url = 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg';
    let data = []
    for(let i =0;i<10;i++){
      data.push({id:i+1})
    }
    
   return (
    <>
        <Header name="My Order" icon="arrow-back" navigation={navigation} />
        <ScrollView style={styles.container}>

            {
                data.map((item,index)=>{
                    return (
                        <TouchableOpacity activeOpacity={1}  style={{marginTop:10,paddingHorizontal:15}}>
                            <Card elevation={4} mode="elevated">
                               
                                <Card.Content>
                                    <View style={{flexDirection:'row'}}>
                                        <View>
                                            <Image  source={{uri:product_url}} style={{width:40,height:60}}
                                                PlaceholderContent={<Skeleton animation="wave" width={60} height={60} />}
                                            />
                                            <Button type="clear" containerStyle={{marginLeft:-15,padding:0}} style={{marginLeft:-15}} titleStyle={{color:'#6E3CBC',fontSize:10}} title="Need Help?" onPress={()=>navigation.navigate('help')} />

                                        </View>
                                        
                                        <View style={{marginLeft:10}}>
                                            <View >
                                                <Text>Product Name</Text>
                                                <Text>Status: Awaiting confirmation</Text>
                                                <Text>Delivery: in 3 days</Text>
                                                <Text>₹ 3 * 100 </Text>
                                            </View>
                                        </View>
                                        
                                    </View>
                                   
                                    
                                </Card.Content>
                                <View >
                                    <Divider/>
                                    <Button type="clear"  style={{marginLeft:-15}} titleStyle={{color:'#6E3CBC',fontSize:14}} title="Rate & Review" onPress={()=>navigation.navigate('review')} />
                                                
                                </View>
                                
                            </Card>
                        </TouchableOpacity>
                    )
                })
            }
        </ScrollView>
    </>
   )
};

const styles = StyleSheet.create({
  box:{
    width:120,
    height: 120,
    flex:1
  },
  list: {
    width: '100%',
  },
  fix_at_bottom: {
    position: 'absolute',
    bottom:0,
    left:0,
   },
   container:{
    flex:1
   },
   item:{
    width: '100%',
    height:260,
    flex:1,
    backgroundColor:'pink'
   },
   pagerView: {
    height: 300
   },

})