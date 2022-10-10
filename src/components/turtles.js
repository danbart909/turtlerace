import React from 'react'
import { Row, Col, blue, red, yellow, green } from './helper'
import { motion } from 'framer-motion'
import inky from '../img/inky.png'
import pinky from '../img/pinky.png'
import blinky from '../img/blinky.png'
import clyde from '../img/clyde.png'

export const Inky = (info) => {
  return <>
    { info.info[1] ? <motion.div animate={{ x: '-14vw' }} transition={{ duration: info.info[0] }}>
      <Row
        component='img'
        src={inky}
        alt='Inky'
        position='relative'
        height='50px'
        style={{ transform: 'rotate(270deg)' }}
        onClick={() => {console.log(info.info[0], info.info[1])}}
      />
    </motion.div> :
    <Row
      component='img'
      src={inky}
      alt='Inky'
      position='relative'
      height='50px'
      style={{ transform: 'rotate(270deg)' }}
      onClick={() => {console.log(info.info[0], info.info[1])}}
    /> }
  </>
}

export const Pinky = (info) => {
  return <>
    { info.info[1] ? <motion.div animate={{ y: '-28vh' }} transition={{ duration: info.info[0] }}>
      <Row
        component='img'
        src={pinky}
        alt='Pinky'
        position='relative'
        height='50px'
      />
    </motion.div> :
    <Row
      component='img'
      src={pinky}
      alt='Pinky'
      position='relative'
      height='50px'
    /> }
  </>
}

export const Blinky = (info) => {
  return <>
    { info.info[1] ? <motion.div animate={{ y: '28vh' }} transition={{ duration: info.info[0] }}>
      <Row
        component='img'
        src={blinky}
        alt='Blinky'
        position='relative'
        height='50px'
        style={{ transform: 'rotate(180deg)' }}
      />
    </motion.div> :
    <Row
      component='img'
      src={blinky}
      alt='Blinky'
      position='relative'
      height='50px'
      style={{ transform: 'rotate(180deg)' }}
    /> }
  </>
}

export const Clyde = (info) => {
  return <>
    { info.info[1] ? <motion.div animate={{ x: '14vw' }} transition={{ duration: info.info[0] }}>
      <Row
        component='img'
        src={clyde}
        alt='Clyde'
        position='relative'
        height='50px'
        style={{ transform: 'rotate(90deg)' }}
      />
    </motion.div> :
    <Row
      component='img'
      src={clyde}
      alt='Clyde'
      position='relative'
      height='50px'
      style={{ transform: 'rotate(90deg)' }}
    /> }
  </>
}