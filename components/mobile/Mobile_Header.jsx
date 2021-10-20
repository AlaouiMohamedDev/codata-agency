import 'boxicons/css/boxicons.min.css'

export default function Mobile_Header() {

    
        const audio = new Audio();
        audio.src = "./click.wav"
        
        function sidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.classList.remove('-left-full')
            sidebar.classList.add('left-0')
            audio.play()
        }
        function closeSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.classList.add('-left-full')
            sidebar.classList.remove('left-0')
            audio.play()
        }

        
    

    return (
        <header className = "w-full absolute z-30 top-0 px-3 py-2 text-gray-100 bg-transparent">

            {/* Top Header */}

            <div className = "border-b pb-3">

                <section className = "flex items-center justify-evenly p-3 text-2xl">
                    <i className='bx bxl-facebook  hover:text-blue-500 icon'></i> 
                    <i className='bx bxl-twitter  hover:text-blue-300 icon  '></i>
                    <i className='bx bxl-instagram  hover:text-red-400  icon' ></i>
                    <i className='bx bxl-linkedin  hover:text-blue-800 icon'></i>
                </section>
                <section className = " flex-col items-center text-center space-y-1">
                    <p className = "font-base text-meduim">
                        DES QUESTIONS ? APPELEZ-NOUS 
                    </p>
                    <p className = "font-bold"> 07 01 34 43 84 / 07 06 88 37 91</p>
                </section>

            </div>

            {/* Bottom Header*/}

            <div className = "relative flex items-center pr-10 pt-5">
                <img src="/logo.png" alt="" srcset="" className = " pr-11 " />
                <section className = "text-right px-2 ">
                    <i className='bx bx-menu text-3xl' onClick= {sidebar}></i>
                </section>
            </div>

            {/* Menu */}

            <section className = "sidebar flex flex-col justify-between  bg-gray-900 fixed h-screen w-screen top-0 py-7 px-2 transition duration-700 ease-in-out -left-full">
                <div className = "flex justify-between items-center px-3 border-b pb-7">
                    <span className = "text-3xl">Menu</span>
                    <i onClick = {closeSidebar} className='bx bx-x text-gray-100 text-3xl border-2 rounded hover:bg-gray-100 hover:text-gray-900 '></i>
                </div>
                <div className = "-mt-32 flex flex-col space-y-10 px-3 text-lg">
                    <a className = "">Notre société</a>
                    <a className = "">Sites web</a>
                    <a className = "">Applications Web</a>
                    <a className = "">Services</a>
                </div>
                <div className = "mx-auto w-3/4">
                    <img src="/logo.png" alt="" srcset="" className = "" />
                </div>
            </section>

        </header>
    )
}
