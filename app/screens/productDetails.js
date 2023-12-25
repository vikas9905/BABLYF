/*eslint-disable*/
import React from 'react';
import { StyleSheet, View, Text,Dimensions, FlatList,ScrollView} from 'react-native';
import PagerView from 'react-native-pager-view';
import Container from '../container/container';
import {ActivityIndicator,TextInput} from '@react-native-material/core';
import { Environment } from '../../environment';
import Header from '../components/header';
import {AirbnbRating,Image,Skeleton,Button} from '@rneui/themed';
import { ListProduct } from '../components/listProducts';
import { scale } from 'react-native-size-matters';
import { Reiviews } from '../components/reviews';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const base_url =Environment.BASE_URL;
export default ProductDetails = ({navigation,pid}) => {
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
    <Header name="Product" icon="arrow-back" navigation={navigation} />
    <ScrollView style={styles.container} >
        {/* <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
            <View style={{backgroundColor:'pink',width:ImageWidth,height:ImageWidth,marginTop:0}}>
                <Image source={{uri:base_url+'/media/products/ttt-removebg-preview.png'}} style={{width:ImageWidth-10,height:ImageWidth-10}} />
            </View>
        </View> */}
        <View style={{flex:1}}>
            <PagerView style={styles.pagerView} initialPage={0}>
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
            <View style={[{marginTop:10}]}>
                <Text>Prodct Name</Text>
                <Text>This is simple product desciption</Text>
                <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'45%',float:'left'}}>
                    <Text style={{color:'#6E3CBC', fontSize:14}}> 44% Off</Text>
                    <Text style={{textDecorationLine: 'line-through', textDecorationStyle: 'solid',fontSize:14}}>1999</Text>
                    <Text style={{fontSize:16,fontWeight:'bold'}}>₹999</Text>
                </View>
                <View style={{flexDirection:'row',width:'40%',alignItems:'center',justifyContent:'space-between'}}>
                    <Button    loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: '#6E3CBC',
                            borderRadius: 100,
                        }}
                        titleStyle={{ color: 'white', marginHorizontal: 30 }}
                        onPress={()=>console.log("BUY")}>
                            <Ionicons name='add' color={'#fff'} size={16} />
                        </Button>
                        <Text>3</Text>
                        <Button  loading={false}
                        loadingProps={{ size: 'small', color: 'white' }}
                        buttonStyle={{
                            backgroundColor: '#6E3CBC',
                            borderRadius: 50,
                        }}
                        titleStyle={{ color: 'white', marginHorizontal: 30 }}
                        onPress={()=>console.log("BUY")}>
                            <AntDesign name='minus' color={'#fff'} size={16} />
                        </Button>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',width:'45%',float:'left',marginTop:3}}>
                    <View style={{alignItems:'flex-start'}}>
                        <AirbnbRating
                        type='star'
                        reviewSize={0}
                        isDisabled={true}
                        defaultRating={3}
                        size={10}
                        starContainerStyle ={{marginTop:-15}}
                        selectedColor='#6E3CBC'
                        />
                    </View>
                    <Text style={{fontSize:16,color:'#6E3CBC'}}> 2431 Ratings</Text>
                </View>
                
            </View>
            <ScrollView contentContainerStyle={{ height: 300}}>
                <View style={{marginTop:10}}>
                    <Text>Reviews</Text>
                    
                </View>
                <FlatList
                    data={data}
                    renderItem={(item) => <Reiviews/>}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                />
                    
            </ScrollView>
            
            <View style={{marginTop:10}}>
                <Text>Recommended Products</Text>
                {arr.map((item,index)=>{
                    return (<>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={{fontSize:16,fontWeight:'bold',color:'pink',marginBottom:5}}>Family Pack {index}</Text>
                            <Text style={{fontSize:16,fontWeight:'bold',color:'pink',marginBottom:5}}>View All</Text>
                        </View>
                        {
                            
                            <ScrollView horizontal={true} contentContainerStyle={{paddingLeft:-35}} >
                                {
                                    data.map((item,index)=>{
                                        return (
                                            <ListProduct navigation={navigation} />
                                        )
                                    })
                                }
                            </ScrollView>
                        }
                        
                    </>)
                })}
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