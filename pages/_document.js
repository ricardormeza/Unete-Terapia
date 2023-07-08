import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="es-MX">
            <Head>


                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
                <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Poppins:wght@300;400;500;600&family=Source+Sans+Pro:wght@400;600;700&display=swap" rel="stylesheet"/>
                <link rel="preconnect" as="style" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" />
                <link rel="icon" href="/images/unete.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}