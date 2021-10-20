import { useRouter } from "next/dist/client/router"

export default function Mobile_Offre() {

    const router = useRouter();

    return (
        <section className = "w-full">
            <div className = "px-5 py-7 space-y-7 text-gray-100 bg-vitrine">
                <h1 className = " whitespace-nowrap items-center font-semibold text-3xl text-gray-800">
                    <span className = ""> Votre Site </span> 
                    <span className = "text-3xl text-black font-black">PAS CHER</span> 
                </h1>
                <h2 className = "text-xl text-gray-100">Votre existence web se fait à travers notre pack</h2>
                <div className = "flex-col items-center space-y-2">
                    <section className= "property">
                        <i className='bx bx-check text-3xl text-gray-100'></i>
                        <p className = "text-gray-800 font-semibold text-sm">Jusqu'a 5 pages + page de contact</p>
                    </section>
                    <section className = "property">
                        <i class='bx bx-check text-3xl text-gray-100'></i>
                        <p className = "text-gray-800 font-semibold text-sm">Hébergement et nom de domaine offert</p>
                    </section>
                    <section className = "property">
                        <i class='bx bx-check text-3xl text-gray-100'></i>
                        <span className = "text-gray-800 font-semibold text-sm">Affichage responsive</span>
                    </section>
                    <section className = "property">
                        <i class='bx bx-check text-3xl text-gray-100'></i>
                        <p className = "text-gray-800 font-semibold text-sm">Adresse de messagerie professionnelles</p>
                    </section>
                </div>

                <div className = "flex items-center space-x-2 text-xl text-gray-100">
                    <span>
                        A seulement :
                    </span>
                    <span className = "font-black text-black tracking-wide text-2xl">
                        1200 DH
                    </span>
                </div>

                <div className = "flex flex-col items-center space-y-3 ">
                    <a onClick = {() => router.push('/vitrine')} className = "px-28 py-2 bg-gray-100 text-gray-900 font-semibold rounded">Découvrir</a>
                    <a onClick = {() => router.push('/contact')} className = "px-20 py-2 whitespace-nowrap text-ms border-2 font-semibold rounded">Contactez-Nous</a>
                </div>
            </div>

            <div className = "px-5 py-7 space-y-7 text-gray-800 bg-commerce">
                <h1 className = "whitespace-nowrap  items-center font-semibold text-3xl text-gray-200">
                    <span className = ""> La Qualité </span> 
                    <span className = "text-3xl text-white font-black">S'APPRECIE</span> 
                </h1>
                <h2 className = "text-xl text-gray-800">Votre application de gestion en poche</h2>
                <div className = "flex-col items-center space-y-2">
                    <section className= "property">
                        <i className='bx bx-check text-3xl text-gray-800'></i>
                        <p className = "text-gray-100 font-semibold text-sm">Gestion des fournisseurs</p>
                    </section>

                    <section className = "property">
                        <i class='bx bx-check text-3xl text-gray-800'></i>
                        <p className = "text-gray-100 font-semibold text-sm">Gestion des clients</p>
                    </section>

                    <section className = "property">
                        <i class='bx bx-check text-3xl text-gray-800'></i>
                        <span className = "text-gray-100 font-semibold text-sm">Gestions de produits</span>
                    </section>

                    <section className = "property">
                        <i class='bx bx-check text-3xl text-gray-800'></i>
                        <span className = "text-gray-100 font-semibold text-sm">Gestions de produits</span>
                    </section>

                    <section className = "property">
                        <i class='bx bx-check text-3xl text-gray-800'></i>
                        <p className = "text-gray-100 font-semibold text-sm">Gestions de stock</p>
                    </section>
                    <section className = "property">
                        <i class='bx bx-check text-3xl text-gray-800'></i>
                        <p className = "text-gray-100 font-semibold text-sm">Gestion des catégories</p>
                    </section>
                </div>

                <div className = "flex items-center space-x-2 text-xl text-gray-900">
                    <span>
                        A seulement :
                    </span>
                    <span className = "font-black text-black tracking-wide text-2xl">
                        2500 DH
                    </span>
                </div>

                <div className = "flex flex-col items-center space-y-3 ">
                    <a onClick = {() => router.push('/gestion')} className = "px-28 py-2 bg-gray-900 text-gray-100 font-semibold rounded">Découvrir</a>
                    <a onClick = {() => router.push('/contact')} className = "px-20 py-2 whitespace-nowrap text-ms border-2 font-semibold rounded text-gray-900">Contactez-Nous</a>
                </div>
            </div>
        </section>
    )
}
