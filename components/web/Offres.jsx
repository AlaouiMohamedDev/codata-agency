export default function Offre() {
    return (
        <section className = "flex w-full  bg-offre bg-cover">
            
            <div className = "px-5 py-7 space-y-7 text-gray-900 w-1/2">
                <h1 className = "whitespace-nowrap  items-center font-semibold text-3xl text-center text-gray-200">
                    <span className = ""> La Qualité </span> 
                    <span className = "text-3xl text-white font-black">S'APPRECIE</span> 
                </h1>
                <h2 className = "text-2xl text-center text-gray-900 font-semibold">Votre application de gestion en poche</h2>
                <div className = "flex-col items-center space-y-2 pl-24">
                    <section className= "property">
                        <i className='bx bx-check text-4xl text-gray-800'></i>
                        <p className = "text-gray-100 font-bold text-lg">Gestion des fournisseurs</p>
                    </section>

                    <section className = "property">
                        <i class='bx bx-check text-4xl text-gray-800'></i>
                        <p className = "text-gray-100 font-bold text-lg">Gestion des clients</p>
                    </section>
                    <section className = "property">
                        <i class='bx bx-check text-4xl text-gray-800'></i>
                        <span className = "text-gray-100 font-bold text-lg">Gestions de produits</span>
                    </section>

                    <section className = "property">
                        <i class='bx bx-check text-4xl text-gray-800'></i>
                        <p className = "text-gray-100 font-bold text-lg">Gestions de stock</p>
                    </section>
                    <section className = "property">
                        <i class='bx bx-check text-4xl text-gray-800'></i>
                        <p className = "text-gray-100 font-bold text-lg">Gestion des catégories</p>
                    </section>
                </div>

                <div className = "flex items-center space-x-2 text-2xl text-gray-900 pl-24">
                    <span>
                        A seulement :
                    </span>
                    <span className = "font-black text-gray-900 tracking-wide text-3xl">
                        2500 DH
                    </span>
                </div>

                <div className = "flex items-center space-x-4 px-10">
                    <a className = "cursor-pointer hover:scale-105 transition duration-400 ease-in px-20 py-2 bg-gray-900 text-gray-100 font-semibold rounded">Découvrir</a>
                    <a className = "cursor-pointer hover:scale-105 transition duration-400 ease-in px-20 py-2 whitespace-nowrap text-sm border-2 font-semibold rounded text-gray-900">Contactez-Nous</a>
                </div>
            </div>

            <div className = "px-5 pt-7 space-y-7 text-gray-100 w-1/2">
                <h1 className = " whitespace-nowrap items-center font-semibold text-3xl text-gray-700 text-center">
                    <span className = ""> Votre Site </span> 
                    <span className = "text-3xl text-black font-black">PAS CHER</span> 
                </h1>
                <h2 className = "text-2xl text-center font-semibold text-gray-100">Votre existence web se fait à travers notre pack</h2>
                <div className = "flex-col items-center space-y-2 pl-24">
                    <section className= "property">
                        <i className='bx bx-check text-4xl text-gray-100'></i>
                        <p className = "text-gray-900 font-black text-lg">Jusqu'a 5 pages + page de contact</p>
                    </section>
                    <section className = "property">
                        <i class='bx bx-check text-4xl text-gray-100'></i>
                        <p className = "text-gray-900 font-black text-lg">Hébergement et nom de domaine offert</p>
                    </section>
                    <section className = "property">
                        <i class='bx bx-check text-4xl text-gray-100'></i>
                        <span className = "text-gray-900 font-black text-lg">Affichage responsive</span>
                    </section>
                    <section className = "property">
                        <i class='bx bx-check text-4xl text-gray-100'></i>
                        <p className = "text-gray-900 font-black text-lg">Adresse de messagerie professionnelles</p>
                    </section>
                </div>

                <div className = "flex items-center pt-11 space-x-2 text-2xl text-gray-100 pl-24">
                    <span>
                        A seulement :
                    </span>
                    <span className = "font-black text-gray-900 tracking-wide text-3xl">
                        1200 DH
                    </span>
                </div>

                <div className = "flex items-center space-x-4 px-10">
                    <a className = "cursor-pointer hover:scale-105 transition duration-400 ease-in px-20 py-2 bg-gray-100 text-gray-900 font-semibold rounded">Découvrir</a>
                    <a className = "cursor-pointer hover:scale-105 transition duration-400 ease-in px-20 py-2 whitespace-nowrap text-sm border-2 font-semibold rounded">Contactez-Nous</a>
                </div>
            </div>
        </section>
    )
}
