import type { NextPage } from 'next'
import Head from 'next/head'
import HomePageMainDoorContainer from "../components/homePageContainer/mainDoor"
import Image from 'next/image'
import HomePageContent from "../components/homePageContainer/contents/homePageContents";
// import styles from '../styles/Home.module.css';
import Link from 'next/link'

const Home: NextPage = (): any => {
  return (
    <div className="min-h-screen p-0 flex flex-col justify-center h-screen items-center">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full h-full">
        <HomePageMainDoorContainer />
        <HomePageContent/>
      </section>
    </div>
  )
}

export default Home
