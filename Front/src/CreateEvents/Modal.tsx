/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import {convetDateToFrDate} from '../libs/convertUsDateToFrDate';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Button,
  TextInput,
} from 'react-native';

const MyModal = ({modalVisible, setModalVisible}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedHours, setSelectedHours] = useState('00');
  const [selectedMinuts, setSelectedMinuts] = useState('00');
  const [text, setText] = useState('');
  const [inputTitle, setInputTitle] = useState('');
  const [eventType, setEventType] = useState('');

  React.useEffect(() => {
    if (eventType === 'Epitech') {
      setText('14-16 rue Voltaire 94270 Le Kremlin-Bicêtre');
    } else if (eventType === 'Astek') {
      setText('14-16 rue Voltaire 94270 Le Kremlin-Bicêtre');
    } else if (eventType === 'Pompier') {
      setText('5 All. Brèche aux Loups, 77330 Ozoir-la-Ferrière');
    } else if (eventType === 'Autre') {
      setText('...');
    }
  }, [eventType]);

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>Ajouter un evenemnt </Text>
            <View style={{marginBottom: 20}}>
              <Button
                title={
                  date
                    ? convetDateToFrDate(date.toDateString())
                    : 'Selectionner la date'
                }
                onPress={() => setOpen(true)}
              />
            </View>
            <DatePicker
              modal
              mode="date"
              open={open}
              date={date}
              onConfirm={_date => {
                setOpen(false);
                setDate(_date);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />
            <Text>Selectionner l'heure de début</Text>
            <View style={styles.timeContainer}>
              <Picker
                selectedValue={selectedHours}
                style={{width: 90}}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedHours(itemValue)
                }>
                <Picker.Item label="00" value="00" />
                <Picker.Item label="01" value="01" />
                <Picker.Item label="02" value="02" />
                <Picker.Item label="03" value="03" />
                <Picker.Item label="04" value="04" />
                <Picker.Item label="05" value="05" />
                <Picker.Item label="06" value="06" />
                <Picker.Item label="07" value="07" />
                <Picker.Item label="08" value="08" />
                <Picker.Item label="09" value="09" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
                <Picker.Item label="13" value="13" />
                <Picker.Item label="14" value="14" />
                <Picker.Item label="15" value="15" />
                <Picker.Item label="16" value="16" />
                <Picker.Item label="17" value="17" />
                <Picker.Item label="18" value="18" />
                <Picker.Item label="19" value="19" />
                <Picker.Item label="20" value="20" />
                <Picker.Item label="21" value="21" />
                <Picker.Item label="22" value="22" />
                <Picker.Item label="23" value="23" />
                <Picker.Item label="24" value="24" />
              </Picker>
              <Picker
                selectedValue={selectedMinuts}
                mode="dropdown"
                style={{width: 90}}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedMinuts(itemValue)
                }>
                <Picker.Item label="00" value="00" />
                <Picker.Item label="01" value="01" />
                <Picker.Item label="02" value="02" />
                <Picker.Item label="03" value="03" />
                <Picker.Item label="04" value="04" />
                <Picker.Item label="05" value="05" />
                <Picker.Item label="06" value="06" />
                <Picker.Item label="07" value="07" />
                <Picker.Item label="08" value="08" />
                <Picker.Item label="09" value="09" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
              </Picker>
            </View>
            <Text>Selectionner l'heure de fin</Text>
            <View style={styles.timeContainer}>
              <Picker
                selectedValue={selectedHours}
                style={{width: 90}}
                mode="dropdown"
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedHours(itemValue)
                }>
                <Picker.Item label="00" value="00" />
                <Picker.Item label="01" value="01" />
                <Picker.Item label="02" value="02" />
                <Picker.Item label="03" value="03" />
                <Picker.Item label="04" value="04" />
                <Picker.Item label="05" value="05" />
                <Picker.Item label="06" value="06" />
                <Picker.Item label="07" value="07" />
                <Picker.Item label="08" value="08" />
                <Picker.Item label="09" value="09" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
                <Picker.Item label="13" value="13" />
                <Picker.Item label="14" value="14" />
                <Picker.Item label="15" value="15" />
                <Picker.Item label="16" value="16" />
                <Picker.Item label="17" value="17" />
                <Picker.Item label="18" value="18" />
                <Picker.Item label="19" value="19" />
                <Picker.Item label="20" value="20" />
                <Picker.Item label="21" value="21" />
                <Picker.Item label="22" value="22" />
                <Picker.Item label="23" value="23" />
                <Picker.Item label="24" value="24" />
              </Picker>
              <Picker
                selectedValue={selectedMinuts}
                mode="dropdown"
                style={{width: 90}}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedMinuts(itemValue)
                }>
                <Picker.Item label="00" value="00" />
                <Picker.Item label="01" value="01" />
                <Picker.Item label="02" value="02" />
                <Picker.Item label="03" value="03" />
                <Picker.Item label="04" value="04" />
                <Picker.Item label="05" value="05" />
                <Picker.Item label="06" value="06" />
                <Picker.Item label="07" value="07" />
                <Picker.Item label="08" value="08" />
                <Picker.Item label="09" value="09" />
                <Picker.Item label="10" value="10" />
                <Picker.Item label="11" value="11" />
                <Picker.Item label="12" value="12" />
              </Picker>
            </View>
            <Text style={{marginTop: '3%', marginBottom: '2%'}}>
              Entrer le titre :
            </Text>
            <TextInput
              style={{height: 50, borderColor: 'black', borderWidth: 1}}
              placeholder="..."
              onChangeText={newText => setInputTitle(newText)}
              defaultValue={inputTitle}
            />
            <Text style={{marginTop: '3%', marginBottom: '2%'}}>
              Entrer le type d'évenement :
            </Text>
            <Picker
              selectedValue={eventType}
              //   style={{width: 90}}
              mode="dropdown"
              onValueChange={(itemValue, itemIndex) => setEventType(itemValue)}>
              <Picker.Item label="Epitech" value="Epitech" />
              <Picker.Item label="Astek" value="Astek" />
              <Picker.Item label="Pompier" value="Pompier" />
              <Picker.Item label="Autre" value="Autre" />
            </Picker>
            <Text style={{marginTop: '3%', marginBottom: '2%'}}>
              Entrer la localisation :
            </Text>
            <TextInput
              style={{height: 50, borderColor: 'black', borderWidth: 1}}
              placeholder={text}
              onChangeText={newText => setText(newText)}
              defaultValue={text}
            />
            <Pressable
              style={styles.buttonClose}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={styles.textStyle}>Fermer</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingVertical: 50,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    height: '85%',
    width: 370,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
    top: '105%',
    left: '37%',
    width: '50%',
    position: 'absolute',
    borderRadius: 12,
    padding: 10,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timeContainer: {
    flexDirection: 'row',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'center',
  },
});

export default MyModal;
