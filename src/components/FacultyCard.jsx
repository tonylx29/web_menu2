  // FacultyCard.js
  import React from 'react';

  function FacultyCard({ name, image, link, color }) {
    const imageUrl = require(`../images/${image}`); // Asegúrate de que las rutas de las imágenes son correctas.
    return (
      <div className="faculty-card" onClick={() => window.location.href = link} style={{ backgroundColor: color }}>
        <img src={imageUrl} alt={name} />
        <div className="overlay" />
        <div className="content">
          <h3>{name}</h3>
        </div>
      </div>
    );
  }

  export default FacultyCard;
