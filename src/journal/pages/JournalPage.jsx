import {Typography} from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { PreFiliacion } from '../views/PreFiliacion';
import { CaratulaView, FiliacionView, NothingSelectedView } from '../views';
import { CaraTableEditable } from '../views/CaraTableEditable';


export const JournalPage = () => {
  return (
    <JournalLayout>

      {/* <Typography >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo doloribus adipisci possimus voluptate officia, cupiditate quidem eius iure, facere labore perferendis incidunt aliquid alias quisquam odit. Repellat consequatur debitis eligendi?</Typography> */}
      {/* <NothingSelectedView/> */}
      {/* <CaratulaView/> */}
      <FiliacionView/>
      {/* <CaraTableEditable/> */}
      {/* <PreFiliacion/> */}
      {/* <Prueba/> */}
       
    </JournalLayout>
    
  )
}
