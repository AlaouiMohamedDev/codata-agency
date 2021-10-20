export default function Strategie() {
    return (
        <div className = "flex py-32 px-10 bg-gray-50 w-full space-x-10">
            <div className="strat-img" >
                <img src="/strategie-1.png" alt="" className="w-full " />
            </div>
            <div className="flex flex-col text-left space-y-6 w-2/3">
                <h1 className="text-3xl text-gray-800 text-justify	w-4/5">La charte de travail de notre <span className = "text-green-900 font-black">agence web</span></h1>
                <h4 className="text-2xl text-green-500">Votre projet digital en trois étapes</h4>
                <div className="flex items-center">
                        <div className="">
                            <img src="/icons/planning.png" className="w-36"/>
                        </div>
                        <div className="flex flex-col pl-3 space-y-1 ">
                            <h3 className="strategie-title">Planification et stratégie</h3>
                            <p className="strategie-text">En tant qu’agence web, nous passons à l’action de manière agile afin de vous délivrer la prestation dans les plus brefs délais </p>
                        </div>
                </div>
                <div className="flex items-center">
                        <div className="">
                            <img src="/icons/Conception.png" className="w-36"/>
                        </div>
                        <div className="flex flex-col pl-3 space-y-1">
                            <h3 className="strategie-title">Conception et développement</h3>
                            <p className="strategie-text">Nous agissons interactivement pour que le déroulé de la
                            création soit en phase avec les dernières tendances du Web.</p>
                        </div>
                </div>
                <div className="flex items-center">
                        <div>
                            <img src="/icons/str3.png" className="w-32"/>
                        </div>
                        <div className="flex flex-col pl-3 space-y-1">
                            <h3 className="strategie-title">Test et livraison</h3>
                            <p className="strategie-text">Une fois la mission achevée, nous attaquons les tests requis
                            afin d’aplanir tout enchevêtrement</p>
                        </div>
                </div>
            </div>
        </div>
    )
}
