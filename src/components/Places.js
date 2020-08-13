import React from 'react'

const Places = (props) => {
 
    const { types, open_now, location, id, deletePlaces, completePlaces} = props;

    return (
        <div className="card mb-4">
            <h5 className="card-header">{types}</h5>
            <div className="card-body">
             <h5 className="card-title">{open_now}</h5> 
                <p className="card-text">{location}</p>
                { open_now
                    ? <button className="btn btn-secondary mr-3" onClick={() => completePlaces(types, location, true, id)}>Deshacer</button>
                    : <button className="btn btn-primary mr-3" onClick={() => completePlaces(types, location, true, id)}>Completar</button> }
                <button href="a" className="btn btn-danger" onClick={() => deletePlaces(id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Places
