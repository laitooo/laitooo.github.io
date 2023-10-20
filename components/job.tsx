import { Jop } from '../models/job';

const JopCard = (probs: { job: Jop }) => {
    return (
        <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5 border border-white"></div>
            <time className="mb-1 text-base md:text-lg font-normal leading-none text-white">{probs.job.startDate} - {probs.job.endDate} : {probs.job.workDuration}</time>
            <h3 className="text-xl md:text-3xl font-bold text-white pt-3">{probs.job.title} at
                <a href={probs.job.companyUrl} className="underline pl-2">{probs.job.companyName}</a>
            </h3>
            <p className="mb-4 text-lg md:text-xl font-normal text-white pt-3">{probs.job.details.split("\n").map((v) => {
                return <p>{v}</p>
            })}</p>
            <p className="mb-4 text-lg md:text-xl font-normal text-white pt-3">{probs.job.toolsUsed}</p>
        </li>
    );
}

export default JopCard;