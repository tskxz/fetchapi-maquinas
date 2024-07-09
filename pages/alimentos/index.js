import Head from "next/head"
import Link from "next/link"
import Script from "next/script"
import Layout from "../../components/layout"

export default function Alimentos() {
    return (
        <Layout>
            <Head>
                <title>Alimentos</title>
            </Head>
            <Script src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() =>
                    console.log(`script loaded correctly, window.FB has been populated`)
                }></Script>
            <h1>Alimentos</h1>
            <h2>
                <Link href="/">Página principal</Link>
            </h2>
            
        </Layout>
    )
}