/*eslint-disable*/
import React, {component, useState, useEffect,createRef,useRef } from "react";
import { View, SafeAreaView, FlatList,TouchableOpacity,Pressable,StyleSheet,Dimensions,ScrollView,useCallback,TouchableWithoutFeedback } from "react-native";
import { Card} from "@rneui/base";
import { Image } from '@rneui/themed';
import { useSelector, useDispatch , useStore} from "react-redux";
import {
  Text,
  Stack,
  Button,
  ActivityIndicator,Box,Flex
} from "@react-native-material/core";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Snackbar} from 'react-native-paper';
import { Skeleton } from '@rneui/themed';
import { Rating, AirbnbRating } from '@rneui/themed';
import PagerView from 'react-native-pager-view';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import Carousel from 'react-native-reanimated-carousel';
import { SkeletonComp } from "../components/skelton";
import Container from "../container/container";
import Header from "../components/header";
import { ListProduct } from "../components/listProducts";
const BusyIndicator = ({navigation }) =>{
    let data = []
    for(let i =0;i<20;i++){
      data.push({id:i+1})
    }
    return (
      <>
        <Header name="Home" icon="menu" navigation={navigation} />
          <Container>
            <FlatList
              data={data}
              renderItem={(item) => <SkeletonComp item={item} width={150} height={150}/>}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </Container>
        </>
    )
}
export default Home = ({navigation}) => {
    const {width} = Dimensions.get('window');
    const ImageWidth = (width-30)
    let viewPagerRef =  React.createRef();
    ;
    const dispatch = useDispatch();
    let i = 0;
    setInterval(()=>{
      i = i+1;
      // console.log(i)
      viewPagerRef?.current?.setPage(i)
      if(i>=1){
        i = -1;
      }
    },1000)
    useEffect(()=>{
      
    },[])
      const arr = [
        {id:1},{id:2},{id:3},{id:4},{id:5},{id:6}
      ]

    const product_url = 'https://www.mydesignation.com/wp-content/uploads/2020/08/theyyam-tshirt-mydesignation-image-.jpg';
   return (
    <>
        <Header name="Home" icon="menu" navigation={navigation} />
        <ScrollView style={styles.container}>
          
            <View style={{flex:1,marginTop:-3}}>
            <PagerView style={styles.pagerView} initialPage={0} ref={viewPagerRef}>
                <View key="1">
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{backgroundColor:'pink',width:ImageWidth,height:ImageWidth,marginTop:0}}>
                            <Image source={{uri:product_url}} style={{width:ImageWidth,height:ImageWidth}} />
                        </View>
                    </View>
                </View>
                <View key="2">
                    <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
                        <View style={{backgroundColor:'pink',width:ImageWidth,height:ImageWidth,marginTop:0}}>
                            <Image source={{uri:product_url}} style={{width:ImageWidth,height:ImageWidth}} />
                        </View>
                    </View>
                </View>
            </PagerView>
                {arr.map((item,index)=>{
                    return (<>
                    <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:15}}>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'pink',marginBottom:5}}>Family Pack {index}</Text>
                        <Text style={{fontSize:16,fontWeight:'bold',color:'pink',marginBottom:5}}>View All</Text>
                    </View>
                    <ScrollView horizontal={true} contentContainerStyle={{ flexGrow: 1 }} >
                        <ListProduct navigation={navigation} />
                        <ListProduct navigation={navigation} />
                        <ListProduct navigation={navigation} />
                        <ListProduct navigation={navigation} />
                    </ScrollView>
                    </>)
                })}
            </View>
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