const Footer = props => {
    return (
        <footer className = "w-full mt-7 bg-gray-900  text-left p-7">
            <section className = "flex justify-between px-8 items-center w-full border-b border-gray-700 py-6">
                <div className = "space-y-3">
                    <h4 className = "text-green-300">Meilleur Référencement</h4>
                    <h1 className = "text-2xl font-bold text-gray-100">Commencez Maintenant Votre Site </h1>
                    <div className = "flex items-center space-x-2">
                        <form action="/">
                            <input type="email" className = "outline-none bg-transparent border-b-2 text-gray-50 text-sm px-1" placeholder="Votre Email"/>
                            <button type="submit">
                                <i className='bx bxs-send text-gray-300 cursor-pointer hover:scale-105 transition duration-300'></i>
                            </button>
                        </form>
                    </div>
                </div>
                <img src="/logoAlt.png" alt="" srcSet="" className = "h-14 	"/>
            </section>

            <section className = "flex justify-between px-8 items-center w-full  py-6">
                <p className = "text-gray-400">
                    Poinnier Votre Projet Avec Codata agency
                </p>
                <div className = "grid grid-cols-4 space-y-2 space-x-3 items-center text-left">
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Foire aux questions</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Site e-commerce</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Site vitrine</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Site gestion</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Site immbolier</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Nos avantages</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Contact</h5>
                </div>
                <div className = "grid grid-cols-4 space-y-2 space-x-3 items-center text-left">
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Foire aux questions</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Site e-commerce</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Site vitrine</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Site gestion</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Site immbolier</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Nos avantages</h5>
                    <h5 className = "cursor-pointer text-gray-500 text-xs ">Contact</h5>
                </div>


                

                

            </section>
        </footer>
    )
}


export default Footer
