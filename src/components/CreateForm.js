import React,{useState} from 'react'

const CreateForm = (props) => {
    const{createTask} = props;
    const [types, setTypes] = useState('');
    const [location, setLocation] = useState('');

    const handlerTypes = (evento) => {
        setTypes(evento.target.value)// almacnarlo en el titulo
    }

    const handlerLocation = (evento) => {
        setLocation(evento.target.value);
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="form-group">
                    <label htmlFor="types">Tarea</label>
                    <input onChange={handlerTypes} type="text" className="form-control" id="types" />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Categoría</label>
                    <input onChange= {handlerLocation} type="text" className="form-control" id="location" />
                </div>
                <button onClick ={() => {createTask(types, location)}} className="btn btn-primary">Agregar</button>
            </div>
        </div>
    )
}

export default CreateForm
