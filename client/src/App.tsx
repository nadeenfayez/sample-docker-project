import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

type Blog = {
  id: string,
  title: string,
  description: string
}

function App() {
  const [blogs, setBlogs] = useState<Blog[]>([])

  useEffect(() => {
    fetch("http://localhost:4000")
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>All Blogs</h1>
          <p>
            Hello! You can see all our blogs below :
          </p>
        </div>
      </section>

      {/* <div className="ticks"></div> */}

      <section id="blogs">
        {blogs && blogs.map((blog: Blog) => (
          <div className="docs" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.description}</p>
          </div>
        ))}
      </section>

      {/* <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  )
}

export default App
