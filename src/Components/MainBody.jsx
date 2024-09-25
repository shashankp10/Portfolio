import React from 'react'
import Content from './Content';
import Sidebar from './Sidebar';

export default function MainBody({ children }) {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-10">
        <div className="flex flex-col xl:flex-row gap-10">
          <Sidebar />
          <Content>{children}</Content>
        </div>
      </div>
    </>
  )
}
