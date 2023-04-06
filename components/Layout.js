import Head from "next/head"
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'
import Cabezote from './Cabezote'

export default function Layout({children, title = '', description = ''}) {
    return (
        <>
        <Head>
            <title>{`${title} - UNETE`}</title>
            <meta name="description" content={description} />
            {/* <link rel="icon" href="/unete.ico" /> */}
        </Head>
        <Cabezote/>
        {/* <Header/> */}
            {/* <div className="pt-5">
            </div>
            <div className="pt-5">
            </div> */}
                {children}
        <Footer/>
        </>
    )
}
