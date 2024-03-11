import React from 'react';
import FacultyCard from './FacultyCard';
import backgroundImage from '../images/background.jpg';
import { Link } from 'react-router-dom';

const faculties = [
    { name: "Agropecuaria y de Recursos Naturales Renovables", image: "agropecuaria.jpg", color: 'green', slug: 'agropecuaria' },
    { name: "Educación, el Arte y la Comunicación", image: "educacion.jpg", color: 'yellow', slug: 'educacion' },
    { name: "Energía, las Industrias y los Recursos Naturales no Renovables", image: "energia.jpg", color: 'red', slug: 'energia' },
    { name: "Jurídica, Social y Administrativa", image: "juridica.jpg", color: 'orange', slug: 'juridica' },
    { name: "Salud Humana", image: "salud.jpg", color: 'blue', slug: 'salud' },
    { name: "Unidad de Educación a Distancia y en Línea", image: "educacion_distancia.jpg", color: 'purple', slug: 'educacion-distancia' },
];

const PaginaPrincipal = () => {
    return (
        <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="faculty-grid">
                {faculties.map((faculty, index) => (
                    <Link key={index} to={`/bloques/${faculty.slug}`}>
                        <FacultyCard
                            name={faculty.name}
                            image={faculty.image}
                            color={faculty.color}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default PaginaPrincipal;