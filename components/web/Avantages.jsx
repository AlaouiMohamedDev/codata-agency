import items from '../json/avantages_items';

export default function Avantages(){
    return(
        <div className = "container space-y-12 mt-12 text-center mx-auto ">
            <div className = "space-y-2">
                <h1 className = "text-3xl text-gray-800">
                    Découvrez nos principaux <span className = "text-green-900 font-black">avantages</span>
                </h1>
                <h3 className = "text-xl text-green-500">
                    Pourquoi faire appel à notre agence web ?
                </h3>
            </div>
            <div  className = "grid grid-cols-4 gap-4 py-7">
                {
                    items.map(item => (
                        <section className = "group  items-center flex flex-col space-y-1 hover:scale-105 transition duration-200 ease-out cursor-text w-3/4 mx-auto">
                            <img src={item.img} alt="" className = "h-11" />
                            <h4 className = "text-md text-gray-900 font-semibold group-hover:font-bold">{item.title}</h4>
                            <p className = "text-xs text-gray-400 text-center group-hover:text-gray-700">
                                {item.p}
                            </p>
                        </section>
                    ))
                }
            </div>

                
               
            
        </div>
    )
}