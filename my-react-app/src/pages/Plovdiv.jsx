import "../CSS/CityStyle.css";

export default function Plovdiv() {
  return (
    <div className="city-container">
      <h1 className="city-title">Explore Plovdiv</h1>
      <div className="city-section">
        <img src="/src/IMGs/plovdiv1.jpg" alt="First" className="city-image" />
        <div className="city-text">
          <h2>Ancient Theatre of Philippopolis</h2>
          <p>The Ancient Theatre of Philippopolis is one of Plovdiv’s most remarkable landmarks and among 
            the best-preserved Roman theaters in the world. Built in the 1st century AD during the reign of 
            Emperor Domitian, it once seated over 5,000 spectators. Nestled in the Old Town, the theatre offers 
            stunning views of the city and continues to host concerts and cultural events. Its marble seating, stage, 
            and ornate columns evoke the grandeur of Roman-era Plovdiv. A symbol of the city's long history, the theatre 
            attracts visitors year-round and stands as a proud testament to Bulgaria’s classical heritage.</p>
        </div>
      </div>

      <div className="city-section reverse">
        <img src="/src/IMGs/plovdiv2.jpg" alt="Second" className="city-image" />
        <div className="city-text">
          <h2>Roman Stadium of Plovdiv</h2>
          <p>The Roman Stadium of Plovdiv, located beneath the bustling pedestrian street, is another major historical attraction. 
            Constructed in the 2nd century AD, it could accommodate up to 30,000 spectators during gladiator games and athletic 
            competitions. Though only a portion of it is visible today, visitors can view the impressive remains and explore a 
            small museum showcasing its history. The stadium reflects Plovdiv’s importance in Roman times and its vibrant urban 
            culture. It blends seamlessly into modern life, offering a unique glimpse into the past right in the city center.</p>
        </div>
      </div>
    </div>
  );
}
