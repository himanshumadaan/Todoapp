import React , {useState} from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import PrivateRoutes from '../Routes/Routes'

const Wrapper = () => {
  const [sideBarToggle , setSideBarToggle] = useState(false);

  return (
    <>
    <div className={sideBarToggle ? 'sidebar-enable vertical-collpsed' :  ''}>
    <Header setSideBarToggle={setSideBarToggle} sideBarToggle={sideBarToggle}/>
    <Sidebar />
    <PrivateRoutes/>
    <Footer/>
    </div>
    </>
  )
}

export default Wrapper