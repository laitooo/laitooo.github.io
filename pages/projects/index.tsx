import type { NextPage } from 'next'
import ProjectCard from '../../components/project'
import { projectsList } from '../../data/projectsList'
import Footer from '../../components/footer'
import { useState } from 'react'
import { Project, ProjectCategory } from '../../models/project'
import NavBar from '../../components/navbar'
import { useRouter } from 'next/router'
import Image from 'next/image'

const Home: NextPage = () => {
  const router = useRouter()

  const [currentProjectsList, setProjectsList] = useState<Project[]>(projectsList);

  const openProjectDetails = (id: number) => {
    router.push({
      pathname: '/projects/project',
      query: { "id": id},
    });
  }

  function showAll() {
    setProjectsList(projectsList);
  }

  function showCategory(category: ProjectCategory) {
    setProjectsList(projectsList.filter((project) => project.category == category));
  }

  
  return (
    <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
      <div className="backdrop-blur-sm">
        <NavBar />
        <div className="px-10 py-5">
          <span>Filter:</span>
          <button className="btn ml-5" onClick={() => showAll()}>
            <span className="h-6" />
            <p className="text-xl">All</p>
          </button>

          <button className="btn ml-5" onClick={() => showCategory(ProjectCategory.flutter)}>
            <Image alt="Flutter" src="icons/flutter.svg" className="w-6 mr-2" />
            <p className="text-xl">Flutter</p>
          </button>

          <button className="btn ml-5" onClick={() => showCategory(ProjectCategory.android)}>
            <Image alt="Android" src="/icons/android.svg" className="w-6 mr-2" />
            <p className="text-xl">Android</p>
          </button>


          <button className="btn ml-5" onClick={() => showCategory(ProjectCategory.unity)}>
            <Image alt="Unity" src="/icons/unity.png" className="w-6 mr-2" />
            <p className="text-xl">Unity</p>
          </button>

        </div>
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 px-10 pt-5 pb-20">
          {
            currentProjectsList.sort((a, b) => (a.id < b.id ? -1 : 1)).map((item, index) => {
              return (
                <div key={index} onClick={(e) => openProjectDetails(item.id)}>
                  <ProjectCard project={item} />
                </div>
              )
            })
          }
        </div>
        <Footer />
      </div>
    </div>
  )
}




export default Home
