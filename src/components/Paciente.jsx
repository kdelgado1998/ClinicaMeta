

export const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
    // console.log(paciente)

    const { nombre, propietario, email, fecha, sintomas, id } = paciente

    const handleEliminar = () => {
        const respuesta = confirm('Deseas eliminar al paciente? ', paciente.nombre);

        if(respuesta){
            eliminarPaciente(id)
        }
    }
    return (
        <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
            <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre:

                <span className='m-1 font-normal normal-case'>{nombre}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario:

                <span className='m-1 font-normal normal-case'>{propietario}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Email:

                <span className='m-1 font-normal normal-case'>{email}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de alta:

                <span className='m-1 font-normal normal-case'>{fecha}</span>
            </p>

            <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas:

                <span className='m-1 font-normal normal-case'>{sintomas}</span>
            </p>

            <div className="flex gap-4">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                    onClick={() => setPaciente(paciente)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-pink-600 hover:bg-pink-700 text-white font-bold uppercase rounded-lg"
                    onClick={handleEliminar}
                >Eliminar</button>
            </div>
        </div>
    )
}
