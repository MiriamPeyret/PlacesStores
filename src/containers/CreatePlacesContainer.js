import React from 'react'
import CreateForm from '../components/CreateForm'
import './containers.css'
import PlacesModel from '../utils/PlacesModel';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const CreatePlacesContainer = () => {

    const history = useHistory;

const createTask = (types, location) => {
    const URL = 'https://project-toplaces.firebaseio.com/lugares.json';
    let newTask = {types :types, location : location, open_now: true } ;
    axios.post(URL, newTask)
  //  .then(res => console.log(res))
  .then(res => history.push('/'))
    .catch(error => console.log(error));
}

    return (
        <React.Fragment>
            <main className="main">
                <div className="container pt-4">
                    <CreateForm createTask= {createTask}/>
                </div>
            </main>
        </React.Fragment>
    )
}

export default CreatePlacesContainer
