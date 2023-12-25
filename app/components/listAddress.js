import { RadioButton } from "react-native-paper";
import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

export const Address = ({navigation}) =>{
    return (
        <Card>
            <Card.Title>HOME</Card.Title>
            <Card.Divider />
            <View>
                <Text>Vikash Mishra</Text>
                <Text>LANDMARK</Text>
                <Text>Area,state,pincode</Text>
                <Text>Phone: number</Text>
            </View>
        </Card>
    )

}