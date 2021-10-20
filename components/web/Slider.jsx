import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
    return (
        <Carousel
            className = "max-h-22"
            autoPlay
            infiniteLoop
            showStatus
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            interval={1000000}
            >
        
                {/* E-commerce */}

            <section className = "max-h-1/5">
                <img  src = "/e-commerce.png" alt="p1"/>
                <div className =" absolute top-44 text-white p-5 text-left content-end justify-between">
                     
                     <section className = "flex flex-col p-16 space-y-5 ">
                        <section className = "w-3/4 space-y-4">
                            <h1 className = "text-3xl  text-gray-100">Site <strong className = "font-extrabold">E-commerce</strong> </h1>
                            <h3 className = "text-blue-100 text-xl w-3/4">Notre agence web vous aide a atteindre vos objectifs</h3>
                        </section>
                        <section>
                            <section className = "flex items-center space-x-2">
                                <i className='bx bx-check text-3xl text-blue-200'></i>
                                <p className = ""> Pages et produits illimités</p>
                            </section>
                            <section className = "flex items-center space-x-2">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Hébergement et nom de domaine offert</p>
                            </section>
                            <section className = "flex items-center space-x-2">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Affichage responsive</p>
                            </section>
                            <section className = "flex items-center space-x-2">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Adresse de messagerie professionnelles</p>
                            </section>
                           
                        </section>

                        <section>
                            <h1 className = "text-xl">A seulement :</h1>
                            <p className = "text-3xl font-bold text-blue-100">3000 DH</p>
                        </section>

                        <section className = "flex items-center space-x-2">
                            <button className = "cursor-pointer items-center px-2 py-3 font-semibold bg-transparent border-4 border-gray-100  space-x-2 rounded text-meduim bg-gray-100 text-black scale-95 transform duration-200 hover:bg-transparent hover:border-4 hover:scale-100 hover:text-gray-400">PLUS D OPTIONS</button>
                            <button className = "cursor-pointer items-center px-2 py-3 font-semibold bg-transparent border-4 border-gray-100  space-x-2 rounded text-meduim  text-gray-100 scale-95 transform duration-200 hover:bg-gray-400 hover:border-4 hover:scale-100 hover:text-black">CONTACTEZ NOUS</button>
                        </section>                            
                     </section>
                </div>

                <section className = "absolute mr-0 -right-52 top-32 w-10/12">
                    <img src="/e-commerce2.png" alt="" className = "" /> 
                </section>

            </section>

            {/* Gestions Des Clients */}

            <section className = "max-h-1/5">
                <img  src = "/gestion-pic.png" alt="p1"/>
                <div className =" absolute top-44 text-white p-5 text-left content-end justify-between">
                 
                 <section className = "flex flex-col p-16 space-y-5 ">
                    <section className = "w-3/4 space-y-4">
                        <h1 className = "text-3xl  text-gray-100">Site des <strong className = "font-extrabold">Gestions</strong> </h1>
                        <h3 className = "text-blue-100 text-xl w-3/4">L'assistance qu'il vous faut pour mieux gérer votre restaurant</h3>
                    </section>
                    <section>
                        <section className = "flex items-center space-x-2">
                            <i className='bx bx-check text-3xl text-blue-200'></i>
                            <p className = ""> Gestion des clients et de fournisseurs</p>
                        </section>
                        <section className = "flex items-center space-x-2">
                            <i className='bx bx-check text-3xl text-blue-200'></i>
                            <p className = ""> Gestion de stock et de produits</p>
                        </section>
                        <section className = "flex items-center space-x-2">
                            <i class='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Gestion des tables et des cuisines</p>
                        </section>
                        <section className = "flex items-center space-x-2">
                            <i class='bx bx-check text-3xl text-blue-200'></i>
                            <p className = "">Roles de serveurs et de chefs</p>
                        </section>
                       
                    </section>

                    <section>
                        <h1 className = "text-xl">A seulement :</h1>
                        <p className = "text-3xl font-bold text-blue-100">2500 DH</p>
                    </section>

                    <section className = "flex items-center space-x-2">
                        <button className = "cursor-pointer items-center px-2 py-3 font-semibold bg-transparent border-4 border-gray-100  space-x-2 rounded text-meduim bg-gray-100 text-black scale-95 transform duration-200 hover:bg-transparent hover:border-4 hover:scale-100 hover:text-gray-400">PLUS D OPTIONS</button>
                        <button className = "cursor-pointer items-center px-2 py-3 font-semibold bg-transparent border-4 border-gray-400  space-x-2 rounded text-meduim  text-gray-200 scale-95 transform duration-200 hover:bg-gray-400 hover:border-4 hover:scale-100 hover:text-black">CONTACTEZ NOUS</button>
                    </section>                            
                 </section>
            </div>

            <section className = "absolute mr-0 -right-20 top-40 w-7/12">
                <img src="/gestion-bg.png" alt="" className = "" /> 
            </section>

        </section>
            


                    {/* Vitrine */} 

                <section className = "max-h-1/5">
                <img  src = "/bg-vitrine.png" alt="p1"/>
                <div className =" absolute top-44 text-white p-5 text-left content-end justify-between">
                     
                     <section className = "flex flex-col p-16 space-y-5 ">
                        <section className = "w-3/4 space-y-4">
                            <h1 className = "text-3xl  text-gray-100">Site <strong className = "font-extrabold">Vitrine</strong> </h1>
                            <h3 className = "text-blue-100 text-xl w-3/4">Notre agence web vous accompagne lors de vos premiers pas dans le monde numérique</h3>
                        </section>
                        <section>
                            <section className = "flex items-center space-x-2">
                                <i className='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Jusqu'a 5 pages + page de contact</p>
                            </section>
                            <section className = "flex items-center space-x-2">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Hébergement et nom de domaine offert</p>
                            </section>
                            <section className = "flex items-center space-x-2">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Affichage responsive</p>
                            </section>
                            <section className = "flex items-center space-x-2">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Adresse de messagerie professionnelles</p>
                            </section>
                           
                        </section>

                        <section>
                            <h1 className = "text-xl">A seulement :</h1>
                            <p className = "text-3xl font-bold text-blue-100">1200 DH</p>
                        </section>

                        <section className = "flex items-center space-x-2">
                            <button className = "cursor-pointer items-center px-2 py-3 font-semibold bg-transparent border-4 border-gray-100  space-x-2 rounded text-meduim bg-gray-100 text-black scale-95 transform duration-200 hover:bg-transparent hover:border-4 hover:scale-100 hover:text-gray-400">PLUS D OPTIONS</button>
                            <button className = "cursor-pointer items-center px-2 py-3 font-semibold bg-transparent border-4 border-gray-400  space-x-2 rounded text-meduim  text-gray-200 scale-95 transform duration-200 hover:bg-gray-400 hover:border-4 hover:scale-100 hover:text-black">CONTACTEZ NOUS</button>
                        </section>                            
                     </section>
                </div>

                <section className = "absolute mr-0 -right-72 top-28 w-10/12">
                    <img src="https://creaweb.ma/wp-content/uploads/2020/01/header-vitrine2-1.png" alt="" className = "" /> 
                </section>

                </section>

                {/* immobilliere */} 

                <section className = "relative max-h-2">
                    <img  src = "/bg1.png" alt="p1"/>
                    <div className =" absolute top-44 text-white p-5 text-left content-end justify-between">
                     
                    <section className = "flex flex-col p-16 space-y-5 ">
                        <section className = "w-3/4 space-y-4">
                            <h1 className = "text-3xl  text-gray-100">Site <strong className = "font-extrabold">Spécial agence immobiliere</strong> </h1>
                            <h3 className = "text-blue-100 text-xl">Ne perdez pas de temps. Creez votre site web !</h3>
                        </section>
                        <section>
                            <section className = "flex items-center space-x-2">
                                <i className='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Pages et biens illimitees</p>
                            </section>
                            <section className = "flex items-center space-x-2">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Hébergement et nom de domaine offert</p>
                            </section>
                            <section className = "flex items-center space-x-2">
                                <i class='bx bx-check text-3xl text-blue-200'></i>
                                <p className = "">Affichage responsive</p>
                            </section>
                           
                        </section>

                        <section>
                            <h1 className = "text-xl">A seulement :</h1>
                            <p className = "text-3xl font-bold text-blue-100">5000 DH</p>
                        </section>

                        <section className = "flex items-center space-x-2">
                            <button className = "cursor-pointer items-center px-2 py-3 font-semibold bg-transparent border-4 border-gray-400  space-x-2 rounded text-meduim bg-gray-400 text-black scale-95 transform duration-200 hover:bg-transparent hover:border-4 hover:scale-100 hover:text-gray-400">PLUS D OPTIONS</button>
                            <button className = "cursor-pointer items-center px-2 py-3 font-semibold bg-transparent border-4 border-gray-400  space-x-2 rounded text-meduim  text-gray-200 scale-95 transform duration-200 hover:bg-gray-400 hover:border-4 hover:scale-100 hover:text-black">CONTACTEZ NOUS</button>
                        </section>                            
                     </section>
                </div>

                <section className = "absolute mr-0 -right-72 top-40 w-10/12">
                        <img src="/hosting.png" alt="" className = "" /> 
                </section>

            </section>

        </Carousel>

    )
}
