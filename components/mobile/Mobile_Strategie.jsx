export default function Mobile_Strategie() {
    return (
        <div className = "flex flex-col py-10 px-9 bg-gray-50 w-full space-y-6">
            <div className="" >
                <img src="/strategie-1.png" alt="logo" className="" />
            </div>
            <div className="flex flex-col items-center text-center space-y-6">
                <h1 className="text-2xl text-gray-900 w-full font-semibold">La charte de travail de notre 
                        <span className = "text-green-700 font-black"> agence web</span>
                </h1>
                <h4 className="text-xl text-green-400">Votre projet digital en trois étapes</h4>
                <div className="flex flex-col items-center space-y-3">
                        <div className="">
                            <img src="/icons/planning.png" className="w-20"/>
                        </div>
                        <div className="flex flex-col pl-3 space-y-2 ">
                            <h3 className="strategie-title whitespace-nowrap">Planification et stratégie</h3>
                            <p className="text-sm  w-full text-gray-500">En tant qu’agence web, nous passons à l’action de manière agile afin de vous délivrer la prestation dans les plus brefs délais </p>
                        </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                        <div className="">
                            <img src="/icons/Conception.png" className="w-20"/>
                        </div>
                        <div className="flex flex-col pl-3 space-y-2">
                            <h3 className="strategie-title ">Conception et développement</h3>
                            <p className="text-sm text-center  w-full text-gray-500">Nous agissons interactivement pour que le déroulé de la
                            création soit en phase avec les dernières tendances du Web.</p>
                        </div>
                </div>
                <div className="flex flex-col items-center space-y-3">
                        <div>
                            <img src="/icons/str3.png" className="w-20"/>
                        </div>
                        <div className="flex flex-col pl-3 space-y-2">
                            <h3 className="strategie-title">Test et livraison</h3>
                            <p className="text-sm  w-full text-gray-500">Une fois la mission achevée, nous attaquons les tests requis
                            afin d’aplanir tout enchevêtrement</p>
                        </div>
                </div>
            </div>
        </div>

    )
}
