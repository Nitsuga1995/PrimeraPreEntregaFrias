import { listGames } from "../../../sdk/games";
import React from "react";
import ListElements from "../list-elements";

const SectionJuegos = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        setLoading(true);
        listGames()
        .then((res) => res.json())
        .then((res)=> {
            setItem(res)
        })
        .catch(() => {
            alert('Error al cargar los juegos');
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

export default SectionJuegos;