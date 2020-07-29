import React from 'react'
import Card from '../components/Card'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import {checkValidTurn} from '../utils/TurnHelper'

class Hand extends React.Component{
  state = {
    selected: []
  }

  nums = ['3','4','5','6','7','8','9','10','JACK','QUEEN','KING','ACE','2']
  suits = ['DIAMONDS', 'CLUBS', 'HEARTS', 'SPADES']

  cardClick = (card) =>{
    // console.log(`clicked! ${card.code}`)
    if (this.state.selected.includes(card)){
      this.setState({selected:[...this.state.selected.filter(c => c !== card)]})
    }
    else {
      this.setState({selected:[...this.state.selected, card]})
    }
  }

  checkWin = () =>{
    const {hand, dispatchWin, player, session} = this.props
    if (hand.length === 0){
      dispatchWin(
        { game: {[player]: session[player]+1}}, //hand1: session[hand1]+1
        session.id
      )
    }
  }

  playFn = () => {
    const {selected} = this.state //[...cards]
    const {last_played, dispatchPlay, dispatchError} = this.props  //{play:'single' cards:[...]}

    if ((selected.length === last_played.cards.length) || last_played.cards.length === 0){
      const play = checkValidTurn(selected, last_played)
      if (play){  //if play is true/valid
        this.showHide('play')
        dispatchPlay(selected, this.props.player, play)
        this.setState({selected: []})
        setTimeout(() =>this.checkWin(), 300)
      }
      else{ (dispatchError('Your play is invalid or smaller than the previous play.')) }
    }
    else{ dispatchError('Invalid number of cards played.') }
  }

  passButton = () =>{
    this.props.dispatchPlay([],this.props.player, '')
    this.setState({selected: []})
    this.showHide('pass')
  }

  showHide = (arg) =>{
    let cards = document.getElementsByClassName(this.props.player);
    //card imgs have class="card hand1"
    if (arg === 'play' || arg === 'pass'){
      for (const x of cards){
        x.style.visibility = "";
      }
      return
    }
    this.toggleVisibleImgs(cards)
  }

  toggleVisibleImgs = (imgArr) =>{ //use for show/hide button
    for (const x of imgArr){
      if (x.style.visibility === "") {
        x.style.visibility = "visible";
      } else {
        x.style.visibility = "";
        this.setState({selected: []})
      }
    }
  }

  renderCards = () =>{
    return this.props.hand.map( card => {return <Card card={card} player={this.props.player} clickFn={this.cardClick}/>})
  }

  renderButtons = () =>{
    if (this.props.player === this.props.current){
      return (
        <div>
          <div>
            <ButtonGroup>
              <Button className='button' variant='outline-info' onClick={this.playFn}>
                Play Selected
              </Button>
              <Button className='button' variant='outline-info' onClick={this.showHide}>
                Show/Hide
              </Button>
            </ButtonGroup>
          </div>
          <div>
            <Button className='button' variant='outline-info' onClick={this.passButton}>
              Pass Turn
            </Button>
          </div>
        </div>
      )
    }
  }

  render(){
    return(
      <Col>
          <h4>Player {this.props.player[4]}</h4>
          {this.renderCards()}
          <p>{this.state.selected.map( c => c.code).join(', ')}</p>
          {this.renderButtons()}
      </Col>
    )
  }
}

export default Hand
