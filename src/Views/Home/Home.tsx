import React from 'react'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

interface Props {
}

const Home = (props: Props) => {
    return (
        <Paper elevation={3} sx={(theme) => ({  margin: `${theme.spacing(2)} auto`, width: '98%', height: '65vh'})}>
        </Paper>
    )
}

export default Home
