import Head from 'next/head'
import Header from '../components/web/Header'
import Slider from '../components/web/Slider'
import { BrowserView, isBrowser, isMobile, MobileView} from 'react-device-detect';
import Mobile_Header from '../components/mobile/Mobile_Header';
import Mobile_Slider from '../components/mobile/Mobile_Slider';
import { useEffect, useState } from 'react';
import Strategie from '../components/web/Strategie';
import Mobile_Strategie from '../components/mobile/Mobile_Strategie';
import Mobile_Offre from '../components/mobile/Mobile_Offre';
import Offre from '../components/web/Offres';


export default function Home() {

  const [mobile,setMobile] = useState()
  const [browser,setBrowser] = useState()

  useEffect(() => {
    setMobile(isMobile)
    setBrowser(isBrowser)
  }, [])

 

  return (

    
    <>

      <div className = "font-poppins">
            <MobileView>
              <Head>
                <title>Mobile web, spécialisée en création de sites internet | codata-agency.com </title>
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
              </Head>
              <Mobile_Header />
              <Mobile_Slider /> 
              <Mobile_Strategie />
              <Mobile_Offre />
            </MobileView>
       </div>
        
      

      <div className = "font-poppins flex flex-col">
      <BrowserView >
          
            <Head>
              <title>Agence web, spécialisée en création de sites internet | codata-agency.com </title>
              <link rel="icon" href="/favicon.ico" />
              <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet" />
            </Head>

            <Slider/> 

            <Header />
              
                {/* Planification et stratégie */}

            <Strategie />

            <Offre />

                {/* Offre */}



            {/* Footer */}
            

      </BrowserView>

    </div>

    

    
    </>
  )
}
