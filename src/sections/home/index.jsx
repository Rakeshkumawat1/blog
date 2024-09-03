import { Box, styled, Typography } from '@mui/material'
import React from 'react'
import bg from './bg2.jpg'

const Main = styled('div')(() => ({
    // width: '100vh',
    height: '100vh',
    background: `url(${bg}) no-repeat fixed center`,
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px 30px'
}))

const HomeMainSection = () => {
    return (
        <Main>
            <Box sx={{
                width: "calc(70%)",
                height: "50px",
                // backgroundColor: '#91a3b0',
                backgroundColor: 'rgba(145, 163, 176, 0.7)',
                borderRadius: '30px',
                zIndex: 1
            }}>
                <Typography sx={{ opacity: 1, color: '#fff', zIndex: 2 }}>
                    Hello
                </Typography>
            </Box>
        </Main>
    )
}

export default HomeMainSection