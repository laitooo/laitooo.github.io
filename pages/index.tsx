import type { NextPage } from 'next'
import Footer from '../components/footer'
import NavBar from '../components/navbar'

const Home: NextPage = () => {
    return (
        <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
            <div className="backdrop-blur-sm">
                <NavBar />
                <div className="mx-10 md:mx-16 lg:mx-40 my-10 flex flex-col md:flex-row">
                    <img alt="Profile" src="/images/profile.png" className="w-48 h-48" />
                    <div className="pl-0 md:pl-10 leading-loose lg:leading-normal">
                        <p className="pt-10 text-4xl lg:text-5xl text-white font-semibold uppercase">Alzobair Mohammed</p>
                        <p className="pt-5 text-2xl lg:text-3xl text-white font-medium">Senior software developer</p>
                    </div>
                </div>
                <div className="grid place-items-center mt-20 md:mx-16 py-12 mx-4 lg:mx-40 card bg-violet-700/[.35]">
                    <p className="text-white uppercase text-3xl lg:text-4xl font-bold">About</p>
                    <p className="mt-10 mx-4 lg:mx-20 lg:leading-10 text-white text-center text-xl">Hello! I&apos;m Alzobair, a senior software developer; Experienced in mobile apps development. Interested in developing games and learning everything. Enjoys implementing Artificial intelligence ideas in mobile apps.</p>
                    <a href="/files/alziberMohammedCv.pdf" className="btn btn-wide btn-outline mt-10" target="_blank" download="">Download my cv</a>
                </div>
                <div className="grid place-items-center mx-4 md:mx-16 lg:mx-40 my-20 py-12 card bg-violet-700/[.35]">
                    <p className="text-white uppercase text-3xl lg:text-4xl font-bold">What i do</p>
                    <div className="px-10 pt-10 flex flex-col gap-8 md:gap-4 md:flex-row">
                        <div className="grid place-items-center">
                            <img alt="Android" src="/icons/android.svg" className="mt-5 h-32" />
                            <h4 className="my-5 text-3xl">Android</h4>
                            <p className="text-white text-center text-xl">As an Android developer, I have experience in devloping android mobile apps using Java, Kotlin and XML</p>
                        </div>
                        <div className="grid place-items-center">
                            <img alt="Android" src="/icons/flutter.svg" className="mt-5 h-32" />
                            <h4 className="my-5 text-3xl">Flutter</h4>
                            <p className="text-white text-center text-xl">Utilising flutter frameworks with Dart language, I&apos;ve developed many several mobile and web applications</p>
                        </div>
                        <div className="grid place-items-center">
                            <img alt="Android" src="/icons/unity.png" className="mt-5 h-32" />
                            <h4 className="my-5 text-3xl text-center">Game development</h4>
                            <p className="text-white text-center text-xl">In my free time i used in unity with C# to develop clones from famous games like plants vs zombies</p>
                        </div>
                    </div>
                </div>
                <Footer data-theme="synthwave" />
            </div>
        </div>
    )
}

export default Home
