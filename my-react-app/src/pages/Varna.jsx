import "../CSS/CityStyle.css";

export default function Varna() {
  return (
    <div className="city-container">
      <h1 className="city-title">Explore Varna</h1>
      <div className="city-section">
        <img src="/src/IMGs/varna1.jpg" alt="First" className="city-image" />
        <div className="city-text">
          <h2>Sea Garden</h2>
          <p>The Sea Garden in Varna is the city’s most iconic park and a cherished green space along 
            the Black Sea coast. Stretching over several kilometers, it offers scenic walking paths, 
            beautifully landscaped gardens, fountains, and monuments. Locals and tourists alike enjoy 
            its open-air theater, zoo, and seaside views. The park is home to cultural landmarks like 
            the Naval Museum and the Aquarium. Whether for a relaxing stroll, a picnic, or a cultural visit, 
            the Sea Garden is a vibrant heart of Varna, blending nature and leisure with stunning coastal scenery.</p>
        </div>
      </div>

      <div className="city-section reverse">
        <img src="/src/IMGs/varna2.jpg" alt="Second" className="city-image" />
        <div className="city-text">
          <h2>Sevastopol Square</h2>
          <p>Sevastopol Square is a central and lively spot in Varna, known for its historical charm and urban energy. 
            Surrounded by shops, cafes, and historic buildings, it serves as a popular meeting point for locals and visitors. 
            The square is within walking distance of the Sea Garden and the beach, making it a key part of the city’s pedestrian zone. 
            A blend of old-world architecture and modern life, Sevastopol Square reflects Varna’s vibrant atmosphere. It’s a place where 
            people gather, relax, and experience the everyday rhythm of the Bulgarian seaside city.</p>
        </div>
      </div>
    </div>
  );
}
