import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import { useState } from 'react'
import NavBar from '../components/navbar'

const Home: NextPage = () => {
    return (
        <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
            <div className="backdrop-blur-sm">
                <NavBar />
                <div className="mx-40 my-10 flex flex-row">
                    <img src="/images/profile.png" className="w-48 h-48" />
                    <div className="pl-10">
                        <p className="pt-10 text-5xl text-white font-semibold uppercase">Alzobair Mohammed</p>
                        <p className="pt-5 text-3xl text-white font-medium">Senior software developer</p>
                    </div>
                </div>
                <div className="grid place-items-center mt-20 py-20 mx-40 card bg-violet-700/[.35]">
                    <p className="text-white uppercase text-4xl font-bold">About</p>
                    <p className="mt-10 mx-20 leading-10 text-white text-center text-xl">Hello! I'm Alzobair, a senior software developer; Experienced in mobile apps development. Interested in developing games and learning everything. Enjoys implementing Artificial intelligence ideas in mobile apps.</p>
                    <a href="/files/alziberMohammedCv.pdf" className="btn btn-wide btn-outline mt-10" target="_blank" download="">Download my cv</a>
                </div>
                <div className="grid place-items-center mx-40 my-20 py-20 card bg-violet-700/[.35]">
                    <p className="text-white uppercase text-4xl font-bold">What i do</p>
                    <div className="px-10 pt-10 flex flex-row">
                        <div className="grid place-items-center">
                            <img src="/icons/android.svg" className="mt-5 h-32" />
                            <h4 className="my-5 text-2xl">Android</h4>
                            <p className="text-white text-center text-large">As an Android developer, I have experience in devloping android mobile apps using Java, Kotlin and XML</p>
                        </div>
                        <div className="grid place-items-center">
                            <img src="/icons/flutter.svg" className="mt-5 h-32" />
                            <h4 className="my-5 text-2xl">Flutter</h4>
                            <p className="text-white text-center text-large">Utilising flutter frameworks with Dart language, I've developed many several mobile and web applications</p>
                        </div>
                        <div className="grid place-items-center">
                            <img src="/icons/unity.png" className="mt-5 h-32" />
                            <h4 className="my-5 text-2xl">Game development</h4>
                            <p className="text-white text-center text-large">In my free time i used in unity with C# to develop clones from famous games like plants vs zombies</p>
                        </div>
                    </div>
                </div>
                <Footer data-theme="synthwave" />
            </div>
        </div>
    )
}

export default Home
