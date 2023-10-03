import { Formulario } from "./Formulario"


export const Alerta = ({mensaje}) => {
    return (
            <div className="bg-red-600 text-white text-center p-3 rounded-md mb-3 uppercase font-bold">
                <p>{mensaje}</p>
            </div>

    )
}
