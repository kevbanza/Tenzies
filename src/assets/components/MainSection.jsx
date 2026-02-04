import { useState } from 'react'
import { useEffect } from 'react';
import Die from './Die';

function MainSection() {
    let [diceNumberList, setDiceNumberList] =useState([]);

  const [count, setCount] = useState(0)

    useEffect(() =>{
        generateAllNewDice();
    }, [])

  function rollDices(){
    generateAllNewDice();
    console.log('Roll Dices')
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

    console.log('stop change')
    console.log(idValue)
  }

    let numberListLi = diceNumberList.map(die =>{
        console.log(die);
        return (
            <Die key={die.id} value={die.value} dieBoolean={die.isFrozen} id={die.id} stopChange={stopChange} />
        );
    });



  return (
    <>
        <div className="container"> 
              <h1>Tenzies</h1>
              <p>Roll until all dice are the same Click each die to freeze it at its current value beween rolls.</p>
              <div className='row'>
                {numberListLi}
              </div>
              <button className="btn btn-primary mb-2 mt-5" onClick={rollDices}>Roll</button>
        </div>      
    </>
  )
}

export default MainSection
