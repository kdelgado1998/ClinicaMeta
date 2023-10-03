import { Paciente } from "./Paciente"
import { useEffect } from "react"

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

    // useEffect(() => {
    //     if (pacientes.length > 0) {
    //         console.log('Nuevo paciente')
    //     }
    // }, [pacientes])

    return (
        <div className='md:w-1/2 lg:w-3/5 md:h-screen h-screen overflow-y-scroll'>


            {pacientes && pacientes.length ? (
                <>

                    <h2 className='font-black text-3xl text-center text-pink-300'>Listado de pacientes</h2>
                    <p className='font-bold mt-5 text-center my-3 mb-10'>
                        Administra tus {""}
                        <span className='text-pink-500 font-bold text-lg'>
                            Pacientes
                        </span> {""} y citas
                    </p>

                    {pacientes.map((paciente) => {
                        return (
                            <Paciente
                                key={paciente.id}
                                paciente={paciente}
                                setPaciente={setPaciente}
                                eliminarPaciente={eliminarPaciente}
                            />
                        )
                    })}
                </>
            ) : (

                <>
                    <h2 className='font-black text-3xl text-center text-pink-300'>No hay Pacientes</h2>
                    <p className='font-bold mt-5 text-center my-3 mb-10'>
                        Agrega tus {""}
                        <span className='text-pink-500 font-bold text-lg'>
                            Pacientes
                        </span> {""} y citas
                    </p>
                </>
            )}

        </div>

    )
}
