import dynamic from "next/dynamic";

const Mapita = dynamic(() => import('./Mapita'),{
    loading: () => 'Buscando...',
    ssr: false
})

export default function Mymapita() {

    return(
    <>
        <p className="text-center text-pink-600">Dirección <span className="text-green-600">AV. Noventa Norte Poniente #645 entre Quinta y Sexta Poniente</span></p>
        <Mapita />
    </>
    )
    }