import { useState } from 'react'
import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Home = ({ slider }) => {
  const [category, setCategory] = useState(0)
  return (
    <>
      <Sidebar slider={slider} category={category} setCategory={setCategory} />
      <div className={`container ${slider ? '' : 'large-container'}`}>
        <Feed category={category} />
      </div>
    </>
  )
}
export default Home
