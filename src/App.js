import React, { Component } from 'react'
import { Row, Col } from './components/helper'
import Header from './components/Header'
import MainPanel from './components/MainPanel'
import OptionsPanel from './components/OptionsPanel'
import Replacement from './components/Replacement'
import { Button } from '@mui/material'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      totalCash: '',
      adjustment: 0,
      endTotal: 0,
      raceStarted: false,
      showResults: false,
      chosenTurtle: '',
      checkChosenTurtle: '',
      // InkyBet: 0,
      // BlinkyBet: 0,
      // PinkyBet: 0,
      // ClydeBet: 0,
      bet: 0,
      gameStarted: false,
      winner: false,
      nameOrder: [
        { name: '', finalScore: '' },
        { name: '', finalScore: '' },
        { name: '', finalScore: '' },
        { name: '', finalScore: '' }
      ],
      raceResults: [
        { name: '', finalScore: '' },
        { name: '', finalScore: '' },
        { name: '', finalScore: '' },
        { name: '', finalScore: '' }
      ],
      timeValue1: 0,
      timeValue2: 0,
      timeValue3: 0,
      timeValue4: 0
    }
  }

  getNum = (min, max) => { return Math.floor(Math.random() * (max - min + 1) ) + min;}
  
  getLuckNum = () => {
    const min = 3.3
    const max = 6.6
    return (Math.random() * (max - min)) + min;
  }
  
  getManeuvering = () => {
    const min = 0.1
    const max = 1
    return (Math.random() * (max - min)) + min;
  }

  race = () => {
    const track = {
      length1: 90,
      length2: 100,
      length3: 110,
      maneuvering: this.getManeuvering()
    }
    const turtle = [
      {
        name: 'Inky',
        maxSpeed: this.getNum(6, 11),
        acceleration: this.getNum(6, 11),
        luck: this.getLuckNum()
      },
      {
        name: 'Blinky',
        maxSpeed: this.getNum(7, 10),
        acceleration: this.getNum(7, 10),
        luck: this.getLuckNum()
      },
      {
        name: 'Pinky',
        maxSpeed: this.getNum(8, 9),
        acceleration: this.getNum(8, 9),
        luck: this.getLuckNum()
      },
      {
        name: 'Clyde',
        maxSpeed: this.getNum(7.5, 9.5,),
        acceleration: this.getNum(7.5, 9.5),
        luck: this.getLuckNum()
      }
    ]
    let racers = []
    let nameOrder = []
    let finishOrder = []
    let theTrack = {...track}

    turtle.forEach(x => racers.push({...x, rawScore: x.maxSpeed + x.acceleration + x.luck}))
    racers.forEach(x => nameOrder.push({...x, finalScore: theTrack.length2 / x.rawScore}))
    racers.sort(function(a, b){return b.rawScore - a.rawScore})
    racers.forEach(x => finishOrder.push({...x, finalScore: theTrack.length2 / x.rawScore}))

    racers = [];

    finishOrder.sort(function(a, b){return b.rawScore - a.rawScore})
    this.setState({ raceResults: finishOrder, nameOrder })
    return finishOrder;
  }

  startRace = () => {
    let results = this.race()

    if (!this.state.chosenTurtle && this.state.raceStarted) this.setState({ checkChosenTurtle: false })
    else if (this.state.chosenTurtle) this.setState({ checkChosenTurtle: true })

    this.setState({
      raceStarted: true,
      gameStarted: true,
      // showResults: true
    });

    let t1 = parseFloat(results[0].finalScore.toFixed(3))
    let t2 = parseFloat(results[1].finalScore.toFixed(3))
    let t3 = parseFloat(results[2].finalScore.toFixed(3))
    let t4 = parseFloat(results[3].finalScore.toFixed(3))
    let ms1 = (t1 * 1000) / 2
    let ms2 = (t2 * 1000) / 2
    let ms3 = (t3 * 1000) / 2
    let ms4 = (t4 * 1000) / 2

    // setTimeout(() => { this.setState({ showResults: true }) }, ms1)
    setTimeout(() => { this.setState({ timeValue1: t1 }) }, ms1)
    setTimeout(() => { this.setState({ timeValue2: t2 }) }, ms2)
    setTimeout(() => { this.setState({ timeValue3: t3 }) }, ms3)
    setTimeout(() => { this.setState({ timeValue4: t4 }) }, ms4)
    setTimeout(() => { this.moneyCalc() }, ms1)
    setTimeout(() => { this.setState({ showResults: true }) }, 2500)

    if (!this.state.totalCash) this.setState({ totalCash: 50 })

    // initialize moneyCalc()

    // this.moneyCalc()
  }

  moneyCalc = () => {
    let final = ''
    let { totalCash, chosenTurtle, bet, raceResults } = this.state
    // let adjustment = this.state.adjustment

    if ((raceResults[0].name === chosenTurtle) && (raceResults[0].name === 'Inky')) {
      final = (totalCash + (bet * 3.11))
      this.setState({ winner: true, endTotal: final })
    } else if ((raceResults[0].name === chosenTurtle) && (raceResults[0].name === 'Blinky')) {
      final = (totalCash + (bet * 3.83))
      this.setState({ winner: true, endTotal: final })
    } else if ((raceResults[0].name === chosenTurtle) && (raceResults[0].name === 'Pinky')) {
      final = (totalCash + (bet * 4.44))
      this.setState({ winner: true, endTotal: final })
    } else if ((raceResults[0].name === chosenTurtle) && (raceResults[0].name === 'Clyde')) {
      final = (totalCash + (bet * 5.22))
      this.setState({ winner: true, endTotal: final })
    } else {
      final = (totalCash - bet)
      this.setState({ winner: false, endTotal: final })
    }

    // increment state and initiate restartRace()

    // if (this.state.raceResults[0].name === 'Inky') {
    //   this.setState({ InkyWins: this.state.InkyWins++ })
    // } else if (this.state.raceResults[0].name === 'Blinky') {
    //   this.setState({ BlinkyWins: this.state.BlinkyWins++ })
    // } else if (this.state.raceResults[0].name === 'Pinky') {
    //   this.setState({ PinkyWins: this.state.PinkyWins++ })
    // } else if (this.state.raceResults[0].name === 'Clyde') {
    //   this.setState({ ClydeWins: this.state.ClydeWins++ })
    // }

    // this.setState({ totalGames: this.state.totalGames + 1 })

    // console.log(this.state.totalGames, this.state.InkyWins, this.state.BlinkyWins, this.state.PinkyWins, this.state.ClydeWins)

    // this.restartRace()

    // setTimeout(
    // function() {
    //   this.restartRace()
    // }
    // .bind(this),
    // 50
    // )

  }

  restartRace = () => {
    this.setState ({
      raceStarted: false,
      showResults: false,
      gameStarted: false,
      nameOrder: [
        { name: '', finalScore: '' },
        { name: '', finalScore: '' },
        { name: '', finalScore: '' },
        { name: '', finalScore: '' }
      ],
      raceResults: [
        { name: '', finalScore: '' },
        { name: '', finalScore: '' },
        { name: '', finalScore: '' },
        { name: '', finalScore: '' }
      ],
      timeValue1: 0,
      timeValue2: 0,
      timeValue3: 0,
      timeValue4: 0,
      totalCash: this.state.endTotal
    })

    // initialize race

    // if (this.state.raceResults[0].name === 'Inky') {
    //   this.setState({ InkyWins: this.state.InkyWins + 1 })
    // } else if (this.state.raceResults[0].name === 'Blinky') {
    //   this.setState({ BlinkyWins: this.state.BlinkyWins + 1 })
    // } else if (this.state.raceResults[0].name === 'Pinky') {
    //   this.setState({ PinkyWins: this.state.PinkyWins + 1 })
    // } else if (this.state.raceResults[0].name === 'Clyde') {
    //   this.setState({ ClydeWins: this.state.ClydeWins + 1 })
    // }

    // this.setState({ totalGames: this.state.totalGames + 1 })

    // console.log(this.state.totalGames, this.state.InkyWins, this.state.BlinkyWins, this.state.PinkyWins, this.state.ClydeWins)

    // if (this.state.totalGames === 30) {
    //   return ''
    // } else {
    //   this.startRace()
    // }

  }

  updateChosenTurtle = (x) => this.setState({ chosenTurtle: x })

  setBetting = (x) => this.setState({ bet: Number(x) })
    // const turtle = this.state.chosenTurtle
    // if (turtle === 'Inky') this.setState ({ InkyBet: Number(e) })
    // else if (turtle === 'Blinky') this.setState ({ BlinkyBet: Number(e) })
    // else if (turtle === 'Pinky') this.setState ({ PinkyBet: Number(e) })
    // else if (turtle === 'Clyde') this.setState ({ ClydeBet: Number(e) })
  // }

  render() {
    return (
      <>
        <Row
          height='99.6vh'
          backgroundColor='black'
        >
          <Col
            flex='2'
            justifyContent='space-between'
          >
            <Row
              flex='1'
              border='1px solid'
            >
              { Header(this.state) }
            </Row>
            <Row
              flex='4'
              justifyContent='center'
              alignItems='center'
              border='1px solid'
            >
              {/* { MainPanel(this.state) } */}
              <MainPanel props={this.state} />
            </Row>
          </Col>
          <Row flex='1'>
            <Replacement
              uberstate={this.state}
              updateChosenTurtle={this.updateChosenTurtle}
              startRace={this.startRace}
              restartRace={this.restartRace}
              setBetting={this.setBetting}
            />
          </Row>
        </Row>
      </>
    )
  }
}