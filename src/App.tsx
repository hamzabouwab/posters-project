import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Shop from './components/Shop.tsx/Shop'
function App() {

  return (
    <div className='p-0'>
     <Header />
    <Shop />  
     <Main />
     <hr />
     <Footer />
    </div>
  )
}

export default App
