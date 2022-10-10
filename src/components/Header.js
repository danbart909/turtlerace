import React from 'react'
import { Row, Col, blue, red, yellow, green } from './helper'

export default function Header(props) {

  const header = () => props.chosenTurtle ? `Your Turtle is: ${props.chosenTurtle}` : 'No Turtle Selected'

  const cashTotal = () => {
    if (props.raceStarted) return props.endTotal.toFixed(2)
    else if (!props.raceStarted && !props.totalCash) return 50
    else return props.totalCash.toFixed(2)
  }

  const headerBackground = {
    Inky: { backgroundColor: blue, color: 'white' },
    Pinky: { backgroundColor: red, color: 'white' },
    Blinky: { backgroundColor: yellow, color: 'white' },
    Clyde: { backgroundColor: green, color: 'white' }
  }

    return (
      <>
        <Col
          flex='1'
          justifyContent='space-evenly'
          alignItems='center'
          style={headerBackground[props.chosenTurtle]}
        >
          <Row style={headerBackground[props.chosenTurtle]}>Turtle Racing!</Row>
          <Row style={headerBackground[props.chosenTurtle]}>{header()}</Row>
          <Row textAlign='center' style={headerBackground[props.chosenTurtle]}>Total: ${cashTotal()}</Row>
        </Col>
      </>
    )
  }