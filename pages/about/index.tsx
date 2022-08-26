import type { NextPage } from 'next'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import { languagesList, toolsList } from '../../data/toolsList'

const Home: NextPage = () => {
    return (
        <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
            <div className="backdrop-blur">
                <NavBar />
                <div className="flex flex-col lg:flex-row w-full gap-x-12 md:gap-y-12 md:px-16 px-4 lg:px-20">
                    <div>
                        <div className="flex flex-row gap-x-2 mt-10 font-bold text-3xl md:text-4xl lg:text-5xl">
                            <p className="text-white">Know Who</p>
                            <p className="text-purple-500">I&apos;M</p>
                        </div>
                        <p className="text-white text-xl md:text-2xl lg:text-3xl mt-4 leading-relaxed">
                            Hi Everyone, I am <span className="text-purple-500">Alzobair Mohammed </span>
                            from <span className="text-purple-500"> Khartoum, Sudan.</span>
                            <br />I am a software developer with a  bechloras in Civil enginerring (LOL).
                            <br />
                            <br />
                            Apart from coding, some other activities that I love to do:
                            <br />&emsp;- Learning new languages.
                            <br />&emsp;- Swimming.
                            <br />&emsp;- Reading books.
                            <br />&emsp;- Watching anime and tv series.
                            <br />&emsp;- Playing league of legends.
                        </p>
                    </div>
                    <img alt="illustration" className="mt-20 px-10 md:px-5 lg:px-0" src="/images/illustration.png"/>
                </div>
                <div className="grid place-items-center mt-40">
                    <p className="text-white uppercase text-xl md:text-2xl lg:text-3xl font-bold">Languages used</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 mt-16">
                        {
                            languagesList.map(tool => {
                                return <div key={tool.index}
                                    className="grid place-items-center pt-4 w-32 h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 transition duration-500 hover:scale-110 border-purple-500 border-2 bg-transparent rounded-md">
                                    <img alt="Language icon" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" src={tool.icon}/>
                                    <p className="text-white text-xl md:text-2xl lg:text-3xl">{tool.name}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="grid place-items-center mt-40 mb-20">
                    <p className="text-white uppercase text-xl md:text-2xl lg:text-3xl font-bold">Framework or tools used</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12 mt-16">
                        {
                            toolsList.map(tool => {
                                return <div key={tool.index}
                                    className="grid place-items-center pt-4 w-32 h-40 md:w-36 md:h-44 lg:w-40 lg:h-48 transition duration-500 hover:scale-110 border-purple-500 border-2 bg-transparent rounded-md">
                                    <img alt="Tool icon" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28" src={tool.icon}/>
                                    <p className="text-white text-xl md:text-2xl lg:text-3xl">{tool.name}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default Home
