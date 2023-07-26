import "./App.css"
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import Contact from "./components/contact/Contact"
import Cart from "./components/componentss/Cart"
import Pagination from "./pagination"
import Search from "./search"
import Stories from "./Stories"
import './stories.css';




function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path='/'  Component={Home} />
           <Route exact path='/about'  Component={About} />
          <Route exact path='/courses' Component={CourseHome} />
          <Route exact path='/team' Component={Team} />
          <Route exact path='/pricing' Component={Pricing} />
         <Route exact path='/journal' Component={Blog} /> 
          <Route exact path='/Contact' Component={Contact} /> 
          <Route exact path='/Shopping cart' Component={Cart} />  
            </Routes>
            <Cart />
            
            <Search />
            <Pagination />
            <Stories />
            <Footer />
           
      </Router> 
    </>
  )
}

export default App
