import React, { Component } from 'react'
import $ from 'jquery'

export default class OptionsPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ...this.props.uberstate,
      timerDone: false,
      showResults: false
    }
  }

  firstDisable = () => {
    if (this.props.uberstate.chosenTurtle === 'Inky' && !this.props.uberstate.raceStarted) {
      return false;
    } else {
      return true;
    }
  }

  secondDisable = () => {
    if (this.props.uberstate.chosenTurtle === 'Blinky' && !this.props.uberstate.raceStarted) {
      return false;
    } else {
      return true;
    }
  }

  thirdDisable = () => {
    if (this.props.uberstate.chosenTurtle === 'Pinky' && !this.props.uberstate.raceStarted) {
      return false;
    } else {
      return true;
    }
  }

  fourthDisable = () => {
    if (this.props.uberstate.chosenTurtle === 'Clyde' && !this.props.uberstate.raceStarted) {
      return false;
    } else {
      return true;
    }
  }

  render() {

    const state = this.props.uberstate
    let turtle = this.props.uberstate.chosenTurtle
    
    let winOrLose = ''
    if (!turtle) {
      winOrLose = <div className='WoL' id='WoL-none'>No Turtle Selected</div>
    } else if (state.showResults && state.winner) {
      winOrLose = <div className='WoL' id='WoL-win'>You Win!</div>
    } else if (state.showResults && !state.winner) {
      winOrLose = <div className='WoL' id='WoL-lose'>You Lose</div>
    } else if ((turtle === 'Inky' && state.InkyBet === 0) || (turtle === 'Blinky' && state.BlinkyBet === 0) || (turtle === 'Pinky' && state.PinkyBet === 0) || (turtle === 'Clyde' && state.ClydeBet === 0)) {
      winOrLose = <div className='WoL' id='WoL-no-bet'>No Bet</div>
    }
    
    let result1HTML = ''
    if (state.timeValue1 !== 0) {
      result1HTML =
        <div className='turtle-results' id='turtle-result1'>
          <div className='turtle-results-place' id='turtle-result1-place'>
            <span>First:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result1-name'>
            <span>{state.raceResults[0].name}</span>
          </div>
          <div className='turtle-results-time' id='turtle-result1-time'>
            <span>{state.timeValue1} s</span>
          </div>
        </div>
    } else {
      result1HTML =
        <div className='turtle-results' id='turtle-result1'>
          <div className='turtle-results-place' id='turtle-result1-place'>
            <span>First:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result1-name'>
            <span></span>
          </div>
          <div className='turtle-results-time' id='turtle-result1-time'>
            <span></span>
          </div>
        </div>
    }

    let result2HTML = ''
    if (state.timeValue2 !== 0) {
      result2HTML =
        <div className='turtle-results' id='turtle-result2'>
          <div className='turtle-results-place' id='turtle-result2-place'>
            <span>Second:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result2-name'>
            <span>{state.raceResults[1].name}</span>
          </div>
          <div className='turtle-results-time' id='turtle-result2-time'>
            <span>{state.timeValue2} s</span>
          </div>
        </div>
    } else {
      result2HTML =
        <div className='turtle-results' id='turtle-result2'>
          <div className='turtle-results-place' id='turtle-result2-place'>
            <span>Second:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result2-name'>
            <span></span>
          </div>
          <div className='turtle-results-time' id='turtle-result2-time'>
            <span></span>
          </div>
        </div>
    }

    let result3HTML = ''
    if (state.timeValue3 !== 0) {
      result3HTML =
        <div className='turtle-results' id='turtle-result3'>
          <div className='turtle-results-place' id='turtle-result3-place'>
            <span>Third:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result3-name'>
            <span>{state.raceResults[2].name}</span>
          </div>
          <div className='turtle-results-time' id='turtle-result3-time'>
            <span>{state.timeValue3} s</span>
          </div>
        </div>
    } else {
      result3HTML =
      <div className='turtle-results' id='turtle-result3'>
        <div className='turtle-results-place' id='turtle-result3-place'>
          <span>Third:</span>
        </div>
        <div className='turtle-results-name' id='turtle-result3-name'>
          <span></span>
        </div>
        <div className='turtle-results-time' id='turtle-result3-time'>
          <span></span>
        </div>
      </div>
    }

    let result4HTML = ''
    if (state.timeValue4 !== 0) {
      result4HTML =
        <div className='turtle-results' id='turtle-result4'>
          <div className='turtle-results-place' id='turtle-result4-place'>
            <span>Fourth:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result4-name'>
            <span>{state.raceResults[3].name}</span>
          </div>
          <div className='turtle-results-time' id='turtle-result4-time'>
          <span>{state.timeValue4} s</span>
          </div>
        </div>
    } else {
      result4HTML =
        <div className='turtle-results' id='turtle-result4'>
          <div className='turtle-results-place' id='turtle-result4-place'>
            <span>Fourth:</span>
          </div>
          <div className='turtle-results-name' id='turtle-result4-name'>
            <span></span>
          </div>
          <div className='turtle-results-time' id='turtle-result4-time'>
          <span></span>
          </div>
        </div>
    }

    let startStopButton = ''
    if (state.raceStarted === false) {
      startStopButton = <button id='start-button' onClick={() => {this.props.startRace()}}>start</button>
    } else {
      startStopButton = <button id='restart-button' disabled={!state.showResults} onClick={() => {this.props.restartRace()}}>restart and select new turtle</button>
    }

    setTimeout(() => {
      this.setState({
        showResults: true,
        timerDone: true
      })
    }, 3000)

    if (state.InkyBet !== 0) {
      $('#odds-turtle1-win').css({ 'color': 'green' })
      $('#odds-turtle1-lose').css({ 'color': 'red' })
    } else {
      $('#odds-turtle1-win').css({ 'color': 'white' })
      $('#odds-turtle1-lose').css({ 'color': 'white' })
    }

    if (state.BlinkyBet !== 0) {
      $('#odds-turtle2-win').css({ 'color': 'green' })
      $('#odds-turtle2-lose').css({ 'color': 'red' })
    } else {
      $('#odds-turtle2-win').css({ 'color': 'white' })
      $('#odds-turtle2-lose').css({ 'color': 'white' })
    }

    if (state.PinkyBet !== 0) {
      $('#odds-turtle3-win').css({ 'color': 'green' })
      $('#odds-turtle3-lose').css({ 'color': 'red' })
    } else {
      $('#odds-turtle3-win').css({ 'color': 'white' })
      $('#odds-turtle3-lose').css({ 'color': 'white' })
    }

    if (state.ClydeBet !== 0) {
      $('#odds-turtle4-win').css({ 'color': 'green' })
      $('#odds-turtle4-lose').css({ 'color': 'red' })
    } else {
      $('#odds-turtle4-win').css({ 'color': 'white' })
      $('#odds-turtle4-lose').css({ 'color': 'white' })
    }
    
    if (state.timeValue1 !== 0 && state.raceResults[0].name === 'Inky' && state.chosenTurtle === 'Inky') {
      $('#turtle-result1').css({'background-color': 'blue'})
      $('#turtle-result1').css({'color': 'white'})
    } else if (state.timeValue1 !== 0 && state.raceResults[0].name === 'Blinky' && state.chosenTurtle === 'Blinky') {
      $('#turtle-result1').css({'background-color': 'red'})
      $('#turtle-result1').css({'color': 'black'})
    } else if (state.timeValue1 !== 0 && state.raceResults[0].name === 'Pinky' && state.chosenTurtle === 'Pinky') {
      $('#turtle-result1').css({'background-color': 'yellow'})
      $('#turtle-result1').css({'color': 'black'})
    } else if (state.timeValue1 !== 0 && state.raceResults[0].name === 'Clyde' && state.chosenTurtle === 'Clyde') {
      $('#turtle-result1').css({'background-color': 'green'})
      $('#turtle-result1').css({'color': 'white'})
    }

    if (state.timeValue2 !== 0 && state.raceResults[1].name === 'Inky' && state.chosenTurtle === 'Inky') {
      $('#turtle-result2').css({'background-color': 'blue'})
      $('#turtle-result2').css({'color': 'white'})
    } else if (state.timeValue2 !== 0 && state.raceResults[1].name === 'Blinky' && state.chosenTurtle === 'Blinky') {
      $('#turtle-result2').css({'background-color': 'red'})
      $('#turtle-result2').css({'color': 'black'})
    } else if (state.timeValue2 !== 0 && state.raceResults[1].name === 'Pinky' && state.chosenTurtle === 'Pinky') {
      $('#turtle-result2').css({'background-color': 'yellow'})
      $('#turtle-result2').css({'color': 'black'})
    } else if (state.timeValue2 !== 0 && state.raceResults[1].name === 'Clyde' && state.chosenTurtle === 'Clyde') {
      $('#turtle-result2').css({'background-color': 'green'})
      $('#turtle-result2').css({'color': 'white'})
    }

    if (state.timeValue3 !== 0 && state.raceResults[2].name === 'Inky' && state.chosenTurtle === 'Inky') {
      $('#turtle-result3').css({'background-color': 'blue'})
      $('#turtle-result3').css({'color': 'white'})
    } else if (state.timeValue3 !== 0 && state.raceResults[2].name === 'Blinky' && state.chosenTurtle === 'Blinky') {
      $('#turtle-result3').css({'background-color': 'red'})
      $('#turtle-result3').css({'color': 'black'})
    } else if (state.timeValue3 !== 0 && state.raceResults[2].name === 'Pinky' && state.chosenTurtle === 'Pinky') {
      $('#turtle-result3').css({'background-color': 'yellow'})
      $('#turtle-result3').css({'color': 'black'})
    } else if (state.timeValue3 !== 0 && state.raceResults[2].name === 'Clyde' && state.chosenTurtle === 'Clyde') {
      $('#turtle-result3').css({'background-color': 'green'})
      $('#turtle-result3').css({'color': 'white'})
    }

    if (state.timeValue4 !== 0 && state.raceResults[3].name === 'Inky' && state.chosenTurtle === 'Inky') {
      $('#turtle-result4').css({'background-color': 'blue'})
      $('#turtle-result4').css({'color': 'white'})
    } else if (state.timeValue4 !== 0 && state.raceResults[3].name === 'Blinky' && state.chosenTurtle === 'Blinky') {
      $('#turtle-result4').css({'background-color': 'red'})
      $('#turtle-result4').css({'color': 'black'})
    } else if (state.timeValue4 !== 0 && state.raceResults[3].name === 'Pinky' && state.chosenTurtle === 'Pinky') {
      $('#turtle-result4').css({'background-color': 'yellow'})
      $('#turtle-result4').css({'color': 'black'})
    } else if (state.timeValue4 !== 0 && state.raceResults[3].name === 'Clyde' && state.chosenTurtle === 'Clyde') {
      $('#turtle-result4').css({'background-color': 'green'})
      $('#turtle-result4').css({'color': 'white'})
    }

    if (state.timeValue1 !== 0 && state.raceResults[0].name === 'Inky' && state.chosenTurtle !== 'Inky') {
      $('#turtle-result1-name').css({'background-color': 'blue'})
      $('#turtle-result1-name').css({'color': 'white'})
    } else if (state.timeValue1 !== 0 && state.raceResults[0].name === 'Blinky' && state.chosenTurtle !== 'Blinky') {
      $('#turtle-result1-name').css({'background-color': 'red'})
      $('#turtle-result1-name').css({'color': 'black'})
    } else if (state.timeValue1 !== 0 && state.raceResults[0].name === 'Pinky' && state.chosenTurtle !== 'Pinky') {
      $('#turtle-result1-name').css({'background-color': 'yellow'})
      $('#turtle-result1-name').css({'color': 'black'})
    } else if (state.timeValue1 !== 0 && state.raceResults[0].name === 'Clyde' && state.chosenTurtle !== 'Clyde') {
      $('#turtle-result1-name').css({'background-color': 'green'})
      $('#turtle-result1-name').css({'color': 'white'})
    }

    if (state.timeValue2 !== 0 && state.raceResults[1].name === 'Inky' && state.chosenTurtle !== 'Inky') {
      $('#turtle-result2-name').css({'background-color': 'blue'})
      $('#turtle-result2-name').css({'color': 'white'})
    } else if (state.timeValue2 !== 0 && state.raceResults[1].name === 'Blinky' && state.chosenTurtle !== 'Blinky') {
      $('#turtle-result2-name').css({'background-color': 'red'})
      $('#turtle-result2-name').css({'color': 'black'})
    } else if (state.timeValue2 !== 0 && state.raceResults[1].name === 'Pinky' && state.chosenTurtle !== 'Pinky') {
      $('#turtle-result2-name').css({'background-color': 'yellow'})
      $('#turtle-result2-name').css({'color': 'black'})
    } else if (state.timeValue2 !== 0 && state.raceResults[1].name === 'Clyde' && state.chosenTurtle !== 'Clyde') {
      $('#turtle-result2-name').css({'background-color': 'green'})
      $('#turtle-result2-name').css({'color': 'white'})
    }

    if (state.timeValue3 !== 0 && state.raceResults[2].name === 'Inky' && state.chosenTurtle !== 'Inky') {
      $('#turtle-result3-name').css({'background-color': 'blue'})
      $('#turtle-result3-name').css({'color': 'white'})
    } else if (state.timeValue3 !== 0 && state.raceResults[2].name === 'Blinky' && state.chosenTurtle !== 'Blinky') {
      $('#turtle-result3-name').css({'background-color': 'red'})
      $('#turtle-result3-name').css({'color': 'black'})
    } else if (state.timeValue3 !== 0 && state.raceResults[2].name === 'Pinky' && state.chosenTurtle !== 'Pinky') {
      $('#turtle-result3-name').css({'background-color': 'yellow'})
      $('#turtle-result3-name').css({'color': 'black'})
    } else if (state.timeValue3 !== 0 && state.raceResults[2].name === 'Clyde' && state.chosenTurtle !== 'Clyde') {
      $('#turtle-result3-name').css({'background-color': 'green'})
      $('#turtle-result3-name').css({'color': 'white'})
    }

    if (state.timeValue4 !== 0 && state.raceResults[3].name === 'Inky' && state.chosenTurtle !== 'Inky') {
      $('#turtle-result4-name').css({'background-color': 'blue'})
      $('#turtle-result4-name').css({'color': 'white'})
    } else if (state.timeValue4 !== 0 && state.raceResults[3].name === 'Blinky' && state.chosenTurtle !== 'Blinky') {
      $('#turtle-result4-name').css({'background-color': 'red'})
      $('#turtle-result4-name').css({'color': 'black'})
    } else if (state.timeValue4 !== 0 && state.raceResults[3].name === 'Pinky' && state.chosenTurtle !== 'Pinky') {
      $('#turtle-result4-name').css({'background-color': 'yellow'})
      $('#turtle-result4-name').css({'color': 'black'})
    } else if (state.timeValue4 !== 0 && state.raceResults[3].name === 'Clyde' && state.chosenTurtle !== 'Clyde') {
      $('#turtle-result4-name').css({'background-color': 'green'})
      $('#turtle-result4-name').css({'color': 'white'})
    }

    return (
      <>
        <div id='options-panel'>
          <div className='panel' id='options-header'>
            <div className='options-header-part' id='options-header-part1'>
              <span>Pick a Turtle</span>
            </div>
            <div className='options-header-part' id='options-header-part2'>
              <span>Odds</span>
            </div>
            <div className='options-header-part' id='options-header-part3'>
              <span>Place Bet</span><span>(Max 50)</span>
            </div>
            <div className='options-header-part' id='options-header-part4'>
              <span>Spread</span>
            </div>
          </div>
          <div className='panel' id='options'>
            <form
              id='turtle-radio-form'
              onChange={(e) => {this.props.updateChosenTurtle(e)}}
            >
              <div id='div-turtle1' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle1' value='Inky' disabled={this.props.uberstate.raceStarted} /><label id='radio-label-turtle1' className='radio-label-turtle' htmlFor='radio-turtle1'>Inky</label>
              </div>
              <div id='div-turtle2' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle2' value='Blinky' disabled={this.props.uberstate.raceStarted} /><label id='radio-label-turtle2' className='radio-label-turtle' htmlFor='radio-turtle2'>Blinky</label>
              </div>
              <div id='div-turtle3' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle3' value='Pinky' disabled={this.props.uberstate.raceStarted} /><label id='radio-label-turtle3' className='radio-label-turtle' htmlFor='radio-turtle3'>Pinky</label>
              </div>
              <div id='div-turtle4' className='div-turtle'>
                <input type='radio' name='radio-turtle' id='radio-turtle4' value='Clyde' disabled={this.props.uberstate.raceStarted} /><label id='radio-label-turtle4' className='radio-label-turtle' htmlFor='radio-turtle4'>Clyde</label>
              </div>
            </form>
            <div id='turtle-chances'>
              <div className='odds' id='odds-turtle1'>
                <span>32.18%</span>
              </div>
              <div className='odds' id='odds-turtle2'>
                <span>26.14%</span>
              </div>
              <div className='odds' id='odds-turtle3'>
                <span>22.53%</span>
              </div>
              <div className='odds' id='odds-turtle4'>
                <span>19.15%</span>
              </div>
            </div>
            <div id='turtle-bet'>
              <div id='bet-turtle1' className='bet-turtle'>
                <input
                  type='number'
                  id='turtle1-number'
                  className='turtle-number'
                  name='radio-turtle'
                  min='1'
                  max='50'
                  disabled={this.firstDisable()}
                  onChange={(e) => {this.props.setBetting(e.target.value)}}
                />
              </div>
              <div id='bet-turtle2' className='bet-turtle'>
                <input
                  type='number'
                  id='turtle2-number'
                  className='turtle-number'
                  name='radio-turtle'
                  min='1'
                  max='50'
                  disabled={this.secondDisable()}
                  onChange={(e) => {this.props.setBetting(e.target.value)}}
                />
              </div>
              <div id='bet-turtle3' className='bet-turtle'>
                <input
                  type='number'
                  id='turtle3-number'
                  className='turtle-number'
                  name='radio-turtle'
                  min='1'
                  max='50'
                  disabled={this.thirdDisable()}
                  onChange={(e) => {this.props.setBetting(e.target.value)}}
                />
              </div>
              <div id='bet-turtle4' className='bet-turtle'>
                <input
                  type='number'
                  id='turtle4-number'
                  className='turtle-number'
                  name='radio-turtle'
                  min='1'
                  max='50'
                  disabled={this.fourthDisable()}
                  onChange={(e) => {this.props.setBetting(e.target.value)}}
                />
              </div>
            </div>
            <div id='turtle-odds'>
              <div id='odds-turtle1' className='odds-turtle'>
                <span id='odds-turtle1-win'>+{(this.props.uberstate.InkyBet * 3.11).toFixed(2)}</span>
              </div>
              <div id='odds-turtle2' className='odds-turtle'>
                <span id='odds-turtle2-win'>+{(this.props.uberstate.BlinkyBet * 3.83).toFixed(2)}</span>
              </div>
              <div id='odds-turtle3' className='odds-turtle'>
                <span id='odds-turtle3-win'>+{(this.props.uberstate.PinkyBet * 4.44).toFixed(2)}</span>
              </div>
              <div id='odds-turtle4' className='odds-turtle'>
                <span id='odds-turtle4-win'>+{(this.props.uberstate.ClydeBet * 5.22).toFixed(2)}</span>
              </div>
            </div>
          </div>
          <div className='panel' id='button'>
            {startStopButton}
          </div>
          <div className='panel' id='results'>
            <div id='results-header'>
              <span>Results</span>
            </div>
            <div id='race-results'>
              <div id='WoL-container'>
                { this.props.uberstate.timeValue1 !== 0 && winOrLose }
              </div>
              <div id='results-container'>
                { this.props.uberstate.showResults && result1HTML }
                { this.props.uberstate.showResults && result2HTML }
                { this.props.uberstate.showResults && result3HTML }
                { this.props.uberstate.showResults && result4HTML }
              </div>
            </div>
          </div>
          {/* <button onClick={() => {console.log(this.props.uberstate)}}>*</button> */}
        </div>
      </>
    )
  }
}

{/* <Replacement
  uberstate={this.state}
  updateChosenTurtle={this.updateChosenTurtle}
  startRace={this.startRace}
  restartRace={this.restartRace}
  setBetting={this.setBetting}
/> */}