
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hook'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/componets/CheckingAuth'

export const AppRouter = () => {

  const status= useCheckAuth();

    if(status==='checking'){
      return <CheckingAuth/>
    }

  return (
    <Routes>
      {
        (status==='autenticado')
        ?<Route path='/*' element={<JournalRoutes/>}/>
        :<Route path='auth/*' element={<AuthRoutes/>}/>
      }
      <Route path='/*' element={<Navigate to='/auth/login' />}/>


        {/* login y registro  */}
        {/* <Route path='auth/*' element={<AuthRoutes/>}/> */}

        {/* JournalApp  */}
        {/* <Route path='/*' element={<JournalRoutes/>}/> */}

        
    </Routes>
  )
}
