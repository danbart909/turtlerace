import React from 'react'
import { Box } from '@mui/material'

export const Row = (props) => {
  return <Box {...props}
    display='flex'
    flexDirection='row'
    fontSize='calc(14px + 6 * ((100vw - 335px) / 1265))'
    color='white'
  >{props.children}</Box>
}

export const Col = (props) => {
  return <Box {...props}
    display='flex'
    flexDirection='column'
    fontSize='calc(14px + 6 * ((100vw - 335px) / 1265))'
    color='white'
  >{props.children}</Box>
}

export const blue = '#260880'
export const red = '#88001b'
export const yellow = '#d4ba22' // #fefe00
export const green = 'green'