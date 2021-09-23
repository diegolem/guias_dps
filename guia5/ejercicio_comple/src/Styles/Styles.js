import { StyleSheet } from "react-native";

const FormsStyle = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 8,
        marginRight: 8
    },
    textInput: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    input: {
        height: 40,
        marginTop: 12,
        marginBottom: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: '#082032',
        fontSize: 16,
        borderRadius: 8
    },
    responseView: {
        margin: 20
    },
    responseText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});

const ButtonsStyle = StyleSheet.create({
    appButtonContainer: {
        marginTop: 8,
        backgroundColor: "#2C394B",
        borderRadius: 8,
        height: 44,
        flex: 1,
        justifyContent: 'center',
    },
    appButtonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
    }
});

export { FormsStyle, ButtonsStyle };