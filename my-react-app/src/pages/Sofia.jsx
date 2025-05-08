import "../CSS/CityStyle.css";

export default function Sofia() {
  return (
    <div className="city-container">
      <h1 className="city-title">Explore Sofia</h1>
      <div className="city-section">
        <img src="/src/IMGs/sofia1.jpg" alt="First" className="city-image" />
        <div className="city-text">
          <h2>St. Alexsander Nevski</h2>
          <p>St. Alexander Nevsky Cathedral (Bulgarian: Храм-паметник "Свети Александър Невски", Hram-pametnik "Sveti Aleksandar Nevski") is a
             Bulgarian Orthodox cathedral in Sofia, the capital of Bulgaria. Built in Neo-Byzantine style, it serves as the cathedral church of 
             the Patriarch of Bulgaria and it is one of the 50 largest Christian church buildings by volume in the world. It is one of Sofia's 
             symbols and primary tourist attractions. St. Alexander Nevsky Cathedral in Sofia occupies an area of 3,170 square metres (34,100 sq ft) 
             and can hold 5,000 people inside. It is among the 10 largest Eastern Orthodox church buildings. It is the largest cathedral in the Balkans. 
            It is believed that up until the year 2000 it was the largest finished Orthodox cathedral.</p>
        </div>
      </div>

      <div className="city-section reverse">
        <img src="/src/IMGs/sofia2.jpg" alt="Second" className="city-image" />
        <div className="city-text">
          <h2>Presidency Building</h2>
          <p>The Presidency Building in Sofia, Bulgaria, is one of the most important government institutions in the country.
             Located in the heart of the capital, it stands at 2 Dondukov Boulevard, forming part of the Largo architectural 
             ensemble. Constructed during the 1950s in the Socialist Classicism style, the building’s imposing façade and symmetrical 
             design reflect the era’s ideological focus on grandeur and authority. The presidency houses the office of the President 
             of the Republic of Bulgaria and serves as the official venue for presidential ceremonies, meetings, and public statements.</p>
        </div>
      </div>
    </div>
  );
}
