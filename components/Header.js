import {StatusBar, StyleSheet, Text, View} from "react-native";
import * as React from "react";

class Header extends React.Component {

    render() {
        let {title} = this.props;
        return (
            <>
                <View style={styles.header}>
                    <StatusBar style="auto"/>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        paddingVertical: 8,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 8,
        borderBottomColor: 'black',
        borderBottomWidth: 1
    },

    headerButton: {
        flex: 1
    },

    headerText: {
        flex: 1,
        textAlign: "center",
        fontFamily: "Roboto_400Regular",
        fontSize: 24,
        fontWeight: "bold"
    }
});

export default Header;