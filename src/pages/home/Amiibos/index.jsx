import { Box, Typography } from "@mui/material";
import CardItem from "../../../components/card-item";
import { getAmiibos } from "./productos";
import React from "react";

const SectionAmiibos = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        setLoading(true);
        getAmiibos()
        .then((res)=> {
            setItem(res)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])


    return (
        <Box display={'flex'} justifyContent={'center'} flexDirection={'row'} gap={15}>
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

export default SectionAmiibos;