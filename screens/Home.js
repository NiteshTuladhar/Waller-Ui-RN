import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import Constants from 'expo-constants';

const Home = () => {

    const featuresData = [
        {
            id: 1,
            icon: icons.reload,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "Top Up"
        },
        {
            id: 2,
            icon: icons.send,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Transfer"
        },
        {
            id: 3,
            icon: icons.internet,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Internet"
        },
        {
            id: 4,
            icon: icons.wallet,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Wallet"
        },
        {
            id: 5,
            icon: icons.bill,
            color: COLORS.yellow,
            backgroundColor: COLORS.lightyellow,
            description: "Bill"
        },
        {
            id: 6,
            icon: icons.game,
            color: COLORS.primary,
            backgroundColor: COLORS.lightGreen,
            description: "Games"
        },
        {
            id: 7,
            icon: icons.phone,
            color: COLORS.red,
            backgroundColor: COLORS.lightRed,
            description: "Mobile Prepaid"
        },
        {
            id: 8,
            icon: icons.more,
            color: COLORS.purple,
            backgroundColor: COLORS.lightpurple,
            description: "More"
        },
    ]

    const specialPromoData = [
        {
            id: 1,
            img: images.promoBanner,
            title: "Bonus Cashback1",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 2,
            img: images.promoBanner1,
            title: "Bonus Cashback2",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 3,
            img: images.promoBanner1,
            title: "Bonus Cashback3",
            description: "Don't miss it. Grab it now!"
        },
        {
            id: 4,
            img: images.promoBanner,
            title: "Bonus Cashback4",
            description: "Don't miss it. Grab it now!"
        },
    ]

    const [features, setFeatures] = useState(featuresData)
    const [promos, setPromos] = useState(specialPromoData)

    function renderHeader () {
        return (
            <View style={{ flexDirection : 'row', marginVertical : SIZES.padding * 2}}>
                <View style={{ flex : 1}}>
                    <Text style={{ ...FONTS.h1 }}>Hello!</Text>
                    <Text style={{ ...FONTS.body2, color: COLORS.gray }}>Nitesh Tuladhar</Text>
                </View>

                <View style={{ alignItems : 'center', justifyContent : 'center'}}>
                     <TouchableOpacity style={{ height: 40, width : 40, justifyContent :'center', alignItems:'center',
                        backgroundColor : COLORS.lightGray
                    
                    }}>
                        <Image 
                        
                            source = {icons.bell}
                            style = {{
                                width : 20,
                                height : 20,
                                tintColor : COLORS.secondary
                            }}
                        />

                        <View style={{
                            position :'absolute',
                            top : 5,
                            right: 5,
                            height: 10,
                            width :10,
                            backgroundColor : COLORS.red,
                            borderRadius : 5
                        }}>


                        </View>
                     </TouchableOpacity>
                </View>
                
            </View>
        )
    }

    function renderBanner(){
        return (
            <View style={{
                height : 120,
                borderRadius : 20,

            }}>
                <Image 
                    source = {images.banner}
                    resizeMode = 'cover'
                    style = {{
                        width : '100%',
                        height : '100%',
                        borderRadius : 20
                    }}
                />
            </View>
        )
    }

    function renderFeatures(){
        const Header = () => (
            <View style ={{ marginBottom : SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h3 }}>Features</Text>
            </View>
        )

        const renderItem = ({ item }) => (
            <TouchableOpacity style={{ marginBottom : SIZES.padding * 2, width :60, alignItems: 'center'}} onPress={()=> console.log(item.description)}>
                <View style={{
                    height: 50,
                    width: 50,
                    marginBottom : 5,
                    borderRadius :20,
                    backgroundColor : item.backgroundColor,
                    alignItems : 'center',
                    justifyContent : 'center'
                }}>
                    <Image 
                        source = {item.icon}
                        resizeMode  = 'contain'
                        style = {{
                            height: 20,
                            width: 20,
                            tintColor: item.color
                        }}
                    />
                </View>
                <Text style={{ textAlign : 'center', flexWrap:'wrap', ...FONTS.body4}}>{item.description}</Text>
            </TouchableOpacity>
        )
        return (
            <FlatList 
                ListHeaderComponent = {Header}
                data = {features}
                numColumns  = {4}
                columnWrapperStyle = {{ justifyContent : 'space-between'}}
                keyExtractor = {item => `${item.id}`}
                renderItem = {renderItem}
                style = {{ marginTop: SIZES.padding * 2 }}

            />
        )
    }

    function renderPromoHeader () {
        return(
            <View style={{ flexDirection : 'row', marginBottom : SIZES.padding}}>
                <View style={{ flex : 1}}>
                    <Text style={{ ...FONTS.h3}}>Special Promos</Text>
                </View>
                <TouchableOpacity onPress={()=> console.log('view all')}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body4}}>View All</Text>
                </TouchableOpacity>
            </View>
        )
    }

    function renderFeaturesViewMore () {
        return (
            <TouchableOpacity style={{ display:'flex', alignItems:'center', justifyContent:'center'}}>
                <View style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 35,
                    width : 120,
                    borderRadius : 35,
                    marginBottom: SIZES.padding *2 ,
                    backgroundColor : COLORS.lightGreen
                }}>
                    <View style={{ display:'flex', flexDirection:'row',alignItems: 'center', justifyContent:'space-between'}}>
                        <Text style={{ color: COLORS.green, marginRight: 5}}>View More</Text>
                        <Image source={icons.down} resizeMode='contain' style={{ height: 10, width: 10, tintColor:COLORS.green}} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    function renderPromos(){

        const HeaderComponent = () => (
            <View>
                {renderHeader()}
                {renderBanner()}
                {renderFeatures()}
                {renderFeaturesViewMore()}
                {renderPromoHeader()}
            </View>
        )
        
        const renderItem = ({ item }) =>(
            <TouchableOpacity
                style = {{
                    marginVertical : SIZES.base,
                    width: SIZES.width /2.5
                    }}
                onPress = {() => console.log(item.title)}
            >
                <View 
                    style={{
                        height:80,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        backgroundColor : COLORS.primary
                    }}
                >
                    <Image
                         source = {images.promoBanner}
                         resizeMode = 'cover'
                         style = {{
                             width : '100%',
                             height: '100%',
                             borderTopLeftRadius : 20,
                             borderTopRightRadius: 20,
                         }}        
                    />
                </View>

                <View
                    style={{ 
                        padding : SIZES.padding,
                        backgroundColor : COLORS.lightGray,
                        borderBottomLeftRadius : 20,
                        borderBottomRightRadius : 20
                    }}
                >
                    <Text style={[styles.promoText,{ ...FONTS.h5 }]}>{item.title}</Text>
                    <Text style={{ ...FONTS.body5 }}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        )

        return (

            <FlatList 
                ListHeaderComponent = {HeaderComponent}
                contentContainerStyle = {{ paddingHorizontal : SIZES.padding * 3}}
                numColumns = {2}
                columnWrapperStyle = {{ justifyContent: 'space-between' }}
                data = {promos}
                keyExtractor = { item => `${item.id}`}
                renderItem = {renderItem}
                showsVerticalScrollIndicator = {false}
                style = {styles.promoList}
            />
        )
    }

    return (
        <SafeAreaView style={[styles.container,{ flex: 1, backgroundColor: COLORS.white }]}>
            {renderPromos()}
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container : {
        paddingTop: Constants.statusBarHeight
    },
    promoText : {
        fontWeight: 'bold',
    },
    promoList :{
        marginBottom : 30
    }

})
