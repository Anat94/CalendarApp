import React, {useState} from 'react';
import {convertUsDateToFrDate} from '../libs/convertUsDateToFrDate';
import {Card, Card2} from './Cards';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
} from 'react-native';

const MyModal = ({modalVisible, setModalVisible, date}) => {
  const [newDate, setDate] = useState(date);
  React.useEffect(() => {
    setDate(convertUsDateToFrDate(date));
  }, [date]);
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
            <SafeAreaView style={styles.container}>
              <ScrollView style={styles.scrollView}>
                <Text style={styles.modalText}>Le {newDate}</Text>
                <View style={styles.cardContainer}>
                  <Card />
                  <Card2 />
                  <Card />
                </View>
              </ScrollView>
            </SafeAreaView>
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
    alignItems: 'center',
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
    // marginTop: '90%',
    top: '110%',
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
  modalText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight - 20,
    backgroundColor: '#ecf0f1',
    borderRadius: 10,
    width: '110%',
  },
  scrollView: {
    marginLeft: 10,
  },
  cardContainer: {
    paddingTop: 20,
    paddingBottom: 20,
  },
});

export default MyModal;
