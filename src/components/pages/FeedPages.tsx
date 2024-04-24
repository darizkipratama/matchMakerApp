import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Swiper from "react-native-deck-swiper";

const FeedPages = () => {
    return(
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Swiper
              cards={['DO', 'MORE', 'OF', 'WHAT', 'MAKES', 'YOU', 'HAPPY']}
              renderCard={(card) => {
                  return (
                      <View style={styles.card}>
                          <Text style={styles.text}>{card}</Text>
                      </View>
                  )
              }}
              onSwiped={(cardIndex) => {console.log(cardIndex)}}
              onSwipedAll={() => {console.log('onSwipedAll')}}
              cardIndex={0}
              backgroundColor={'#4FD0E9'}
              stackSize= {3}>
              <Button
                  onPress={() => {console.log('oulala')}}
                  title="Refresh">
                  You can press me
              </Button>
          </Swiper>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#E8E8E8',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    backgroundColor: 'transparent'
  }
});

export default FeedPages;