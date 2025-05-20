import './App.css'
import Navbar from './component/Navbar.jsx'
import Cards from './component/Cards.jsx'
import Footer from './component/Footer.jsx'
function App() {
  return (
    <>
      {
        <section>
          <Navbar className="container"/>
       <div className="container my-4">
        <div className="row">
          <div className="col-md-4">
            <Cards
              card_img="https://images.pexels.com/photos/32118340/pexels-photo-32118340/free-photo-of-delicious-croissant-and-latte-on-cafe-table.jpeg?auto=compress&cs=tinysrgb&w=1200"
              card_title="Morning Coffee"
              card_list_1="Smile"
              card_list_2="Relax"
              card_list_3="Enjoy"
            />
          </div>
          <div className="col-md-4">
            <Cards
              card_img="https://images.pexels.com/photos/32118340/pexels-photo-32118340/free-photo-of-delicious-croissant-and-latte-on-cafe-table.jpeg?auto=compress&cs=tinysrgb&w=1200"
              card_title="Evening Tea"
              card_list_1="Smile"
              card_list_2="Relax"
              card_list_3="Enjoy"
            />
          </div>
          <div className="col-md-4">
            <Cards
              card_img="https://images.pexels.com/photos/32118340/pexels-photo-32118340/free-photo-of-delicious-croissant-and-latte-on-cafe-table.jpeg?auto=compress&cs=tinysrgb&w=1200"
              card_title="Night Cocoa"
              card_list_1="Smile"
              card_list_2="Relax"
              card_list_3="Enjoy"
            />
          </div>
        </div>
      </div>
      {/*  */}
        <div className="container my-4">
       <div className="row">
          <div className="col-md-4">
            <Cards
              card_img="https://images.pexels.com/photos/32118340/pexels-photo-32118340/free-photo-of-delicious-croissant-and-latte-on-cafe-table.jpeg?auto=compress&cs=tinysrgb&w=1200"
              card_title="Morning Coffee"
              card_list_1="Smile"
              card_list_2="Relax"
              card_list_3="Enjoy"
            />
          </div>
          <div className="col-md-4">
            <Cards
              card_img="https://images.pexels.com/photos/32118340/pexels-photo-32118340/free-photo-of-delicious-croissant-and-latte-on-cafe-table.jpeg?auto=compress&cs=tinysrgb&w=1200"
              card_title="Evening Tea"
              card_list_1="Smile"
              card_list_2="Relax"
              card_list_3="Enjoy"
            />
          </div>
          <div className="col-md-4">
            <Cards
              card_img="https://images.pexels.com/photos/32118340/pexels-photo-32118340/free-photo-of-delicious-croissant-and-latte-on-cafe-table.jpeg?auto=compress&cs=tinysrgb&w=1200"
              card_title="Night Cocoa"
              card_list_1="Smile"
              card_list_2="Relax"
              card_list_3="Enjoy"
            />
          </div>
        </div>
      </div>
           <Footer className="container bg-light" />
        </section>

        /* <h1 style={{color: "black"}}>aaaa</h1> */

      }
    </>
  )
}

export default App
