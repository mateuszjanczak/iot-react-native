import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DevicesScreen from "./screens/DevicesScreen";
import ConnectionScreen from "./screens/ConnectionScreen";

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Devices') {
                            iconName = focused ? 'ios-grid-outline' : 'ios-grid-outline';
                        } else if (route.name === 'Connection') {
                            iconName = focused ? 'ios-bluetooth-outline' : 'ios-bluetooth-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="Devices" component={DevicesScreen} />
                <Tab.Screen name="Connection" component={ConnectionScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
