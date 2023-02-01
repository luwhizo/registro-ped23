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
              .update(newData)
              .eq('id_caratula', data[0].id_caratula)

              if(error===null){
                console.log("Seguardaron los cambios exitosamente") 
              }else{
                console.error("ocurrio un error al guardar los cambios")
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
        
        
        //dispatch(setActiveCaratula(caratula)) // aqui es donde se da el bucle infinito
        //dispatch(newcaratula)
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
    dispatch(setCaratula(data))
    //const alumnos = Object.keys(data[0]);
    //console.log("Claves: ", alumnos);
    //console.log(alumnos[2]) // 
    
   }
}

/* export const startUpadateCaratula = () =>{
  return async(dispatch, getState ) =>{  

  }
} */