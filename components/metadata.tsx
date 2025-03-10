import Head from "next/head";

const MetaData = (probs: {title: string, description: string}) => {
    return ( 
       <Head>
           <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
           <meta name="keywords" content="portfolio, laitooo, Alzobair, Alzobair Elkhalifa, nextjs"></meta>
           <meta name="description" content={probs.description}></meta>
           <meta property="og:title" content={probs.title} />
           <meta property="og:image" content="http://localhost:3000/images/logo.jpg" />
           <meta charSet="utf-8"></meta>
           <link rel="icon" href="http://localhost:3000/images/logo.jpg"></link>
           <title>{probs.title}</title>
       </Head>
     );
}

export default MetaData;