import './styles/App.css';
import HomePage from './pages/homepage/homepage.js';
import CosoytePage from './pages/cosoyte-page/cosoyte-page';
import GoiKhamPage from './pages/goi-kham-page/goi-kham-page.js'
import BacSiPage from './pages/bacsi-page/bacsi-page.js'
import {Routes,Route, RouterProvider} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/co-so-y-te" element={<CosoytePage/>}/>
        <Route path='/bac-si' element={<CosoytePage/>}/>
        <Route path='/goi-kham' element={<GoiKhamPage/>}/>
      </Routes>
    </div>
  )
}

export default App;
