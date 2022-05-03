import axios from 'axios'
import {useEffect} from "react"
import { useRouter } from 'next/router'

// import custom components
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Blog = ({data}) =>{
  const router = useRouter()
  const handleClick=()=>{
        router.push("/")
    }
  return (
    <>
    <Navbar/>
    <div className="px-5 flex justify-center max-w-[90%] mx-auto my-10">
        <div className="block text-justify p-6 rounded-lg shadow-lg bg-white ">
            <h1 className="text-gray-900 text-3xl leading-tight font-medium mb-2 ">{data.attributes.title}</h1>
            <p className="text-gray-700 text-base mb-4">
            {data.attributes.content}
            </p>
            <button onClick={handleClick} type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Back</button>
        </div>
    </div>
    <Footer/>
    </>
  )
}
export async function getStaticPaths() {
    const data = await axios.get(`${process.env.STRAPI_URL}/api/blogs`)
    const posts = data.data.data
    const paths = posts.map((post) => ({
        params: { blog: post.attributes.slug },
      }))
    return {
      paths,
      fallback: false,
    };
  }

export async function getStaticProps({params}) {
    const {blog} = params
    const resData = await axios.get(`${process.env.STRAPI_URL}/api/blogs`)
    const data = resData.data.data
    const filteredData = data.find(post => post.attributes.slug === blog)
  
    return {
      props: {data:filteredData},
      revalidate: 10,
    }
  }
export default Blog