import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="h-8 text-2xl font-extrabold my-4 max-w-[90%] mx-auto">
      <Link to='/'>
        <h1>Workout Buddie</h1>
      </Link>
    </div>
  )
}

export default Navbar