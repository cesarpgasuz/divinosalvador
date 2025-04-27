import { Link } from "react-router";
import { getIcon, IconArrowTopRight } from "../../../utilities/icons"

function Enlaces() {

    const ENLACES = [
        { id: 1, nombre: 'Confesiones', url: '/confesiones', icono: 'cura' },
        { id: 2, nombre: 'Celebraciones', url: '/celebraciones', icono: 'biblia' },
        { id: 4, nombre: 'Catecismo', url: '/catecismo', icono: 'angel' },
        { id: 5, nombre: 'Retiros', url: '/retiros', icono: 'corazon' },
    ]


  return (
    <section className='w-full h-auto'>
        <div className="contenedor py-12">
            <div className="flex flex-col gap-5">
                {ENLACES.map(enlace => {

                    const Icon = getIcon(enlace.icono);

                    return(
                        <Link key={enlace.id} to={enlace.url} className="border bg-slate-100/10 border-slate-600/10 rounded-md flex px-3 py-2.5 items-center gap-4">
                            <Icon className='size-[60px]' />
                            <span>{enlace.nombre}</span>
                            <IconArrowTopRight className='size-[20px] ml-auto' />
                        </Link>
                    )

                })}
            </div>
                
        </div>
    </section>
  )
}

export default Enlaces