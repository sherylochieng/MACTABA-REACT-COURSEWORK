

import './App.css'
import Testimonials from './components/Testimonials'
import StudentCard from './components/mactaba-Assignments/StudentCard'
import WatchGallery from './components/WatchCard'
import Result from './components/Thursday-Conditional-rendering/greet/greet'
import CasioWatch from './components/Thursday-Conditional-rendering/Stock'
import Notification from './components/Thursday-Conditional-rendering/Notification/Notification'

function App(){
  return(
    <div>
      {/* <Testimonials/> */}
      {/* <StudentCard/>
      <WatchGallery/> */}
      {/* <Result passed={true}/>
      <Result passed={false}/> */}

    <CasioWatch name="Casio" price={12} instock={true} isNew={true} />
        <Notification hasMessage={true}/>

    </div>
  )
}

export default App


