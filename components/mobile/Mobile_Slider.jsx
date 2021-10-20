import { Carousel } from "react-responsive-carousel";

export default function Mobile_Slider() {
    return (
        <Carousel
            className = "max-h-22 w-full"
            autoPlay
            infiniteLoop
            showStatus
            showThumbs={false}
            showStatus={false}
            
            swipeable ={false}
            
            showIndicators={false}
            interval={5000}
        >
            {/* E-commerce */}

            <section className ="h-full flex flex-col items-center relative">
                <img src = "/e-commerce.png" alt="p1" className="h-full absolute"/>
                <div className = "pt-64 text-left text-gray-100 z-50">
                    <div className = "px-5 space-y-4">
                        <h1 className = "text-3xl flex space-x-1 text-gray-100">
                            <p className = "">Site</p>  
                           <p className = "font-bold">E-commerce</p>
                        </h1>
                        <p className = "text-blue-100 text-lg">Notre agence web vous aide a atteindre vos objectifs</p>
                        <section className = "space-y-2 ">
                            <section className= "property">
                                <i className='bx bx-check text-3xl text-blue-200'></i>
                                <p className = ""> Pages et produits illimités</p>
                            </section>
                            <section className = "property">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Hébergement et nom de domaine</p>
                            </section>
                            <section className = "property">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Affichage responsive</p>
                            </section>
                            <section className = "property">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Adresse de messagerie professionnelles</p>
                            </section>
                        </section>
                        <section>
                            <h1 className = "text-lg">A seulement :</h1>
                            <p className = "text-3xl font-bold text-gray-100">3000 DH</p>
                        </section>
                        <div className = "flex items-center text-xs w-full justify-center">
                            <a className = "flex cursor-pointer items-center px-1 py-3 font-semibold bg-transparent border-4 space-x-1 rounded text-meduim bg-gray-200 text-black scale-95 transform duration-200 hover:bg-transparent hover:border-4 hover:scale-100 hover:text-white">
                                <i class='bx bxs-contact text-xl'></i>
                                <p className="text-sm whitespace-nowrap">Contactez Nous</p>
                            </a>
                        </div>
                    </div>
                    <img src="/e-commerce2.png" alt="" className = "-mt-1 w-screen h-2/6" /> 
                </div>
                
            </section>

            {/* Gestion */}
            
            <section className ="h-full flex flex-col items-center relative">
            <img src = "/gestion-pic.png" alt="p1" className="h-full absolute"/>
            <div className = "pt-64 text-left text-gray-100 z-50">
                <div className = "px-5 space-y-4">
                    <h1 className = "text-3xl flex space-x-1 text-gray-100">
                        <p className = "">Site des  </p>  
                       <p className = "font-bold">Gestions</p>
                    </h1>
                    <p className = "text-blue-100 text-lg">L'assistance qu'il vous faut pour mieux gérer votre restaurant</p>
                    <section className = "space-y-2 ">
                        <section className= "property">
                            <i className='bx bx-check text-3xl text-blue-200'></i>
                            <p className = ""> Gestion des clients et de fournisseurs</p>
                        </section>
                        <section className = "property">
                            <i class='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Gestion de stock et de produits</p>
                        </section>
                        <section className = "property">
                            <i class='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Gestion des tables et des cuisines</p>
                        </section>
                        <section className = "property">
                            <i class='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Roles de serveurs et de chefs</p>
                        </section>
                    </section>
                    <section>
                        <h1 className = "text-lg">A seulement :</h1>
                        <p className = "text-3xl font-bold text-gray-100">2500 DH</p>
                    </section>
                    <div className = "flex items-center text-xs w-full justify-center">
                    <a className = "flex cursor-pointer items-center px-1 py-3 font-semibold bg-transparent border-4 space-x-1 rounded text-meduim bg-gray-200 text-black scale-95 transform duration-200 hover:bg-transparent hover:border-4 hover:scale-100 hover:text-white">
                        <i class='bx bxs-contact text-xl'></i>
                        <p className="text-sm whitespace-nowrap">Contactez Nous</p>
                    </a>
                </div>
                </div>
                <img src="/gestion-bg.png" alt="" className = "mt-5 w-screen" /> 
            </div>
            
            </section>

            {/* Vitrine */}

            <section className ="h-full flex flex-col items-center relative">
                <img  src = "/bg-vitrine.png" alt="p1" className= "h-full absolute"/>
                <div className = "pt-64 text-left text-gray-100 z-50">
                <div className = "px-5 space-y-4">
                    <h1 className = "text-3xl flex space-x-1 text-gray-100">
                        <p className = "">Site </p>  
                       <p className = "font-bold">Vitrine</p>
                    </h1>
                    <p className = "text-blue-100 text-lg">Notre agence web vous accompagne lors de vos premiers pas dans le monde numérique</p>
                    <section className = "space-y-2 ">
                        <section className= "property">
                            <i className='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Jusqu'a 5 pages + page de contact</p>
                        </section>
                        <section className = "property">
                            <i class='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Hébergement et nom de domaine offert</p>
                        </section>
                        <section className = "property">
                            <i class='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Affichage responsive</p>
                        </section>
                        <section className = "property">
                            <i class='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Adresse de messagerie professionnelles</p>
                        </section>
                    </section>
                    <section>
                        <h1 className = "text-lg">A seulement :</h1>
                        <p className = "text-3xl font-bold text-gray-100">1200 DH</p>
                        </section>
                        <div className = "flex items-center text-xs w-full justify-center">
                        <a className = "flex cursor-pointer items-center px-1 py-3 font-semibold bg-transparent border-4 space-x-1 rounded text-meduim bg-gray-200 text-black scale-95 transform duration-200 hover:bg-transparent hover:border-4 hover:scale-100 hover:text-white">
                            <i class='bx bxs-contact text-xl'></i>
                            <p className="text-sm whitespace-nowrap">Contactez Nous</p>
                        </a>
                    </div>
                </div>
                <img src="https://creaweb.ma/wp-content/uploads/2020/01/header-vitrine2-1.png" alt="" className = "mt-5 w-screen" /> 
            </div>

            </section>

            
            {/* Immobillier */}

            <section className ="h-full flex flex-col items-center relative">
                <img  src = "/bg1.png" alt="p1" className= "h-full absolute"/>
                <div className = "pt-64 text-left text-gray-100 z-50">
                <div className = "px-5 space-y-4">
                    <h1 className = "text-3xl flex space-x-1 text-gray-100">
                        <p className = "">Site </p>  
                       <p className = "font-bold">Spécial agence immobiliere</p>
                    </h1>
                    <p className = "text-blue-100 text-lg">Ne perdez pas de temps. Creez votre site web !</p>
                    <section className = "space-y-2 ">
                        <section className= "property">
                            <i className='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Pages et biens illimitees</p>
                        </section>
                        <section className = "property">
                            <i class='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Hébergement et nom de domaine offert</p>
                        </section>
                        <section className = "property">
                            <i class='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Affichage responsive</p>
                        </section>
                       
                    </section>
                    <section>
                        <h1 className = "text-lg">A seulement :</h1>
                        <p className = "text-3xl font-bold text-gray-100">5000 DH</p>
                        </section>
                        <div className = "flex items-center text-xs w-full justify-center">
                        <a className = "flex cursor-pointer items-center px-1 py-3 font-semibold bg-transparent border-4 space-x-1 rounded text-meduim bg-gray-200 text-black scale-95 transform duration-200 hover:bg-transparent hover:border-4 hover:scale-100 hover:text-white">
                            <i class='bx bxs-contact text-xl'></i>
                            <p className="text-sm whitespace-nowrap">Contactez Nous</p>
                        </a>
                    </div>
                </div>
                <img src="/hosting.png" alt="" className = "mt-4 w-screen h-2/5" /> 
            </div>

            </section>

                    </Carousel>
        
    )
}
