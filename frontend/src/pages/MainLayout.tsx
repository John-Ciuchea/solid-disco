import { Outlet } from 'react-router-dom'
import { FC } from 'react'

const MainLayout: FC = () => {
  return (
    <div className="grow bg-slate-100 p-4">
      <Outlet />
    </div>
  )
}
export default MainLayout
