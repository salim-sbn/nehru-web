import Head from 'next/head'
import Layout from '../components/layout'
import { ContactUsInner } from '../components/contactUsInner'

export default function ContactUs () {
  return (
        <Layout>
            <Head>
                <title>Nehru Institute | Contact Us</title>
            </Head>
            <br/>
           <ContactUsInner/>
        </Layout>)
}
