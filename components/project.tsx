import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Project, UrlType } from '../models/project'
import styles from '../styles/Home.module.css'

const ProjectCard = (probs: {project: Project}) => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl" data-theme="night">
        <figure>
          <img src={probs.project.imagePath} alt={probs.project.name} className="w-96 h-48 object-cover" />
        </figure>
        <div className="card-body h-72">
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
             className="w-5 h-5"/>
          <span>
            Youtube 
          </span>
        </button>
      </a>
    case UrlType.demo:
      return <a href={url}>
        <button className="btn btn-primary red">Try demo</button>
      </a>
    case UrlType.googlePlay:
      return <a href={url}>
          <img src='https://play.google.com/intl/en_us/badges/images/generic/en_badge_web_generic.png'
          width={180} />
      </a>
    default:
      break;
  }
}

export default ProjectCard
