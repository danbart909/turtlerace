import React, { Component } from 'react'
import { Row, Col, blue, red, yellow, green } from './helper'
import { TextField, Button } from '@mui/material'

export default class Replacement extends Component {
  constructor(props) {
    super(props)
    this.state = {
      timerDone: false,
      showResults: false
    }
  }

  options = () => {
    const state = this.props.uberstate
    const turtles = [
      { name: 'Inky', chance: '17%', color: blue },
      { name: 'Pinky', chance: '23%', color: red },
      { name: 'Blinky', chance: '27%', color: yellow },
      { name: 'Clyde', chance: '33%', color: green }
    ]
    let html = []

    turtles.forEach(x => {
      html.push(
        <Row
          key={x.name}
          height='25%'
          justifyContent='space-between'
          alignItems='center'
          p='0 1vw'
          onClick={() => this.props.updateChosenTurtle(x.name)}
          backgroundColor={state.chosenTurtle === x.name ? x.color : 'null'}
          color={state.chosenTurtle === x.name ? 'white' : 'black'}
        >
          <Row>{x.name}</Row>
          <Row>{x.chance}</Row>
        </Row>
      )
    })

    return html
  }

  spread = () => {
    const state = this.props.uberstate
    let turtles = {
      Inky: { modifier: 3.11 }, // 5.22
      Pinky: { modifier: 3.83 }, // 4.44
      Blinky: { modifier: 4.44 }, // 3.83
      Clyde: { modifier: 5.22 } // 3.11
    }
    if (state.chosenTurtle) return '+' + (turtles[state.chosenTurtle].modifier * state.bet).toFixed(2)
    else return '+0.00'
  }

  startStopButton = () => {
    if (!this.props.uberstate.raceStarted) {
      return <Button onClick={() => this.props.startRace()} variant='outlined'>start</Button>
    } else {
      return <Button onClick={() => this.props.restartRace()} variant='outlined' disabled={!this.props.uberstate.showResults}>restart and select new turtle</Button>
    }
  }

  resultsBanner = () => {
    const state = this.props.uberstate
    
    if (!state.chosenTurtle) return 'No Turtle Selected'
    else if (state.showResults && state.winner) return 'You Win!'
    else if (state.showResults && !state.winner) return 'You Lose'
    else return 'No Bet'
  }
  
  render() {
    const state = this.props.uberstate
    const colors = {
      Inky: blue,
      Pinky: red,
      Blinky: yellow,
      Clyde: green
    }

    return (<>
      <Col width='99%' border='1px solid'>

        <Col
          height='12vh'
          p='1vw 0'
          justifyContent='space-between'
          textAlign='center'
        >
          <Row p='0 1vw'>
            <Row>Click on a Turtle's name below to choose your racer!</Row>
          </Row>
          <Row
            p='0 1vw'
            justifyContent='space-between'
          >
            <Row>Pick a Turtle</Row>
            <Row>Odds</Row>
          </Row>
        </Col>

        <Col
          height='27vh'
          textAlign='center'
        >
          {this.options()}
        </Col>

        <Row
          height='7vh'
          p='0 1vw'
          justifyContent='space-between'
          alignItems='center'
        >
          <Row>Place Your Bet</Row>
          <input
            type='number'
            defaultValue='1'
            min='1'
            max={state.endTotal || 50 }
            onChange={(e) => this.props.setBetting(e.target.value)}
            // required
          />
        </Row>

        <Row
          height='7vh'
          p='0 1vw'
          justifyContent='space-between'
          alignItems='center'
        >
          <Row>Spread</Row>
          <Row>{this.spread()}</Row>
        </Row>

        <Row
          height='5vh'
          justifyContent='center'
          alignItems='center'
        >
          {this.startStopButton()}
        </Row>

        {state.showResults && <Col
          height='36vh'
          alignItems='center'
        >
          <Row p='1vw 0'>Results</Row>
          <Row p='0 0 1vw 0'>{this.resultsBanner()}</Row>
          <Row
            width='100%'
            style={{backgroundColor: colors[state.raceResults[0].name]}}
          >
            <Row
              p='1vw'
              width='100%'
              justifyContent='space-between'
              color='white'
            >
              <Row>1st:</Row>
              <Row>{state.showResults ? state.raceResults[0].name : null}</Row>
              <Row>{(state.timeValue1 / 2).toFixed(3)} s</Row>
            </Row>
          </Row>
          <Row
            width='100%'
            style={{backgroundColor: colors[state.raceResults[1].name]}}
          >
            <Row
              p='1vw'
              width='100%'
              justifyContent='space-between'
              color='white'
            >
              <Row>2nd:</Row>
              <Row>{state.showResults ? state.raceResults[1].name : null}</Row>
              <Row>{(state.timeValue2 / 2).toFixed(3)} s</Row>
            </Row>
          </Row>
          <Row
            width='100%'
            style={{backgroundColor: colors[state.raceResults[2].name]}}
          >
            <Row
              p='1vw'
              width='100%'
              justifyContent='space-between'
              color='white'
            >
              <Row>3rd:</Row>
              <Row>{state.showResults ? state.raceResults[2].name : null}</Row>
              <Row>{(state.timeValue3 / 2).toFixed(3)} s</Row>
            </Row>
          </Row>
          <Row
            width='100%'
            style={{backgroundColor: colors[state.raceResults[3].name]}}
          >
            <Row
              p='1vw'
              width='100%'
              justifyContent='space-between'
              color='white'
            >
              <Row>4th:</Row>
              <Row>{state.showResults ? state.raceResults[3].name : null}</Row>
              <Row>{(state.timeValue4 / 2).toFixed(3)} s</Row>
            </Row>
          </Row>
        </Col>}

      </Col>
    </>)
  }
}