import React from "react";
import {Modal, StyleSheet, View, TouchableOpacity, Text} from "react-native";
import Header from "./Header";
import {TextInput} from "react-native-paper";

class MyModal extends React.Component {

    state = {
        name: "",
        place: "",
        command: ""
    }

    handleSubmit = () => {
        const { addDeviceFn, toggleModalFn } = this.props;
        addDeviceFn(this.state).then(toggleModalFn);
    }


    render() {
        return (
            <Modal transparent={true} visible={this.props.visible}>
                <View style={styles.modalView}>
                    <Header title={"New device"}/>
                    <View style={styles.inputs}>
                        <TextInput style={styles.input} placeholder={"Name"} onChangeText={(value) => this.setState({name: value})} value={this.state.name}/>
                        <TextInput style={styles.input} placeholder={"Place"} onChangeText={(value) => this.setState({place: value})} value={this.state.place}/>
                        <TextInput style={styles.input} placeholder={"Command"} onChangeText={(value) => this.setState({command: value})} value={this.state.command}/>

                    </View>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap'}}>
                        <TouchableOpacity
                            style={{width: '40%', margin: 12, padding: 24, borderWidth: 1, borderColor: "#000000", textAlign: "center"}}
                            onPress={this.handleSubmit}>

                            <Text style={{textAlign: "center"}}>Save</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{width: '40%', margin: 12, padding: 24, borderWidth: 1, borderColor: "#000000", textAlign: "center"}}
                            onPress={this.props.toggleModalFn}>

                            <Text style={{textAlign: "center"}}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        );
    }
}

const styles = StyleSheet.create({
    modalView: {
        //backgroundColor: "#f2f2f2",
        width: "100%",
        height: "100%",
        position: "absolute",
        flex: 1
    },

    inputs: {
        marginVertical: 25,
        marginHorizontal: 25
    },

    input: {
        marginBottom: 25
    },

    openButton: {
        backgroundColor: "#FF9500",
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
        justifyContent: "center",
    },
})
export default MyModal;