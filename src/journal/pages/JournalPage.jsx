import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalLayout } from '../layout/JournalLayout';
import { CaratulaView } from '../views/CaratulaView';
import { FiliacionView } from '../views/FiliacionView';
import { Cursos } from '../views/Cursos';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { PreFiliacion } from '../views/PreFiliacion';




export const JournalPage = () => {
  return (
    <JournalLayout>
        
        <Routes>
            < Route path="/" element={<NothingSelectedView/>} />

            < Route path="caratula" element={<CaratulaView/>} />
            < Route path="cursos" element={<Cursos/>} />
            < Route path="prefiliacion" element={<PreFiliacion/>} />
            < Route path="filiacion" element={<FiliacionView/>} />

            {/* <Typography >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo doloribus adipisci possimus voluptate officia, cupiditate quidem eius iure, facere labore perferendis incidunt aliquid alias quisquam odit. Repellat consequatur debitis eligendi?</Typography> */}
            
            {/* <CaratulaView/> */}
            {/* <FiliacionView/> */}
            {/* <CaraTableEditable/> */}
            {/* <PreFiliacion/> */}
            {/* <Prueba/> */}
            {/* <Cursos/> */}
            {/* <NothingSelectedView/> */}

            < Route path="/*" element={<Navigate to="/" />} />
        </Routes>    
    </JournalLayout>
    
  )
}
