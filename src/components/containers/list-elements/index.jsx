import { Box, Typography, CardItem } from '@mui/material'
import React from 'react'

const ListElements = ({ loading, items }) => {
    return (
        <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={16}>
            {
                Boolean(loading) ?
                <Typography>cargando...</Typography>
                :
                items?.map((item, index) => {
                    return (
                        <CardItem key={index + item.nombre} name={item.nombre} price ={item.precio} stock= {item.stock} imageURL={item.imageURL} />
                    )
                })
            }
        </Box>
    )
}

export default ListElements