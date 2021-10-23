import Head from 'next/head'
import { BrowserView } from 'react-device-detect';
import Header from "../components/web/Header";

 export default function Contact() {
    return (
        <>
            <div className = "font-poppins flex flex-col">
                <BrowserView>
                
                    <Head>
                        <title>CODATA-AGENCY.com - Contact </title>
                        <link rel="icon" href="/favicon.ico" />
                        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
                    </Head>
                        <Header />
                </BrowserView>
            </div>
        </>
    )
}
