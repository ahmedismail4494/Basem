import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Header from "./../component/HomeComponent/Header";
import Founder from "./../component/HomeComponent/Founder";
import Company from '../component/HomeComponent/Company';
import Advertisement from '../component/HomeComponent/Advertisement';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Basem Group</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Founder />
      <Company />
      <Advertisement />



    </div>
  )
}
