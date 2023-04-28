import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import MyModal from './Modal/modal';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CreateEvent from './CreateEvents/Modal';

LocaleConfig.locales.fr = {
  monthNames: [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ],
  monthNamesShort: [
    'Janv.',
    'Févr.',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juil.',
    'Août',
    'Sept.',
    'Oct.',
    'Nov.',
    'Déc.',
  ],
  dayNames: [
    'Dimanche',
    'Lundi',
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
  ],
  dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
  today: "Aujourd'hui",
};

LocaleConfig.defaultLocale = 'fr';

function CalendarScreen() {
  const [selected, setSelected] = React.useState('');
  const [modalVisible, setModalVisible] = React.useState(false);
  const [createModal, setCreateModal] = React.useState(false);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Calendar
        style={{
          height: 390,
          width: 390,
        }}
        onDayPress={day => {
          console.log('selected day', day);
          setSelected(day.dateString);
          setModalVisible(true);
        }}
        markedDates={{
          '2023-04-25': {selected: true, marked: true, selectedColor: 'blue'},
          '2023-04-21': {marked: true},
          '2023-04-27': {selected: true, marked: true, selectedColor: 'orange'},
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'red',
          },
        }}
      />
      {modalVisible && (
        <MyModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          date={selected}
        />
      )}
      <View style={styles.addButton}>
        <Icon
          style={styles.addIcon}
          name="plus"
          size={40}
          color="white"
          onPress={() => {
            console.log('You tapped the button!');
            setCreateModal(true);
          }}
        />
      </View>
      {createModal && (
        <CreateEvent
          modalVisible={createModal}
          setModalVisible={setCreateModal}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: '2%',
    right: '2%',
    width: 50,
    height: 50,
    borderRadius: 100,
    backgroundColor: 'blue',
  },
  addIcon: {
    position: 'absolute',
    right: 10,
    bottom: 4,
  },
});

export default CalendarScreen;
