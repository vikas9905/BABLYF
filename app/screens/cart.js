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
export default Cart = ({navigation}) => {
    const {width} = Dimensions.get('window');
    const ImageWidth = (width-30)
    const product_url = 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg';
    let data = []
    for(let i =0;i<20;i++){
      data.push({id:i+1})
    }
    let arr = [{id:1}]
  return (
    <>
    <Header name="Cart" icon="arrow-back" navigation={navigation} />
    <ScrollView style={styles.container} >
        {/* <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
            <View style={{backgroundColor:'pink',width:ImageWidth,height:ImageWidth,marginTop:0}}>
                <Image source={{uri:base_url+'/media/products/ttt-removebg-preview.png'}} style={{width:ImageWidth-10,height:ImageWidth-10}} />
            </View>
        </View> */}
        <View style={{flex:1}}>
            <View style={{marginTop:10}}>
                <Text>Reviews</Text>
                <FlatList
                data={data}
                renderItem={(item) => <TouchableOpacity onPress={()=>{navigation.navigate('product')}}><CartItem/><Divider/></TouchableOpacity>}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
               />
                
            </View>
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
                width: '50%',
                backgroundColor:'#6E3CBC'
              }} onPress={()=>console.log("BUY")} />
              <Button  title="ADD TO CART"  loading={false}
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: 'pink',
                borderRadius: 0
              }}
              containerStyle={{
                height: 45,
                width: '50%',
                backgroundColor:'pink',
                marginHorizontal:5
              }} onPress={()=>console.log("Buy")} />
              
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