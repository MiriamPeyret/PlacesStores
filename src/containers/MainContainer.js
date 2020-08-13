import React, { useState, useEffect } from 'react';
import Places from '../components/Places';
import './containers.css'
import axios from 'axios';
import { PlacesModel } from '../utils/PlacesModel';


const MainContainer = () => {

    const URL = 'https://project-toplaces.firebaseio.com/lugares.json';

    const [tasks, setTasks] = useState([]);

    const getTasks = () => {
        axios.get(URL)
            .then((res) => setTasks(res.data))
            .catch((error) => alert(error)); //metodo que ayuda a modificar las taereas
    }

    const deleteTask = (id) => {
        axios.delete(`https://project-toplaces.firebaseio.com/lugares/${id}.json`)
          .then(() => getTasks())
          .catch((error) => alert(error))
    }

    const completeTask = (types, open_now, location, id) => { // cambia el estado de false a true
        const currentTask = new PlacesModel(types, open_now, location, id);
        axios.patch(URL, currentTask)
          .then(() => getTasks())
          .catch((error) => alert(error))
      }

    useEffect(() => { //se ejecuta cuando el componente carga 
        getTasks();
    }, []); //[] limpia datos para evitar llamada en cadena 


    return (
        <div>
            <main className="main">      

                <div className="container pt-4">

                    {tasks
                        ? Object.keys(tasks).map((id) =>
                            <Places
                                key={id}
                                id={id}
                                types={tasks[id].types}
                                open_now={tasks[id].open_now}
                                location={tasks[id].location}
                                deleteTask={deleteTask}
                                completeTask={completeTask}
                            />)
                        : <h1 className="text-white text-center">
                            Completaste tu búsqueda
              </h1>
                    }

                </div>
            </main>
        </div>
    )
}



export default MainContainer;