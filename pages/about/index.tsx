import type { NextPage } from 'next'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import { languagesList, toolsList } from '../../data/toolsList'

const Home: NextPage = () => {
    return (
        <div data-theme="synthwave">
            <NavBar />
            <div className="flex flex-row mt-10 px-20 text-5xl">
                <p className="text-white">Know Who</p>
                <p className="text-purple-500">I'M</p>
            </div>
            <p className="text-white text-xl mt-10 px-20 leading-relaxed">
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
            <div className="grid place-items-center mt-40">
                <p className="text-white uppercase text-3xl">Languages used</p>
                <div className="grid grid-cols-4 gap-y-12 gap-x-32 mt-16">
                    {
                        languagesList.map(tool => {
                            return <div key={tool.index} 
                            className="grid place-items-center pt-4 w-44 h-52 transition duration-500 hover:scale-110 border-purple-500 border-2 bg-transparent">
                                <img className="w-32 h-32" src={tool.icon}></img>
                                <p className="text-white text-3xl">{tool.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className="grid place-items-center mt-40">
                <p className="text-white uppercase text-3xl">Framework or tools used</p>
                <div className="grid grid-cols-4 gap-y-12 gap-x-32 mt-16">
                    {
                        toolsList.map(tool => {
                            return <div key={tool.index} 
                            className="grid place-items-center pt-4 w-44 h-52 transition duration-500 hover:scale-110 border-purple-500 border-2 bg-transparent">
                                <img className="w-32 h-32" src={tool.icon}></img>
                                <p className="text-white text-3xl">{tool.name}</p>
                            </div>
                        })
                    }
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Home
