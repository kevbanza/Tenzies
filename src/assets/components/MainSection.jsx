import { useRef, useState } from 'react'
import { useEffect } from 'react';
import Die from './Die';
import Confetti from 'react-confetti';

function MainSection() {
    let [diceNumberList, setDiceNumberList] =useState([]);
    const [count, setCount] = useState(0)
    let goToNewGame = useRef(null);
    const isWon = diceNumberList.every(die=>die.isFrozen) && diceNumberList.every(die=>die.value === diceNumberList[0].value);

    useEffect(() =>{
        generateAllNewDice();
    }, [])

    useEffect(() => {
      if (isWon && goToNewGame.current) {
        goToNewGame.current.focus();
      }
    }, [isWon]);
    
  function rollDices(){
    setDiceNumberList(prevList => {
      return prevList.map(die => {
            return { ...die, value: die.isFrozen? die.value : Math.floor(Math.random() * 6) + 1 };
      })
    });

  }

  function generateAllNewDice(){
    let listOfNumber = [];
    for(let i=0; i<10; i++){
        listOfNumber.push({
            id: crypto.randomUUID(),
            value: Math.floor(Math.random() * 6) + 1,
            isFrozen: false,
        });
    }
    setDiceNumberList(listOfNumber);
    
  }

  function stopChange(idValue){
    setDiceNumberList(prevList => {
      return prevList.map(die => {
        if (die.id === idValue) {
            return { ...die, isFrozen: !die.isFrozen };
        }
        return die;
      })
    });
  }

    let numberListLi = diceNumberList.map(die =>{
        return (
            <Die key={die.id} value={die.value} dieBoolean={die.isFrozen} id={die.id} stopChange={stopChange} />
        );
    });



  return (
    <>
        <div className="container"> 
              {isWon && <Confetti />}
              <h1>Tenzies</h1>
              <p>Roll until all dice are the same Click each die to freeze it at its current value beween rolls.</p>
              <div className='row'>
                {numberListLi}
              </div>
              {isWon ?
                <button className="btn btn-primary mb-2 mt-5" onClick={generateAllNewDice} ref={goToNewGame}>New Game</button> :
              
              <button className="btn btn-primary mb-2 mt-5" onClick={rollDices}>Roll</button>
              }
        </div>      
    </>
  )
}

export default MainSection
