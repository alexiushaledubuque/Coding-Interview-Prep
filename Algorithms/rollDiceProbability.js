const rollDice = () => {
  let di1 = Math.round(Math.random() * 6),
      di2 = Math.round(Math.random() * 6)
  
  return di1 + di2
}

rollDice()