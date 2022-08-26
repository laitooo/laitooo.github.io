import { Project, UrlType } from '../models/project'

const ProjectCard = (probs: {project: Project}) => {
  return (
    <div>
      <div className="card card-compact w-auto max-w-[24rem] bg-violet-700/[.5] shadow-xl">
        <figure>
          <img src={probs.project.imagePath} alt={probs.project.name} 
          className="w-full h-48 object-cover" />
        </figure>
        <div className="card-body h-auto lg:h-72">
          <h2 className="text-white text-2xl font-semibold">{probs.project.name}</h2>
          <p className="text-base">{probs.project.description}</p>
          <div className="card-actions mt-2">
            {
              getButton(probs.project.urlType, probs.project.url)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

function getButton(urlType: UrlType, url: string) {
  switch (+urlType) {
    case UrlType.github:
      return <a href={url}>
        <button type="button" className="flex shadow-2xl space-x-2 px-6 py-4 items-center rounded-md w-40 text-white hover:bg-gray-600 bg-black">
          <img src="/icons/github.svg"
          alt="Github"
             className="w-5 h-5"/>
          <span>
            Github 
          </span>
        </button>
      </a>
    case UrlType.youtube:
      return <a href={url}>
        <button type="button" className="flex shadow-2xl space-x-2 px-6 py-4 items-center rounded-md w-40 text-white hover:bg-red-400 bg-red-600">
          <img src="/icons/youtube.svg"
          alt="Youtube"
             className="w-5 h-5"/>
          <span>
            Youtube 
          </span>
        </button>
      </a>
    case UrlType.demo:
      return <a href={url}>
        <button className="btn btn-secondary">
          <p className="pl-2 pr-12">Try demo</p>
        </button>
      </a>
    case UrlType.googlePlay:
      return <a href={url}>
          <img
          alt="Google play"
          src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'
          width={180} />
      </a>
    default:
      break;
  }
}

export default ProjectCard
