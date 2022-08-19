import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ProjectCard from '../../components/project'
import styles from '../styles/Home.module.css'
import { projectsList } from '../../data/projectsList'
import Footer from '../../components/footer'
import { useState } from 'react'
import { Project, ProjectCategory } from '../../models/project'
import NavBar from '../../components/navbar'

const Home: NextPage = () => {
  const [currentProjectsList, setProjectsList] = useState<Project[]>(projectsList);

  const openProjectDetails = (id: number) => {
    window.location.href = "/projects/project?id=" + id.toString();
  }

  function showAll() {
    setProjectsList(projectsList);
  }

  function showCategory(category: ProjectCategory) {
    setProjectsList(projectsList.filter((project) => project.category == category));
  }

  return (
    <div data-theme="synthwave">
      <NavBar />
      <div className="px-10 py-5">
        <span>Filter:</span>
        <button className="btn ml-5" onClick={() => showAll()}>
          <span className="h-6" />
          <p className="text-xl">All</p>
        </button>

        <button className="btn ml-5" onClick={() => showCategory(ProjectCategory.flutter)}>
          <img src="icons/flutter.svg" className="w-6 mr-2" />
          <p className="text-xl">Flutter</p>
        </button>

        <button className="btn ml-5" onClick={() => showCategory(ProjectCategory.android)}>
          <img src="/icons/android.svg" className="w-6 mr-2" />
          <p className="text-xl">Android</p>
        </button>


        <button className="btn ml-5" onClick={() => showCategory(ProjectCategory.unity)}>
          <img src="/icons/unity.svg" className="w-6 mr-2" />
          <p className="text-xl">Unity</p>
        </button>

      </div>

      <div className="grid grid-cols-3 gap-4 px-10 py-5">
        {
          currentProjectsList.sort((a, b) => (a.id < b.id ? -1 : 1) ).map((item, index) => {
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
  )
}




export default Home
