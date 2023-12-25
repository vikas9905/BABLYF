/*eslint-disable*/
import React from 'react';
import { StyleSheet, View, Text,Dimensions, FlatList,ScrollView, TouchableOpacity} from 'react-native';
import PagerView from 'react-native-pager-view';
import Container from '../container/container';
import { Environment } from '../../environment';
import { Button } from '@rneui/themed';
import Header from '../components/header';
import {AirbnbRating,Image,Skeleton} from '@rneui/themed';
import { ListProduct } from '../components/listProducts';
import { scale } from 'react-native-size-matters';
import { CartItem } from '../components/cartList';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Divider } from "@react-native-material/core";


const base_url =Environment.BASE_URL;
export default OrderConfiramtion = ({navigation,route}) => {
    console.log("status in payment verification>>",route)
    const {payment_status} = route.params
  return (
    <>
    <Header name="Payment" icon="arrow-back" navigation={navigation} />
    <ScrollView style={styles.container} >
       <View>
        <Text>{payment_status? 'Payment is success' : 'Payment is Failed'}</Text>
       </View>
    </ScrollView>
    <View style={{flexDirection:'row',alignItems:'center',bottom:10,backgroundColor:'#fff',paddingLeft:10,paddingRight:10,paddingHorizontal:scale(20)}}>
            <Button  title="BUY ₹300"  loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: '#6E3CBC',
                borderRadius: 0,
              }}
              titleStyle={{ color: 'white', marginHorizontal: 30 }}
              containerStyle={{
                height: 45,
                width: '100%',
                backgroundColor:'#6E3CBC'
              }} onPress={()=>console.log("BUY")} />
              
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  pagerView: {
   height: 300
  },
  buy_sell: {
    position: 'absolute',
    bottom:0,
    left:0,
   },
   container:{
    flex:1,
    paddingHorizontal:scale(20)
   }
});