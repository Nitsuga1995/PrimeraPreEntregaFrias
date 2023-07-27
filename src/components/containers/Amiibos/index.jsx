import { listAmiibos } from "../../../sdk/Amiibos"
import React from "react";
import ListElements from "../list-elements"

const SectionAmiibos = () => {
    const [items, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {

        setLoading(true);
        listAmiibos()
        .then((res) => res.json())
        .then((res)=> {
            setItem(res)
        })
        .catch(() => {
            alert('Error al cargar los amiibos');
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

export default SectionAmiibos;