import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "../../src/pages/Profile/Profile";
import CommunityProfile from "../../src/pages/CommunityProfile/CommunityProfile";
import HomeScreen from '../../src/pages/Home';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';


const Tab = createBottomTabNavigator();


import News from "../../src/mocks/News"

const Home = () => {
    return (
        <HomeScreen {...News} />
    )
}




export default function () {
    return (
        <Tab.Navigator
            initialRouteName={'Profile'}
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: '#048C7C',
                tabBarInactiveTintColor:'#BFD5CF',
                tabBarStyle: {
                    backgroundColor: '#BFD5CF',
                    height: '75px',
                    position: 'absolute'
                }
            }}
        >
            <Tab.Screen
                name="Perfil"
                component={Profile}
                options={{
                    tabBarIcon: ({ focused = true, color, size }: any) => {
                        let iconName = focused ? 'person' : 'person-outline'
                        if (focused) {
                            return (
                                <View style={styles.iconActive}>
                                    <Ionicons name={iconName} color={color} size={25} />
                                </View>)
                        } else {
                            return (
                                <View style={styles.iconInactive}>
                                    <Ionicons name={iconName} color={color} size={25} />
                                </View>
                            )
                        }
                    },
                }}
            />
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ focused = true, color, size }: any) => {
                        let iconName = focused ? 'home' : 'home-outline'
                        if (focused) {
                            return (
                                <View style={styles.iconActive}>
                                    <Ionicons name={iconName} color={color} size={25} />
                                </View>)
                        } else {
                            return (
                                <View style={styles.iconInactive}>
                                    <Ionicons name={iconName} color={color} size={25} />
                                </View>
                            )
                        }
                    }
                }
                }
            />
            <Tab.Screen
                name="Perfil de Comunidade"
                component={CommunityProfile}
                options={{
                    tabBarIcon: ({ focused = true, color, size }: any) => {
                        let iconName = focused ? 'grid' : 'grid-outline'
                        if (focused) {
                            return (
                                <View style={styles.iconActive}>
                                    <Ionicons name={iconName} color={color} size={25} />
                                </View>)
                        } else {
                            return (
                                <View style={styles.iconInactive}>
                                    <Ionicons name={iconName} color={color} size={25} />
                                </View>
                            )
                        }
                    }
                }
                }
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    iconInactive: {
        borderRadius: 50,
        backgroundColor: '#048C7C',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconActive: {
        borderRadius: 50,
        borderColor: '#048C7C',
        borderWidth: 2,
        backgroundColor:'#BFD5CF',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
})