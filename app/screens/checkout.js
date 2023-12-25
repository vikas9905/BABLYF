/*eslint-disable*/
import React, {component, useState, useEffect,createRef,useRef } from "react";
import { View, SafeAreaView, FlatList,TouchableOpacity,Pressable,StyleSheet,Dimensions,ScrollView,useCallback,TouchableWithoutFeedback } from "react-native";
import { } from "@rneui/base";
import { Image } from '@rneui/themed';
import { useSelector, useDispatch , useStore} from "react-redux";
import {
  Text,
  Stack,
  ActivityIndicator,Box,Flex
} from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Snackbar} from 'react-native-paper';
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
import { RadioButton,Card } from "react-native-paper";
import { scale } from 'react-native-size-matters';


const BusyIndicator = ({navigation }) =>{
    let data = []
    for(let i =0;i<20;i++){
      data.push({id:i+1})
    }
    return (
      <>
        <Header name="Home" icon="menu" navigation={navigation} />
          <Container>
            {
                data.map((item,index)=>{
                    return (
                        <>
                            <Address/>
                        </>
                    )
                })
            }
          </Container>
        </>
    )
}
export default Checkout = ({navigation}) => {
    const {width} = Dimensions.get('window');
    const ImageWidth = (width-30)
    let viewPagerRef =  React.createRef();
    const dispatch = useDispatch();
    const [address,setAddress] = useState(0)
    const [addNewAddress,setNewAddress] =useState(false)
    let data = []
    for(let i =0;i<10;i++){
      data.push({id:i+1})
    }
   return (
    <>
        <Header name="Checkout" icon="arrow-back" navigation={navigation} />
        <Container isScrollable={true}>
            <Button type="clear" titleStyle={{color:'#6E3CBC'}} title="Add New Address" onPress={()=>navigation.navigate('address')} />

            {
                data.map((item,index)=>{
                    return (
                        <TouchableOpacity activeOpacity={1}  onPress={()=>setAddress(index)} style={{marginTop:10}}>
                            <RadioButton.Group
                                onValueChange={(newValue) => {setAddress(newValue);}}
                                value={address}
                                
                            >
                                {/* <Card>
                                    <Card.Title>HOME</Card.Title>
                                    <Card.Divider />
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value={index} />
                                        <View style={{marginLeft:15}}>
                                            <Text>Vikash Mishra</Text>
                                            <Text>LANDMARK</Text>
                                            <Text>Area,state,pincode</Text>
                                            <Text>Phone: number</Text>
                                        </View>
                                    </View>
                                    
                                </Card> */}
                                <Card elevation={4} mode="elevated" style={{paddingHorizontal:20}}>
                                    <View style={{flexDirection:'row'}}>
                                        <RadioButton value={index} />
                                        <View style={{marginLeft:15}}>
                                            <Text>Vikash Mishra</Text>
                                            <Text>LANDMARK</Text>
                                            <Text>Area,state,pincode</Text>
                                            <Text>Phone: number</Text>
                                        </View>
                                    </View>
                                </Card>
                            </RadioButton.Group>
                        </TouchableOpacity>
                    )
                })
            }
        </Container>
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
              }} onPress={()=>{navigation.navigate('checkout')}} />
              
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
    flex:1,
    paddingHorizontal:15,
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