// rafce
import { useState } from 'react'
import CustomInputText from './CustomInputText';

const CustomBootstrap = () => {

    const [user, setUser] = useState({
        name: '',
        lastName: ''
    });

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Titutlo del Card</h4>
                        </div>
                        <div className='card-body'>
                            <div className='mb-3'>
                                <CustomInputText
                                    customId="inputNombre"
                                    titleLabel="Nombre"
                                    customPlaceholder="Ingrese el nombre"
                                    value={user.name}
                                    maxLength={5}
                                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                                />
                                <CustomInputText
                                    customId="inputApellido"
                                    titleLabel="Apellido"
                                    customPlaceholder="Ingrese el apellido"
                                    value={user.lastName}
                                    disabled={user.name === ''}
                                    onChange={(e) => setUser({ ...user, lastName: e.target.value })}
                                />
                            </div>
                        </div>
                        <div className='card-footer'>
                            <button className='btn btn-primary'>Enviar</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12'>
                    <h1>Nombre: {user.name}</h1>
                    <h1>Apellido: {user.lastName}</h1>
                </div>
            </div>
        </div>
    )
}

export default CustomBootstrap