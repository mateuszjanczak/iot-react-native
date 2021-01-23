import * as React from 'react';
import {Text, View} from "react-native";
import Header from "../components/Header";

export default function DevicesScreen() {
    return (
        <>
            <Header title={"Devices"} />
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Devices!</Text>
            </View>
        </>
    );
}