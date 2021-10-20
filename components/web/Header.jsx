import 'boxicons/css/boxicons.min.css'
import Image from 'next/image'

export default function Header(){
    return(
        <div className = "top-0 absolute items-center px-20 py-4 w-full bg-transparent text-gray-100">
            <section className = "flex justify-between border-b pb-4 ">
                <section className = "space-x-4 text-2xl ">
                    <i className='bx bxl-facebook r hover:text-blue-500 icon'></i> 
                    <i className='bx bxl-twitter  hover:text-blue-300 icon  '></i>
                    <i className='bx bxl-instagram  hover:text-red-400  icon' ></i>
                    <i className='bx bxl-linkedin  hover:text-blue-800 icon'></i>
                </section>
                <section className = "flex space-x-2">
                   <p className = "font-base text-meduim">
                        DES QUESTIONS ? APPELEZ-NOUS :
                   </p>
                   <p className = "font-bold"> 07 01 34 43 84 / 07 06 88 37 91</p>
                </section>
            </section>

            <section className = "flex items-center justify-between mt-5">

                <img src="/logo.png" alt="" srcset="" className = "w-3/12 cursor-pointer" />

                <section className = "flex items-center space-x-12 text-lg">
                    <a className = "link">Notre société</a>
                    <a className = "link">Sites web</a>
                    <a className = "link">Applications Web</a>
                    <a className = "link">Services</a>
                </section>
                <section>
                    <a className = "flex cursor-pointer items-center px-2 py-3 font-semibold bg-transparent border-4 space-x-2 rounded text-meduim bg-gray-200 text-black scale-95 transform duration-200 hover:bg-transparent hover:border-4 hover:scale-100 hover:text-white">
                        <i className='bx bxs-contact text-xl'></i>
                        <p>Contact Us</p>
                    </a>
                </section>

            </section>
            
        </div>
    )
}