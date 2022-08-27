
import Footer from '../../../components/footer'
import NavBar from '../../../components/navbar'
import { projectsList } from '../../../data/projectsList'
import { Carousel } from "flowbite-react"
import MetaData from '../../../components/metadata'




const ProjectDetails = () => {
  var id = 1;
  if (typeof window !== "undefined") {
    const url = new URL(window.location.href);
    var id = Number(url.searchParams.get("id"));
  }

  const project = projectsList.find((e) => e.id == id);
  // const numScreenshots = project?.screenshots.length;

  return (
    <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
      <MetaData title="Alzobair Mohammed portfolio" description="Alzobair Mohammed's portfolio project details page"></MetaData>
      <div className="backdrop-blur-sm">
        <NavBar />
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
        {/* <div className="carousel w-full h-[45rem] pt-10">
          {
            project?.screenshots.map((value, index) =>
              <div id={"image" + (index + 1).toString()} className="carousel-item  relative w-full ">
                <img src={value} className="content-center object-contain w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href={previousButton(index + 1, numScreenshots!)} className="btn btn-circle">❮</a>
                  <a href={nextButton(index + 1, numScreenshots!)} className="btn btn-circle">❯</a>
                </div>
              </div>
            )
          }
        </div>
        <div className="flex justify-center w-full py-20 gap-2">
          {
            project?.screenshots.map((value, index) =>
              <a href={"#image" + (index + 1)} className="btn">{(index + 1).toString()}</a>
            )
          }
        </div> */}
        <Footer />
      </div>
    </div>
  )
}

// function nextButton(current: number, length: number) {
//   console.log(current, " - ", length);
//   if (current === length) {
//     console.log("next : 1")
//     return "#image1";
//   } else {
//     console.log("next: " + (current + 1).toString())
//     return "#image" + (current + 1).toString();
//   }
// }

// function previousButton(current: number, length: number) {
//   if (current === 1) {
//     return "#image" + length.toString();
//   } else {
//     return "#image" + (current - 1).toString();
//   }
// }

export default ProjectDetails
