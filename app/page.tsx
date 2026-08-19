const Home = () => {
  //Application Logic to be written here. 
  console.log(`We are practicing the creation of Blog App!`)
  //Always returns the homepage of the application i.e the front end.
  return (
    <div>
      <div>
        <h2>Let your Blogs flow!</h2>
        An example app for{" "}
        <a href="https://courses.mooc.fi/org/uh-cs/courses/full-stack-open-nextjs">
          Full Stack Open Next.js
        </a>
      </div>
      <div>
        See{" "}
        <a href="https://github.com/fullstack-hy2020/nextjs-notes">
          https://github.com/fullstack-hy2020/nextjs-notes
        </a>{" "}
        for the source code
      </div>
    </div>
  )
}
export default Home