import { useState, useEffect } from "react"
import { Alerta } from "./Alerta";

export const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');

    const [error, setError] = useState(false);

    useEffect(() => {
        //   console.log(Object.keys(paciente).length > 0)
        //Evaluamos si hay algo mayor que cero en el arreglo de pacientes
        if (Object.keys(paciente).length > 0) {
            setNombre(paciente.nombre)
            setPropietario(paciente.propietario)
            setEmail(paciente.email)
            setFecha(paciente.fecha)
            setSintomas(paciente.sintomas)
        }

    }, [paciente])


    const generarID = () => {
        const fecha = Date.now().toString(36)
        const random = Math.random().toString(36).substring(2);

        return fecha + random
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //Validacion del formulario

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setError(true)

            setTimeout(() => {
                setError(false)
            }, 3000);
            return;
        }

        setError(false)

        //Construir objeto de paciente
        const objetoPaciente = {
            nombre,
            propietario,
            email,
            fecha,
            sintomas
        }

        if (paciente.id) {
            // console.log('Editando')
            objetoPaciente.id = paciente.id
            // console.log(paciente)
            // console.log(objetoPaciente)

            const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
        
            setPacientes(pacientesActualizados)

            //Reiniciamos el objeto en memoria
            setPaciente({})
        } else {
            // console.log('Agregando')
            //tomamos el arreglo de pacientes del app y le agregamos el objeto sin modificarlo directamente
            objetoPaciente.id = generarID();
            setPacientes([...pacientes, objetoPaciente])
        }

        // console.log(objetoPaciente)

        //reiniciar el form
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')

    }

    return (
        <div className='md:w-1/2 lg:w-2/5'>
            <h2 className='font-black text-3xl text-center text-pink-300'>Seguimiento Pacientes</h2>

            <p className='font-bold mt-5 text-center my-3 mb-10'>
                Añade Pacientes y {''}
                <span className='text-pink-500 font-bold text-lg'>Administralos</span>
            </p>

            <form
                onSubmit={handleSubmit}
                className='mx-5 mb-10 bg-white shadow-md rounded-lg py-10 px-5'
            >

                {error && <Alerta mensaje="Todos los campos son obligatorios" />}

                <div className='mb-5'>
                    <label
                        htmlFor='mascota'
                        className='block text-gray-700 uppercase font-bold'>
                        Mascota:
                    </label>

                    <input
                        id='mascota'
                        type="text"
                        placeholder='Nombre de la mascota'
                        className='w-full border-2  p-2 mt-2 placeholder-gray-400 rounded-xl'
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='propietario'
                        className='block text-gray-700 uppercase font-bold'>
                        Propietario:
                    </label>

                    <input
                        id='propietario'
                        type="text"
                        placeholder='Nombre del propietario'
                        className='w-full border-2  p-2 mt-2 placeholder-gray-400 rounded-xl'
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='email'
                        className='block text-gray-700 uppercase font-bold'>
                        Email:
                    </label>

                    <input
                        id='email'
                        type="email"
                        placeholder='ejemplo@correo.com'
                        className='w-full border-2  p-2 mt-2 placeholder-gray-400 rounded-xl'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='alta'
                        className='block text-gray-700 uppercase font-bold'>
                        Fecha de alta:
                    </label>

                    <input
                        id='alta'
                        type="date"
                        className='w-full border-2  p-2 mt-2 placeholder-gray-400 rounded-xl'
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className='mb-5'>
                    <label
                        htmlFor='sintomas'
                        className='block text-gray-700 uppercase font-bold'>
                        Sintomas:
                    </label>

                    <textarea
                        className='w-full border-2  p-2 mt-2 placeholder-gray-400 rounded-xl'
                        placeholder='Describe los sintomas'
                        id='sintomas'
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className='bg-pink-700 w-full rounded-full p-3 text-white uppercase font-bold hover:bg-pink-800 cursor-pointer transition-all'
                    value={paciente.id ? 'Editar' : 'Agregar'}
                />



            </form>

        </div>

    )
}
