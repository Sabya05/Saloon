import { blogs } from "./assets/blogs"

function Blogs() {
  return (
    <>
      <h1>Blog page</h1>

      {blogs.map((v, i) => (
        <div
          key={v.id || i}
          className="border-2 border-gray-300 rounded-lg p-4 m-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <p>
            {v.title}
            <br />
            {v.body}
          </p>

          <button className="rounded border-blue-600">
            Read more
          </button>
        </div>
      ))}
    </>
  )
}

export default Blogs