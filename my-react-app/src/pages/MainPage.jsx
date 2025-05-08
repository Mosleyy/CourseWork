import { useAuth } from "../authenticator/AuthContext";
import { UsersList } from "../assets/UsersList.jsx";

export default function MainPage() {
  const { isAuthenticated, logout } = useAuth();
  if (isAuthenticated) {
    return (
      <div className="city-container">
        <h1 className="city-title">Explore Bulgaria</h1>
        <div className="city-section">
          <img src="/src/IMGs/main1.jpg" alt="First" className="city-image" />
          <div className="city-text">
            <h2>The Nature</h2>
            <p>Bulgaria is a country of stunning natural diversity, from the snowy peaks of the 
              Rila and Pirin mountains to the golden beaches of the Black Sea coast. Its landscapes
              include lush valleys, ancient forests, crystal-clear lakes, and mineral-rich hot springs.
              The country is home to seven UNESCO World Heritage sites and dozens of nature reserves, 
              offering countless opportunities for hiking, skiing, and eco-tourism. In every season, Bulgaria’s 
              natural beauty offers a peaceful retreat, blending untouched wilderness with centuries-old villages
              nestled in the hills, where tradition and nature harmoniously coexist.</p>
          </div>
        </div>

        <div className="city-section reverse">
          <img src="/src/IMGs/main2.jpg" alt="Second" className="city-image" />
          <div className="city-text">
            <h2>The People</h2>
            <p>The Bulgarian people are known for their warmth, resilience, and strong sense of tradition.
              With a history shaped by empires and revolutions, they take pride in their cultural identity
              and rich folklore. Hospitality is a cornerstone of Bulgarian life—visitors are often welcomed 
              with homemade food, wine, and heartfelt conversation. From skilled artisans and musicians to modern
              entrepreneurs, Bulgarians blend old-world customs with contemporary spirit. Family and community are
              central values, and traditional celebrations—like Kukeri and Martenitsa—showcase their vibrant heritage. 
              Despite challenges, the Bulgarian people remain deeply connected to their land, language, and enduring
              sense of unity.</p>
          </div>
        </div>
        <div className="city-section reverse">
          <img src="/src/IMGs/main3.JPG" alt="Third" className="city-image" />
          <div className="city-text">
            <UsersList />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="city-container">
        <h1 className="city-title">Explore Bulgaria</h1>
        <div className="city-section">
          <img src="/src/IMGs/main1.jpg" alt="First" className="city-image" />
          <div className="city-text">
          <h2>The Nature</h2>
            <p>Bulgaria is a country of stunning natural diversity, from the snowy peaks of the 
              Rila and Pirin mountains to the golden beaches of the Black Sea coast. Its landscapes
              include lush valleys, ancient forests, crystal-clear lakes, and mineral-rich hot springs.
              The country is home to seven UNESCO World Heritage sites and dozens of nature reserves, 
              offering countless opportunities for hiking, skiing, and eco-tourism. In every season, Bulgaria’s 
              natural beauty offers a peaceful retreat, blending untouched wilderness with centuries-old villages
              nestled in the hills, where tradition and nature harmoniously coexist.</p>
          </div>
        </div>

        <div className="city-section reverse">
          <img src="/src/IMGs/main2.jpg" alt="Second" className="city-image" />
          <div className="city-text">
          <h2>The People</h2>
            <p>The Bulgarian people are known for their warmth, resilience, and strong sense of tradition.
              With a history shaped by empires and revolutions, they take pride in their cultural identity
              and rich folklore. Hospitality is a cornerstone of Bulgarian life—visitors are often welcomed 
              with homemade food, wine, and heartfelt conversation. From skilled artisans and musicians to modern
              entrepreneurs, Bulgarians blend old-world customs with contemporary spirit. Family and community are
              central values, and traditional celebrations—like Kukeri and Martenitsa—showcase their vibrant heritage. 
              Despite challenges, the Bulgarian people remain deeply connected to their land, language, and enduring
              sense of unity.</p>
          </div>
        </div>
        <div className="city-section reverse">
          <img src="/src/IMGs/main3.JPG" alt="Third" className="city-image" />
          <div className="city-text">
            <h2>Log in to see other users</h2>
          </div>
        </div>
      </div>
    );
  }
}