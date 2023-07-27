import { Box, CircularProgress} from '@mui/material'
import CardItem from '../../card-item'
import React from 'react'

const ListElements = ({ loading, items }) => {
    return (
        <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={16} flexWrap={'wrap'}>
            {
                Boolean(loading) ?
                <CircularProgress value={30} variant="soft" />
                :
                items?.map((item, index) => {
                    return (
                        <CardItem key={index + item.nombre} name={item.nombre} description ={item.description} price ={item.precio} stock= {item.stock} imageURL={item.imageURL} />
                    )
                })
            }
        </Box>
    )
}

export default ListElements