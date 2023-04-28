import React from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

const Card = () => {
  const loc = '5 allée de la Brèche aux loups, Ozoir la Ferrière, 77330';
  return (
    <View style={[styles.card, {elevation: 10, shadowColor: 'red'}]}>
      <View>
        <Text style={styles.heading}>Garde 24H</Text>
        <View
          style={{backgroundColor: 'red', borderRadius: 20, height: '10%'}}
        />
      </View>
      {loc.length <= 8 ? (
        <View style={[styles.infos]}>
          <Text> 9H00 - 10H00</Text>
          <Text>Localisation : {loc}</Text>
        </View>
      ) : (
        <View>
          <Text> 9H00 - 10H00</Text>
          <Text>Localisation : {loc}</Text>
        </View>
      )}
    </View>
  );
};

const Card2 = () => {
  const loc = 'Epitech';
  return (
    <View style={[styles.card, {elevation: 10, shadowColor: 'blue'}]}>
      <View>
        <Text style={styles.heading}>Soutenance MyTeams </Text>
        <View
          style={{backgroundColor: 'blue', borderRadius: 20, height: '10%'}}
        />
      </View>
      {loc.length <= 8 ? (
        <View style={[styles.infos]}>
          <Text> 9H00 - 10H00</Text>
          <Text>Localisation : {loc}</Text>
        </View>
      ) : (
        <View>
          <Text> 9H00 - 10H00</Text>
          <Text>Localisation : {loc}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    width: '90%',
    marginVertical: 10,
    marginLeft: 10,
    height: '30%',
  },
  heading: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 13,
    textAlign: 'center',
  },
  infos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: '7%',
  },
});

export {Card, Card2};
