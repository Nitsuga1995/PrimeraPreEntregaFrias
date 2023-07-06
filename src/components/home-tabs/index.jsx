import { Box, Tab, Tabs } from '@mui/material'
import React from 'react'
import SectionJuegos from '../containers/Games'
import SectionConsole from '../containers/Console'
import SectionAmiibos from '../containers/Amiibos'

const TabsComponent = () => {
    const [selected, setSelected] = React.useState ('juegos')

    const handleChange = (_, value) => {
        setSelected(value);
    }

    const selectedSection = (value) => {
        switch (value) {
            case 'juegos':
                return <SectionJuegos/>;
            case 'consolas':
                return <SectionConsole/>;
            case 'amiibos':
                return <SectionAmiibos/>;
            default:
                return <Box></Box>
        }
    }
<SectionAmiibos/>
  return (
    <Box>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}></Box>
    <Tabs value={selected} onChange={handleChange} centered>
      <Tab label="Juegos" value="juegos" />
      <Tab label="Consolas" value="consolas"/>
      <Tab label="Amiibos" value="amiibos"/>
    </Tabs>
    <Box m={2}>
        {selectedSection(selected)}
  </Box>
</Box>
  )
  
}

export default TabsComponent