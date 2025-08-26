
import { Outlet } from 'react-router'
import './App.css'

import CommonLayout from './layout/CommonLayout'
import { generateRoutes } from './utils/generateRoutes'
import { adminSidebarItems } from './routes/adminSidebarItems'

function App() {

  console.log(generateRoutes(adminSidebarItems));
  

  return (
    <div>
      
     <CommonLayout>
       <Outlet></Outlet>
     </CommonLayout>
    </div>
  )
}

export default App
