import Footer from '../../../components/footer'
import NavBar from '../../../components/navbar'
import { projectsList } from '../../../data/projectsList'
import { Carousel } from "flowbite-react"
import MetaData from '../../../components/metadata'
import { getButton } from '../../../components/project'
import { Project } from '../../../models/project'
import ErrorPage from '../../../components/errorPage'

const ProjectDetails = () => {
  var id = 1;
  var project: Project | undefined;
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    if (url.searchParams.has("id")) {
      var id = Number(url.searchParams.get("id"));
      project = projectsList.find((e) => e.id == id);
    }
  }


  if (project === undefined) {
    return <ErrorPage errorMsg="Couldn't find the project with the specified ID"></ErrorPage>
  }

  return (
    <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
      <MetaData title="Alzobair Mohammed portfolio" description="Alzobair Mohammed's portfolio project details page"></MetaData>
      <div className="backdrop-blur">
        <NavBar />
        <div className='pt-10 pl-10 text-white text-2xl font-bold'>{project?.name}:</div>
        <div className='pt-4 pl-10 text-white text-xl'>{project?.description}</div>
        <div className='pt-4 pl-10'>
          {getButton(project?.urlType, project?.url)}
        </div>
        <div className="py-20">
          <Carousel slideInterval={5000}>
            {
              project?.screenshots.map((value, index) => {
                return (
                  <img key={index} alt="screenshot" src={value} className="pb-16 relative object-contain w-full h-[40rem]" />
                )
              })
            }
          </Carousel>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default ProjectDetails
