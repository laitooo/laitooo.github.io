import type { NextPage } from 'next'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import MetaData from '../../components/metadata';
import { papersList } from '../../data/papersList';
import PaperCard from '../../components/paper';

const PublicationsPage: NextPage = () => {
    return (
        <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
            <MetaData title="Alzobair Elkhalifa portfolio" description="Alzobair Elkhalifa's portfolio home page"></MetaData>
            <div className="backdrop-blur">
                <NavBar />
                <div>
                    {
                        papersList.sort((a, b) => (a.id < b.id ? -1 : 1)).map((item, index) => {
                        return (
                            <div key={index}>
                                <PaperCard paper={item} />
                            </div>
                        )
                        })
                    }
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default PublicationsPage;