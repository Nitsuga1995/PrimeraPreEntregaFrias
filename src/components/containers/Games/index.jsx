import { Box, Typography } from "@mui/material";
import CardItem from "../../../components/card-item";
import { getGames } from "./productos";
import React from "react";

const SectionJuegos = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        setLoading(true);
        getGames()
        .then((res)=> {
            setItem(res)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])


    return (
        <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={16} flexWrap={'wrap'}>
            {
                loading ?
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

export default SectionJuegos;