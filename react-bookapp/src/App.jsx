import CardCarousel from "./components/CardCarousel"
import Carousel from "./components/Carousel"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Review from "./components/Review"

function App() {
  let reviews = [
    {
      url: "/assets/img/avatars/avatar-4.jpg",
      name: "Mark Jco",
      title: "Ana Studios was very logical and creative at the same time",
      text: "The client received excellent feedback on DePalma Studios’ designs due to their website's improved look and feel. The team was very communicative and collaborative, and they demonstrated a unique understanding of the client’s requirements, providing very."
    },
    {
      url: "/assets/img/avatars/avatar-2.jpg",
      name: "Johnny Ben",
      title: "Ana Studios was very logical and creative at the same time",
      text: "The client received excellent feedback on DePalma Studios’ designs due to their website's improved look and feel. The team was very communicative and collaborative, and they demonstrated a unique understanding of the client’s requirements, providing very."
    },
    {
      url: "/assets/img/avatars/avatar-4.jpg",
      name: "Mark Jco",
      title: "Ana Studios was very logical and creative at the same time",
      text: "The client received excellent feedback on DePalma Studios’ designs due to their website's improved look and feel. The team was very communicative and collaborative, and they demonstrated a unique understanding of the client’s requirements, providing very."
    },
    {
      url: "/assets/img/avatars/avatar-2.jpg",
      name: "Johnny Ben",
      title: "Ana Studios was very logical and creative at the same time",
      text: "The client received excellent feedback on DePalma Studios’ designs due to their website's improved look and feel. The team was very communicative and collaborative, and they demonstrated a unique understanding of the client’s requirements, providing very."
    },
    {
      url: "/assets/img/avatars/avatar-4.jpg",
      name: "Mark Jco",
      title: "Ana Studios was very logical and creative at the same time",
      text: "The client received excellent feedback on DePalma Studios’ designs due to their website's improved look and feel. The team was very communicative and collaborative, and they demonstrated a unique understanding of the client’s requirements, providing very."
    },
  ];
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Carousel></Carousel>
      <CardCarousel></CardCarousel>
      {reviews.map((review, index) => Review(review, index))}
    </>
  )
}

export default App
