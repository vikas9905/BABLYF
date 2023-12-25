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
    const [address,setAddress] = useState(0)
    const [addNewAddress,setNewAddress] =useState(false)
    const [savingOrder,setSavingOrder] = useState(false)
    const [paymentdetails,setPaymentDetails] = useState(null);
    const [pymentLoading,setPaymentLoading] = useState(false);
    const product_url = 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg';
    let data = []
    for(let i =0;i<10;i++){
      data.push({id:i+1})
    }
    const orderData = {
        ammount: 12000,
        user_id: 1,
        shipping_charge: 100,
        offer_id: 1
    };
    const [options,setOptions] = useState({
        description: 'Payment at BABLYF for shopping',
        image: 'https://i.imgur.com/3g7nmJC.jpg',
        currency: 'INR',
        key: 'rzp_test_rt6YcqZQT9WoP8',
        amount: 12000,
        name: 'BABLYF',
        order_id: '',//Replace this with an order_id created using Orders API.
        // callback_url: 'order_confirm',
        prefill: {
          email: 'vikas6.7mishra@gmail.com',
          contact: '9142083460',
          name: 'Vikash kumar'
        },
        theme: {color: '#6E3CBC'}
    })
    const saveOrder = async () =>{
        try{
            // const order = await axios.get(`${base_url}${urls.order_service.save_order}`)
            console.log(`${urls.base_url}${urls.order_service.save_order}`)
            const resp = await axios.post(`${urls.base_url}${urls.order_service.save_order}`,orderData)
            const orderDetails = resp.data.data;
            console.log(orderDetails)
            let tmpData = {
                ...options,
                order_id: orderDetails['order_id']
            }
            setOptions(tmpData)
            console.log("resp in order>>",orderDetails['order_id'])
            console.log("options>>",tmpData)
            await checkout(tmpData);
        }catch(e){
            console.log(e)
        }
        
    }
    const saveOrderStatus = async (data) =>{
        try{
            // const order = await axios.get(`${base_url}${urls.order_service.save_order}`)
            console.log(`${urls.base_url}${urls.order_service.verify_payment}`)
            const resp = await axios.post(`${urls.base_url}${urls.order_service.verify_payment}`,data)
            const order = resp.data.data;
            console.log("options>>",resp.data)
            navigation.navigate('order_confirm',order)
        }catch(e){
            console.log(e)
            navigation.navigate('order_confirm',{payment_success:false})
        }finally{
            setPaymentLoading(false);
            setPaymentDetails(null);
        }
        
    }
    const checkout = async (options) =>{
        try{
            setPaymentLoading(true);
            const resp = await RazorpayCheckout.open(options);
            console.log(resp)
            setPaymentDetails(resp)
            await saveOrderStatus({...resp,...options});
        }catch(e){
            navigation.navigate('order_confirm',{payment_success:false})
            console.log(e)
        }finally{
            setPaymentLoading(false);
            setPaymentDetails(null);
        }
    }
    const LeftContent = props => <Avatar.Icon {...props} icon="folder" />
    
    if(pymentLoading) {
        return(
            <BusyIndicator header={false} />
        )
    }
   return (
    <>
        <Header name="Checkout" icon="arrow-back" navigation={navigation} />
        <ScrollView style={styles.container}>

            {
                data.map((item,index)=>{
                    return (
                        <View style={{marginTop:10,paddingHorizontal:15}}>
                            <Card elevation={4} mode="elevated">
                                <Card.Title title="Product Name" subtitle="3 * 100" 
                                left={props => <Image {...props} source={{uri:product_url}} style={{width:40,height:60}}
                                        PlaceholderContent={<Skeleton animation="wave" width={60} height={60} />}
                                />} />
                                
                            </Card>
                        </View>
                    )
                })
            }
            <View style={{paddingHorizontal:15,marginBottom:25,marginTop:10}}>
                   <Card elevation={4} mode="elevated" style={{paddingHorizontal:20}}>
                       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                           <Text>Total :</Text>
                           <Text>1200</Text>
                       </View>
                       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                           <Text>SHIPPING FEE :</Text>
                           <Text>120</Text>
                       </View>
                       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                           <Text>DISCOUNT :</Text>
                           <Text style={{color:'red'}}> - 120</Text>
                       </View>
                       <Divider />
                       <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                           <Text>SUB Total :</Text>
                           <Text>1200</Text>
                       </View>

                   </Card>
               
            </View>
        </ScrollView>
        <View style={{flexDirection:'row',alignItems:'center',bottom:10,backgroundColor:'#fff',paddingLeft:10,paddingRight:10,paddingHorizontal:scale(20)}}>
            <Button  title="CONTINUE"  loading={false}
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
              }} onPress={()=>{saveOrder()}} />
              
        </View>
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