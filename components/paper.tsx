import Footer from '../components/footer'
import NavBar from '../components/navbar'
import MetaData from '../components/metadata';
import { Paper } from '../models/paper';

const PaperCard = (probs: {paper: Paper}) => {
    return (
        <div className="my-20 md:mx-16 py-12 px-12 mx-4 lg:mx-40 card bg-violet-700/[.35]">
            <p className="text-white text-2x lg:text-3xl font-semibold">{probs.paper.title}</p>
            <p className="mt-5 lg:leading-10 text-white text-xl">Published at the {probs.paper.conference} at {probs.paper.date.toDateString()}</p>
            <a href={probs.paper.url} className="btn btn-wide btn-outline mt-10" target="_blank" download="" rel="noreferrer">Download paper</a>
        </div>
    );
}

export default PaperCard;