import * as React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import Header from "../components/Header";
import MyModal from "../components/MyModal";
import {getData, storeData} from "../service/AsyncStorage";

export default class DevicesScreen extends React.Component {

    state = {
        modalEnabled: false,
        devices: [
/*            {
                name: "Lampa",
                place: "Kuchnia",
                command: "toggle light"
            },
            {
                name: "Roleta 1",
                place: "Salon",
                command: "lower the blind"
            },
            {
                name: "Roleta 2",
                place: "Salon",
                command: "raise the blind"
            },
            {
                name: "Zasilanie",
                place: "Piwnica",
                command: "toggle electricity"
            },
            {
                name: "Brama",
                place: "Podwórko",
                command: "toggle gate"
            }*/
        ]
    }

    componentDidMount() {
        getData("devices")
            .then(data => JSON.parse(data))
            .then(devices => this.setState({
                ...this.state,
                devices
            }))
    }

    addDevice = async (device) => {
        return this.setState({
            ...this.state,
            devices: [...this.state.devices, device]
        });
    }

    toggleModal = () => {
        this.setState({
            ...this.state,
            modalEnabled: !this.state.modalEnabled
        })
        storeData("devices", JSON.stringify(this.state.devices));
    }

    render() {
        return (
            <>
                <Header title={"Devices"}/>

                {!this.state.modalEnabled &&
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', marginVertical: 12}}>
                            {this.state.devices.map((device, i) => (
                                <TouchableOpacity key={i} style={{width: '40%', margin: 12, padding: 24, borderWidth: 1, borderColor: "#000000"}}>
                                    <Text style={{fontFamily: "Roboto_400Regular", fontSize: 24, textAlign: "center", fontWeight: "bold"}}>{device.name}</Text>
                                    <Text style={{fontFamily: "Roboto_400Regular", fontSize: 16, textAlign: "center"}}>{device.place}</Text>
                                </TouchableOpacity>
                            ))}
                            <TouchableOpacity style={{width: '40%', margin: 12, padding: 34, borderWidth: 1, borderColor: "#000000"}} onPress={this.toggleModal}>
                                <Text style={{fontFamily: "Roboto_400Regular", fontSize: 24, textAlign: "center"}}>+</Text>
                            </TouchableOpacity>
                    </View>
                }

                {this.state.modalEnabled &&
                    <MyModal toggleModalFn={this.toggleModal} addDeviceFn={this.addDevice}/>
                }
            </>
        );
    }
}