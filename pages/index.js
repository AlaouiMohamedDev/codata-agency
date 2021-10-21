import Head from 'next/head'
import Header from '../components/web/Header'
import Slider from '../components/web/Slider'
import { BrowserView,MobileView} from 'react-device-detect';
import Mobile_Header from '../components/mobile/Mobile_Header';
import Mobile_Slider from '../components/mobile/Mobile_Slider';
import Strategie from '../components/web/Strategie';
import Mobile_Strategie from '../components/mobile/Mobile_Strategie';
import Mobile_Offre from '../components/mobile/Mobile_Offre';
import Offre from '../components/web/Offres';
import Avantages from '../components/web/Avantages';
import Mobile_Avantages from '../components/mobile/Mobile_Avantages';


export default function Home() {

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
              <Mobile_Avantages />
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

            {/* Offre */}

            <Offre />

            {/* avantages */}
<Avantages />

            {/* Footer */}
        </BrowserView>
    </div>

    

    
    </>
  )
}
