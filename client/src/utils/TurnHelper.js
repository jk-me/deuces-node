//returns play type ('single', etc) or true when last play empty
//only called for valid number of cards (or last play empty)
const checkValidTurn = (sel, last) =>{
  const nums = this.nums
  const suits = this.suits

  const l = {vals: last.cards.map(c => c.value ), suits: last.cards.map(c => c.suit)}
  const s = {vals: sel.map(c => c.value ), suits: sel.map(c => c.suit)}

  if (sel.length === 1){
    if (nums.indexOf(s.vals[0]) > nums.indexOf(l.vals[0]))
      {return 'single'}
    else if (nums.indexOf(s.vals[0]) === nums.indexOf(l.vals[0])){
      if (suits.indexOf(s.suits[0]) > suits.indexOf(l.suits[0]))
        {return 'single'}
    }
  }

  else if (sel.length === 2){
    if (s.vals[0] === s.vals[1]){
      if (nums.indexOf(s.vals[0]) > nums.indexOf(l.vals[0]))
        {return 'pair'}
      else if (s.vals[0] === l.vals[0]){
        if ((s.suits.includes('HEARTS') && !l.suits.includes('SPADES')) || s.suits.includes('SPADES'))
          {return 'pair'}
      }
    }
  }

  else if (sel.length === 3){
    if (s.vals[0] === s.vals[1] && s.vals[2] === s.vals[1]){
      if (nums.indexOf(s.vals[0])>nums.indexOf(l.vals[0]))
        {return '3ofkind'}
    }
  }

  else if (sel.length === 4){
    if (s.vals[0] === s.vals[1] && s.vals[2] === s.vals[1] && s.vals[3] === s.vals[1]){
      if ( nums.indexOf(s.vals[0]) > nums.indexOf(l.vals[0]) )
        { return '4ofkind' }
    }
  }

  else if (sel.length === 5){
    const types = ['straight', 'flush', 'full house', 'bomb', 'straight flush']

    let sSort = sel.sort(function(a,b) {return nums.indexOf(a.value) - nums.indexOf(b.value)} )
    const sPlayType = this.fiveCardPlayType(sSort)

    if (types.indexOf(sPlayType) > types.indexOf(last.play))
      {return sPlayType}

    else if (types.indexOf(sPlayType) === types.indexOf(last.play)){
      // debugger
      if (sPlayType === 'straight' || sPlayType === 'straight flush') {
        if (nums.indexOf(sSort[4].value) > nums.indexOf(last.cards[4].value) )
          {return sPlayType}
        else if (nums.indexOf(sSort[4].value) === nums.indexOf(last.cards[4].value) ){
          if (suits.indexOf(sSort[4].suit) > suits.indexOf(last.cards[4].suit))
            {return sPlayType}
        }
      }

      else if (sPlayType === 'flush'){
        if (suits.indexOf(sSort[4].suit) > suits.indexOf(last.cards[4].suit))
          {return sPlayType}
        else if (suits.indexOf(sSort[4].suit) === suits.indexOf(last.cards[4].suit)) {

            if (nums.indexOf(sSort[4].value) > nums.indexOf(last.cards[4].value) )
            {return sPlayType}
        }
      }

      else if (sPlayType === 'bomb' || sPlayType === 'full house'){
        if (nums.indexOf(sSort[2].value) > nums.indexOf(last.cards[2].value) )
          {return sPlayType}
      }

    }
  }
}

const fiveCardPlayType = (s) =>{  //returns 'straight', 'flush', etc
  const sSplit = {vals: s.map(c => c.value ), suits: s.map(c => c.suit)}
  const nums = this.nums

  let straight =[]
  for (let i=0; i<4; i++){ straight.push(nums.indexOf(sSplit.vals[i])+1 === (nums.indexOf(sSplit.vals[i+1])) ) }

  if ((s[0].value === s[2].value && s[3].value === s[4].value) ||
      (s[2].value === s[4].value && s[0].value === s[1].value))
    {return 'full house'}    //sorted by value, has triple and double
  else if (s[0].value === s[3].value || s[1].value === s[4].value)
    {return 'bomb'}     //sorted by value, 4 cards in a row have same value
  else if ((sSplit.suits).every( (el, i, arr) => el === arr[0])){
    if (straight.every( ele => ele === true))
      {return 'straight flush'}
    else
      {return 'flush'}
  }
  else if (straight.every( ele => ele === true))
    {return 'straight'}
}

export {checkValidTurn}
