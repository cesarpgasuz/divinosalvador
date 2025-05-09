import ImagenSagradoCorazon from "../../assets/images/sagrado-corazon.webp";
import Enlaces from "./components/Enlaces";
import styles from "./styles/Index.module.css";

const Index = () => {
  return (

    <>
    <section className="w-full h-auto">
        <div className="contenedor pt-12">
            <div className="">
               <h1 className="flex flex-col items-center"><span className="text-xl">Parroquia de</span> <span className="text-2xl text-sky-900 font-bold text-center">El Divino Salvador</span></h1>
                <p className="text-sm text-slate-700 text-center">Doctor Mora, Guanajuato</p> 
            </div>
            <div>
                <div className={`${styles.image} relative size-[180px] mx-auto`}>
                <img src={ImagenSagradoCorazon} alt="Sagrado Corazon" className={`relative size-[180px] mt-8 rounded-lg shadow-lg object-cover aspect-square`} />
                </div>
            </div>
            
        </div>
    </section>

    <Enlaces />
    </>
    
  )
}

export default Index