import type { NextPage } from 'next'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import { languagesList, toolsList } from '../../data/toolsList'

const Home: NextPage = () => {
    return (
        <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
            <div className="backdrop-blur">
                <NavBar />
                <div className="grid grid-cols-2 grid-flow-col w-full gap-12 px-20">
                    <div>
                        <div className="flex flex-row mt-10 text-5xl">
                            <p className="text-white">Know Who</p>
                            <p className="text-purple-500">I'M</p>
                        </div>
                        <p className="text-white text-xl mt-10 leading-relaxed">
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
                    <img className="pl-20 mt-24" src="/images/illustration.png"></img>
                </div>
                <div className="grid place-items-center mt-40">
                    <p className="text-white uppercase text-3xl">Languages used</p>
                    <div className="grid grid-cols-4 gap-y-12 gap-x-12 mt-16">
                        {
                            languagesList.map(tool => {
                                return <div key={tool.index}
                                    className="grid place-items-center pt-4 w-40 h-48 transition duration-500 hover:scale-110 border-purple-500 border-2 bg-transparent rounded-md">
                                    <img className="w-28 h-28" src={tool.icon}></img>
                                    <p className="text-white text-3xl">{tool.name}</p>
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className="grid place-items-center mt-40 mb-20">
                    <p className="text-white uppercase text-3xl">Framework or tools used</p>
                    <div className="grid grid-cols-4 gap-y-12 gap-x-12 mt-16">
                        {
                            toolsList.map(tool => {
                                return <div key={tool.index}
                                    className="grid place-items-center pt-4 w-40 h-48 transition duration-500 hover:scale-110 border-purple-500 border-2 bg-transparent rounded-md">
                                    <img className="w-28 h-28" src={tool.icon}></img>
                                    <p className="text-white text-3xl">{tool.name}</p>
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
