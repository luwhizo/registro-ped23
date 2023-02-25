import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalLayout } from '../layout/JournalLayout';

import { CaratulaView } from '../views/CaratulaView';
import { FiliacionView } from '../views/FiliacionView';
import { Cursos } from '../views/Cursos';
import { NothingSelectedView } from '../views/NothingSelectedView';
import { PreFiliacion } from '../views/PreFiliacion';
import { AsistenciaConfigView } from '../views/AsistenciaConfigView';
import { AsistenciaView } from '../views/AsistenciaView';
import { EvaluacionConfigView } from '../views/EvaluacionConfigView';
import { EvaluacionView } from '../views/EvaluacionView';
import { CentralView } from '../views/CentralView';
import { EstadisticaView } from '../views/EstadisticaView';
import { AvanceView } from '../views/AvanceView';
import { DestacadosView } from '../views/DestacadosView';


/* import {  
  CaratulaView,
  FiliacionView,
  Cursos,
  NothingSelectedView,
  PreFiliacion,
  AsistenciaConfigView,
  AsistenciaView,
  EvaluacionConfigView,
  EvaluacionView,
  CentralView,
  EstadisticaView,
  AvanceView,
  DestacadosView,
} from '../views/index';
 */


export const JournalPage = () => {
  return (
    <JournalLayout>
        
        <Routes>
            < Route path="/" element={<NothingSelectedView/>} />
            < Route path="caratula" element={<CaratulaView/>} />
            < Route path="cursos" element={<Cursos/>} />
            < Route path="prefiliacion" element={<PreFiliacion/>} />
            < Route path="filiacion" element={<FiliacionView/>} />
            < Route path="asistenciaconfig" element={<AsistenciaConfigView/>} />
            < Route path="asistencia" element={<AsistenciaView/>} />
            < Route path="evaluacionconfig" element={<EvaluacionConfigView/>} />
            < Route path="evaluacion" element={<EvaluacionView/>} />
            < Route path="centralizador" element={<CentralView/>} />
            < Route path="estadistica" element={<EstadisticaView/>} />
            < Route path="avance" element={<AvanceView/>} />
            < Route path="destacados" element={<DestacadosView/>} />
          

            < Route path="/*" element={<Navigate to="/" />} />
        </Routes>    
    </JournalLayout>
    
  )
}
