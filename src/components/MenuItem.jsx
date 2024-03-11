import imagen_puertaprincipal from '../images/puerta_principal.png';
import imagen_bloque13 from '../images/bloque_13.png';

const menuItems = [
  {
    title: "Edificio 6",
    description: "Descripción de la opción 4.",
    imageUrl: "ruta-de-la-imagen-4.jpg",
    link: "https://webobook.com/public/650a2f2f86a6af41742a1e42,en"
  },
  {
    title: "Bloque 12",
    description: "Descripción de la opción 2.",
    imageUrl: "bl.jpg",
    link: "/fotos360",
    image:  "ruta-de-la-imagen-4.jpg",
  },
  {
    title: "Bloque 13",
    description: "Descripción de la opción 2.",
    imageUrl: imagen_bloque13,
    link: "https://webobook.com/public/6506163ca993850efc046b52,en",
    image: imagen_bloque13
  },
  {
    title: "Bloque 14",
    description: "Descripción de la opción 3.",
    imageUrl: "ruta-de-la-imagen-3.jpg",
    link: "/fotos360"
  }
];
    

const MenuItem = ({ match }) => {
  // Aquí obtén el nombre de la facultad desde los parámetros de la URL
  const facultyName = match.params.facultyName.replace(/_/g, ' ');

  return (
    <div className="container">
      <img src={imagen_puertaprincipal} className="img-fluid" alt="Imagen de fondo" />
      <nav>
        <div className="menu">
          <h1>{facultyName}</h1>
          {menuItems.map((item, index) => (
            <div key={index}>
              <img src={item.imageUrl} alt={item.title} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <a href={item.link}>
                <button>Ver Fotos 360</button>
              </a>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default MenuItem;
