import React, { useState } from 'react';
import { Button, FlatList, Text } from 'react-native';


function App() {

  const cardArr = ['🂠', '🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂸', '🂩', '🂪', '🂫', '🂬', '🂭', '🂮', '🂱', '🂲', '🂳', '🂴', '🂵', '🂷', '🂸', '🂹', '🂺', '🂻', '🂼', '🂼', '🃁', '🃂', '🃃', '🃄', '🃅', '🃆', '🃇', '🃉', '🃊', '🃋', '🃌', '🃍', '🃎', '🃑', '🃒', '🃓', '🃔', '🃕', '🃖', '🃗', '🃘', '🃙', '🃚', '🃛', '🃜', '🃝', '🃞', '🃟'];

  const [cards, setCards] = useState([
    ['🂡 ', '🂡 ', '🂡']
  ]);

  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const newCard = () => {
    let randomNumber = getRandomInt(0, cardArr.length);
    return (cardArr[randomNumber] + ' ');
  }

  const buttonDown = (cards) => {
    let newCardArr = [];
    for (let i = 0; i < 3; i++) {
      newCardArr.push(newCard());
    }
    console.log(newCardArr);
    setCards([...newCardArr]);
  }


  return (
 
    <Text className="App" style={{ fontSize: 96 }}>
      <Text className="App-header">
        SLOTS
      </Text>

      <Text>
        {cards}
      </Text>

      <Button style={{ fontSize: 96 }} title="Start Spinning" onPress={buttonDown}>start spinning</Button>


    </Text>
  );
}

export default App;