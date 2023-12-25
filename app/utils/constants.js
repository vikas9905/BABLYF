import Home from "../screens/Home"
import productDetails from "../screens/productDetails"
import Cart from "../screens/cart"
import Login from "../screens/login"
import Checkout from "../screens/checkout"
import Address from "../screens/address"
import BillList from "../screens/billList"
import OrderConfiramtion from "../screens/orderConfirmation"
import OrderList from "../screens/orderList"
import Help from "../screens/help"
import OrderTrack from "../screens/orderTrack"
import Review from "../screens/review"

export const routes ={
    MAIN_STACK: [
        {name: 'Home', component:Home, route:'home'},
        {name: 'ProductDetails', component:productDetails, route:'product'},
        {name: 'Cart', component:Cart, route:'cart'},
        {name: 'Checkout', component:Checkout, route:'checkout'},
        {name: 'Address', component:Address, route:'address'},
        {name: 'BillList', component:BillList, route:'billList'},
        {name: 'OrderConfirmation', component:OrderConfiramtion, route:'order_confirm'},
        {name: 'OrderList', component:OrderList, route:'order_list'},
        {name: 'OrderTrack', component:OrderTrack, route:'order_track'},
        {name: 'Help', component:Help, route:'help'},
        {name: 'Review', component:Review, route:'review'},


    ],
    AUTH_STACK: [
        {name: 'Login', component:Login, route:'login'}
    ]
}

export const urls = {
    base_url: 'http://192.168.0.111:8082/',
    order_service: {
        save_order: 'api/order/save',
        verify_payment: 'api/order/payment/verification'
    }
}

export const properties = {
    razorpay_key:'rzp_test_rt6YcqZQT9WoP8',
    razorpay_secret:'ZOHLHqzm4JWgisStDBltiZnr'
}

export const REVIEWS = [
    'Bad',
    'Good',
    'Very Good',
    'Wow',
    'Amazing',
]