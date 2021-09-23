import React, { useState } from "react";
import { View, Text, Button, TouchableOpacity, Alert, Switch } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { FormsStyle, ButtonsStyle } from "../Styles/Styles.js";
import { ScrollView } from "react-native-gesture-handler";
import shortid from 'shortid';

const Form = ({ route, navigation }) => {
    const { list, setList, saveRegistrationStorage } = route.params;

    const [client, setClient] = useState('');
    const [section, setSection] = useState(false);
    const [date, setDate] = useState('');
    const [hour, setHour] = useState('');
    const [nPersons, setNPersons] = useState(0);

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    }

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    }

    const confirmDate = date => {
        const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
        setDate(date.toLocaleDateString('es-ES', opciones));
        hideDatePicker();
    }

    const showTimePicker = () => {
        setTimePickerVisibility(true);
    }

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    }

    const confirmHour = hour => {
        const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
        setHour(hour.toLocaleString('es-ES', opciones));
        hideTimePicker();
    }

    const saveRegistration = e => {
        if (client.trim() === '' || date.trim() === '' || hour.trim() === '' || Number.isInteger(parseInt(nPersons)) === false) {
            showAlert();
            return;
        } else {
            if (nPersons < 1) {
                showAlert();
                return;
            }
        }

        const regitration = { client, section, date, hour, nPersons };
        regitration.id = shortid.generate();

        const newList = [...list, regitration];
        setList(newList);

        saveRegistrationStorage(JSON.stringify(newList));

        navigation.goBack();
    }

    const showAlert = () => {
        Alert.alert(
            'Error',
            'Porfavor, revisa los datos',
            [
                {
                    text: 'Ok'
                }
            ]
        )
    }

    return (
        <ScrollView>
            <View style={FormsStyle.container}>
                <View>
                    <Text style={FormsStyle.textInput}>Nombre</Text>
                    <TextInput
                        style={FormsStyle.input}
                        onChangeText={setClient}
                        value={client}
                    ></TextInput>
                </View>
                <View>
                    <Text style={FormsStyle.textInput}>Número de personas</Text>
                    <TextInput
                        style={FormsStyle.input}
                        onChangeText={setNPersons}
                        value={nPersons}
                        keyboardType="number-pad"
                    ></TextInput>
                </View>
                <View>
                    <Text style={FormsStyle.textInput}>Area de fumadores</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#297F87" }}
                        thumbColor={section ? "#fff" : "#fff"}
                        onValueChange={setSection}
                        value={section}
                    />
                </View>
                <View>
                    <Text style={FormsStyle.textInput}>Fecha:</Text>
                    <Button title='Seleccionar fecha' onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode='date'
                        onConfirm={confirmDate}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                    />
                    <Text>{date}</Text>
                </View>
                <View>
                    <Text style={FormsStyle.textInput}>Hora:</Text>
                    <Button title='Seleccionar hora' onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode='time'
                        onConfirm={confirmHour}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                    />
                    <Text>{hour}</Text>
                </View>
                <TouchableOpacity
                    style={ButtonsStyle.appButtonContainer}
                    onPress={() => saveRegistration()}
                >
                    <Text style={ButtonsStyle.appButtonText}>Agregar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

export default Form;