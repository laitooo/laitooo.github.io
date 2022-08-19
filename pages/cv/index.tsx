import type { NextPage } from 'next'
import Footer from '../../components/footer'
import NavBar from '../../components/navbar'
import dynamic from "next/dynamic";

const Home: NextPage = () => {
    return (
        <div data-theme="synthwave">
            <NavBar />

            <Footer />
        </div>
    )
}

export default Home
