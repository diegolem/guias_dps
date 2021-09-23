import React, { useEffect, useState } from 'react';
import { Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Form from './src/Screens/Form';
import List from './src/Screens/List';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getListStorage = async () => {
      try {
        const listStorage = await AsyncStorage.getItem('registration');
        if (listStorage) {
          setList(JSON.parse(listStorage))
        }
      } catch (error) {
        console.log(error);
      }
    }

    getListStorage();
  }, []);

  const saveRegistrationStorage = async (json) => {
    try {
      await AsyncStorage.setItem('registration', json);
    } catch (error) {
      console.log(error);
    }
  }

  const deleteRegistration = id => {
    const filterList = list.filter(cita => cita.id !== id);
    setList(filterList);
    saveRegistrationStorage(JSON.stringify(filterList));
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        >
          <Stack.Screen name="Reservaciones"
            options={({ navigation, route }) => ({
              headerTitle: <Text>Lista</Text>,
              headerRight: () => (
                <Button
                  onPress={() => {
                    navigation.navigate('Form', {
                      list: list,
                      setList: setList,
                      saveRegistrationStorage: saveRegistrationStorage
                    });
                  }}
                  title="Agregar reservación"
                  color="rgb(75, 101, 135)"
                />
              ),
            })}
          >
            {props => <List {...props} list={list} setList={setList} deleteRegistration={deleteRegistration}></List>}
          </Stack.Screen>
          <Stack.Screen
            name="Form"
            options={{ title: 'Añadir reservación' }}
            component={Form}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
