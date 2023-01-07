import Footer from '../components/footer'
import NavBar from '../components/navbar'
import MetaData from '../components/metadata';
import { Jop } from '../models/job';

const JopCard = (probs: { job: Jop }) => {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-lg font-normal leading-none text-gray-400">{probs.job.startDate.toDateString()}</time>
            <h3 className="text-2xl font-bold text-white pt-3">{probs.job.title} at
                <a href={probs.job.companyUrl} className="underline pl-2">{probs.job.companyName}</a>
            </h3>
            <p className="mb-4 text-xl font-normal text-gray-300 pt-3">{probs.job.details}</p>
        </li>
    );
}

export default JopCard;