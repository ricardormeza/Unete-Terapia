import Head from "next/head"
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar/Navbar'
import Cabezote from './Cabezote'

export default function Layout({children, title = '', description = '', abstract = '',author = '',copyright = '', keywords= '',robots= '',}) {
    return (
        <>
        <Head>
            <title>{`${title} - UNETE`}</title>
            <meta name="description" content={description} />
            <meta name="abstract" content={abstract} />
            <meta name="author" content={author} />
            <meta name="copyright" content={copyright} />
            <meta name="keywords" content={keywords} />
            <meta name="robots" content={robots} />
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
