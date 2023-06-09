import Footer from "./footer";
import MetaData from "./metadata";
import NavBar from "./navbar";

interface ErrorPageProps {
    errorMsg: string;
}

const ErrorPage = (props: ErrorPageProps) => {
    return (
        <div data-theme="synthwave" className="bg-cover bg-[url('/images/background.jpg')] bg-fixed bg-no-repeat">
            <MetaData title="Alzobair Mohammed portfolio" description="Alzobair Mohammed's portfolio project details page"></MetaData>
            <div className="backdrop-blur">
                <NavBar />
                <div className='h-screen grid place-items-center text-2xl text-white font-bold'>
                    {props.errorMsg}
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default ErrorPage;