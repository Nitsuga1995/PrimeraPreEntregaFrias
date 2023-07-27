import React from "react";
import { listConsola } from "../../../sdk/consola"
import ListElements from "../list-elements"

const SectionConsole = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        setLoading(true);
        listConsola()
        .then((res) => res.json())
        .then((res)=> {
            setItem(res)
        })
        .catch(() => {
            alert('Error al cargar las consolas');
            setLoading(false)
        })
        .finally(() => {
            setLoading(false);
        })
    }, [])


    return (
        <ListElements items={items} loading={loading} />
    )
}

export default SectionConsole;