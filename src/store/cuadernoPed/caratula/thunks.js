import { supabaseApp } from "../../../supabase/client"; 
import { setActiveCaratula, setCaratula, updateCaratula } from "./caratulaSlice";

export const startCrearActualizarCaratula = (changes) =>{
    return async(dispatch, getState ) =>{
     const {uid} = getState().auth;  

      try {
          
            const { data, error } = await supabaseApp
            .from('caratulas')
            .select('id_caratula, id_prof')
            .eq('id_prof', uid)   
            //console.log(data)
                  
          if(data.length>0){
              // actualizacion de la caratula aqui
              console.log('hay al menos un registro')
              //onsole.log(data[0].id_caratula)
              console.log(changes)
              console.log(data)
              

              const newData = [{}];
            
              changes.forEach(([row, column, oldValue, newValue]) => {
                
                //row, column ->  son datos enteros que representan el numero de fila y nombre de columna que se editó
                //oldValue, newValue -> son datos de tipo string que represntan en viejo y nuevo valor que se editó 
                newData[row][column] = newValue;  // se sobre escribe solo las celdas que se editaron de toda la matriz
                //console.log(state)
              })
              // console.log(newData) 
              
              
              const { error } = await supabaseApp
              .from('caratulas')
              .update(newData) // actualizacion masiva de datos (con Upsert data)
              .eq('id_caratula', data[0].id_caratula)

              if(error===null){
                console.log("Seguardaron los cambios de actualizacion exitosamente") 
              }else{
                console.error("ocurrio un error al guardar los cambios de actualizacion")
              }
              
              //console.log(data[0].id_caratula)
              const celdasModificadas = newData[0]
              console.log(celdasModificadas) 
              //dispatch(updateCaratula(celdasModificadas))

        

          }else{
              console.log('No hay registro')

              const caratula = {
                distrito:'',
                id_prof: uid, // aqui se inserta el uid al objeto
                nucleo:'',
                colegio:'',
                director:'',
                docente:'',
                //nivel:'', // supabase lo crea automaticamente
                area:'',
                //gestion:'', }  /// lo propio
                }
                                
              const { data } = await supabaseApp
                    .from('caratulas')
                    .insert(caratula).select('id_caratula')
                    caratula.id_caratula=data[0].id_caratula  // tomamos el id de supabase y lo agragamos a la caratula local, por si lo necesitamos con el id_caratula
                    console.log(caratula)
          }
          
      } catch (error) {

        console.log(error)
      
      }
    }
} 

export const startLoadingCaratula = () =>{  //cargando caratula de supabase al state de la app
  return async(dispatch, getState ) =>{
    const {uid} = getState().auth;
    const { data, error } = await supabaseApp
    .from('caratulas')
    .select('distrito, nucleo,colegio,director,docente,nivel,area,gestion')
    .eq('id_prof', uid)    
     console.log(data) //
     const dataNuevo= [
      {cabecera:'DISTRITO', distrito: data[0].distrito},
      {cabecera:'DISTRITO', nucleo: data[0].nucleo},
      {cabecera:'DISTRITO', colegio: data[0].colegio},
      {cabecera:'DISTRITO', director: data[0].director},
      {cabecera:'DISTRITO', docente: data[0].docente},
      {cabecera:'DISTRITO', nivel: data[0].nivel},
      {cabecera:'DISTRITO', area: data[0].area},
      {cabecera:'DISTRITO', gestion: data[0].gestion},
    ] 
    console.log(dataNuevo) //
    dispatch(setCaratula(data)) 
   }
}
