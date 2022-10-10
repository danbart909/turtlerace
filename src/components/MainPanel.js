import React, { Component } from 'react'
import { Row, Col, blue, red, yellow, green } from './helper'
import { motion, useTime, useTransform } from 'framer-motion'
import { Inky, Pinky, Blinky, Clyde } from './turtles'

export default class MainPanel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      one: 0,
      two: 0,
      three: 0,
      four: 0
    }
  }
    // const [one, setOne] = useState(0)
    // const [two, setTwo] = useState(0)
    // const [three, setThree] = useState(0)
    // const [four, setFour] = useState(0)

    
    // const time = useTime()
    // const turtle1 = useTransform(time, [0, firstTime])

    render() {
      let results = this.props.props.nameOrder
      let firstTime = results ? (results[0].finalScore / 2.5) : 0
      let secondTime = results ? (results[1].finalScore / 2.5) : 0
      let thirdTime = results ? (results[2].finalScore / 2.5) : 0
      let fourthTime = results ? (results[3].finalScore / 2.5) : 0
      let started = this.props.props.raceStarted

      return (
        <>
          <Row
            position='absolute'
            justifyContent='center'
            alignItems='center'
            height='70%'
            width='35%'
            border={`1px solid ${red}`}
            borderRadius='50%'
            // onClick={() => console.log(started, results, this.props)}
          >
            <Row
              justifyContent='center'
              alignItems='center'
              height='80%'
              width='80%'
              border={`1px solid ${yellow}`}
              borderRadius='50%'
            >
              <Row
                justifyContent='center'
                alignItems='center'
                height='75%'
                width='75%'
                border={`1px solid ${blue}`}
                borderRadius='50%'
              >
                <Row
                  justifyContent='center'
                  alignItems='center'
                  height='75%'
                  width='75%'
                  backgroundColor={green}
                  borderRadius='50%'
                >
                  <Inky info={[firstTime, started]} />
                  <Col gap='6vh'>
                    <Pinky info={[secondTime, started]} />
                    <Blinky info={[thirdTime, started]} />
                  </Col>
                  <Clyde info={[fourthTime, started]} />
                </Row>
              </Row>
            </Row>
          </Row>
        </>
      )
    }
  }


      // if (this.props.uberstate.raceStarted === true) {
    //   $('#turtle1').css({'animation': `${firstTime}s ease-in-out 0s 1 goUp forwards`})
    //   $('#turtle2').css({'animation': `${secondTime}s ease-in-out 0s 1 goUp forwards`})
    //   $('#turtle3').css({'animation': `${thirdTime}s ease-in-out 0s 1 goUp forwards`})
    //   $('#turtle4').css({'animation': `${fourthTime}s ease-in-out 0s 1 goUp forwards`})
    // } else {
    //   $('#turtle1').css({'animation': ``})
    //   $('#turtle2').css({'animation': ``})
    //   $('#turtle3').css({'animation': ``})
    //   $('#turtle4').css({'animation': ``})
    // }



// <Row
//   flex='1'
//   justifyContent='center'
//   alignItems='flex-end'
//   border='1px solid gold'
//   backgroundColor={props.chosenTurtle === 'Inky' ? blue : 'black'}
// >
//   <img src={inky} style={{ height: 50 }} alt='Inky'/>
// </Row>
// <Row
//   flex='1'
//   justifyContent='center'
//   alignItems='flex-end'
//   border='1px solid gold'
//   backgroundColor={props.chosenTurtle === 'Pinky' ? red : 'black'}
// >
//   <img src={pinky} style={{ height: 50 }} alt='Pinky'/>
// </Row>
// <Row
//   flex='1'
//   justifyContent='center'
//   alignItems='flex-end'
//   border='1px solid gold'
//   backgroundColor={props.chosenTurtle === 'Blinky' ? yellow : 'black'}
// >
//   <img src={blinky} style={{ height: 50 }} alt='Blinky'/>
// </Row>
// <Row
//   flex='1'
//   justifyContent='center'
//   alignItems='flex-end'
//   border='1px solid gold'
//   backgroundColor={props.chosenTurtle === 'Clyde' ? green : 'black'}
// >
//   <img src={clyde} style={{ height: 50 }} alt='Clyde'/>
// </Row>



      // let turtles = {
    //   Inky: {
    //     name: 'Inky', color: 'blue',
    //     img: 'https://i.imgur.com/t5fDmrN.png'
    //   },
    //   Pinky: {
    //     name: 'Pinky', color: 'red',
    //     img: 'https://i.imgur.com/HctoAid.png'
    //   },
    //   Blinky: {
    //     name: 'Blinky', color: 'yellow',
    //     img: 'https://i.imgur.com/HctoAid.png'
    //   },
    //   Clyde: {
    //     name: 'Clyde', color: 'green',
    //     img: 'https://i.imgur.com/qH45G3b.png'
    //   }
    // }
    // let html = []
    
    // for (let x in turtles) {
    //   html.push(<Row
    //     key={x.name}
    //     flex='1'
    //     justifyContent='center'
    //     alignItems='flex-end'
    //     border='1px solid gold'
    //     backgroundColor={props.chosenTurtle === x.name ? x.color : 'black'}
    //   >
    //     <img src={x.img} style={{ height: 50 }} />
    //   </Row>)
    // }