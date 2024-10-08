import React,{useState} from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import Chatbot from "../components/Chatbot";


const HomePage = () => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);

  const handleChatbotOpen = () => setChatbotOpen(!isChatbotOpen);

  const handleChatbotClose = () => setChatbotOpen(false);
  return (
    <div>
        <Header activeHeading={1} />
        <Hero />
        {!isChatbotOpen && (
        <button
          onClick={handleChatbotOpen}
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '18px',
            zIndex: 1000,
            animation: "bounce 1s infinite ease-in-out",
  }}
        >
           <div style={{ position: 'relative' }}>
  <img src="https://cdn-icons-png.freepik.com/256/5828/5828712.png?semt=ais_hybrid" alt=""
   style={{
    width: '100px',
   }} />
    
    <span
      style={{
        position: 'absolute',
        top: '-25px', 
        left: '25%',
        transform: 'translateX(-50%)',
        backgroundColor: '#fff',
        padding: '5px 10px',
        borderRadius: '10px',
        color: '#0d66b5',
        fontSize: '14px',
        whiteSpace: 'nowrap',
        animation: 'popText 2s infinite',
        border: '1px solid #0d66b5'
      }}
    >
      Need Help?
    </span>
  </div>
</button>

      )}
      <style>
{`
@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes popText {
  0%, 100% {
    opacity: 0;
    transform: translateY(20px);
  }
  50% {
    opacity: 1;
    transform: translateY(0);
  }
}
`}
</style>

      {isChatbotOpen && (
        <Chatbot onClose={handleChatbotClose} style={{ position: 'fixed', bottom: '0', width: '100%', backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 999 }} />
      )}
        <Categories />
        <BestDeals />
        <Events />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
    </div>
  )
}

export default HomePage