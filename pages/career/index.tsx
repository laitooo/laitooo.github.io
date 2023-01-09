import type { NextPage } from 'next'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import MetaData from '../../components/metadata'
import { jobsList } from '../../data/jobsList'
import JopCard from '../../components/job'

const WorkExperience: NextPage = () => {
    return (
        <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
            <MetaData title="Alzobair Mohammed portfolio" description="Alzobair Mohammed's portfolio projects list page"></MetaData>
            <div className="backdrop-blur">
                <NavBar />
                <div className="text-white text-xl md:text-3xl font-bold px-4 md:pl-20 py-4 md:py-16">My Work experience :</div>
                <div className="grid place-items-center items-start px-4 md:px-20">
                    <ol className="relative border-l border-white mb-4 md:mb-20">
                        <div>
                            {
                                jobsList.sort((a, b) => (a.id < b.id ? -1 : 1)).map((item, index) => {
                                    return (
                                        <div key={index} className="pl-2 md:pl-4 pt-2 md:pt-10">
                                            <JopCard job={item} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </ol>
                </div>
            </div>
            <Footer />
        </div >
    )
};

export default WorkExperience;