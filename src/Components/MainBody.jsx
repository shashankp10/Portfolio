import React from 'react'
import Content from './Content';
import Sidebar from './Sidebar';

export default function MainBody() {
  return (
    <>
      <div class="flex items-center justify-center min-h-screen p-10">
        <div class="flex flex-col xl:flex-row gap-10">
          <Sidebar/>
          <Content/>
        </div>
      </div>
    </>
  )
}
