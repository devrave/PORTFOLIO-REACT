import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = "Soy un profesional apasionado por la tecnología y la innovación, con experiencia como desarrollador full-stack y en la gestión de proyectos industriales. Combino habilidades técnicas en backend con Spring Boot y frontend con React, con conocimientos en tecnologías como JavaScript, Java, SQL, Git y Docker. Con más de diez años liderando procesos de mejora continua y estrategias de innovación, he trabajado en el desarrollo de programas de mantenimiento que garantizan la confiabilidad y disponibilidad de los equipos. Además, tengo formación en metodologías ágiles, gestión de calidad y Lean Manufacturing Six Sigma. Mi capacidad de liderazgo, trabajo en equipo, adaptabilidad y proactividad me permiten aportar soluciones efectivas y estratégicas, tanto en el ámbito tecnológico como en el industrial.";

export const ABOUT_TEXT = `Como desarrollador full-stack junior, me destaco en transformar ideas complejas en soluciones tecnológicas eficientes. Mi experiencia en el backend incluye el diseño de sistemas escalables con Spring Boot, mientras que en el frontend combino React con prácticas modernas para ofrecer aplicaciones integrales y fáciles de usar. Soy un apasionado del aprendizaje continuo y la resolución de problemas, lo que me lleva a buscar constantemente proyectos desafiantes donde pueda aplicar mi conocimiento y crecer profesionalmente, siempre comprometido con la entrega de resultados de alta calidad.`;

export const PROJECTS = [
  {
    title: "Pet Adoption Manager",
    image: project1,
    description:
      "PAM (Administrador de Adopción de Mascotas) es una aplicación web diseñada para facilitar la adopción de perros y gatos. La plataforma centraliza la información de varias fundaciones, ayudando a los adoptantes a encontrar fácilmente a sus futuros compañeros y simplificando el proceso de adopción.",
    technologies: ["NestJS", "SQL", "React", "Tailwind","Vercel"],
    repo:"https://github.com/devrave/Project_PAM-React_NestJS",
    deploy:"https://front-pet-project-nine.vercel.app/",
  },
  {
    title: "Restaurant",
    image: project2,
    description:
      "Este sistema de gestión está creado para manejar el menú del restaurante a través de una sección de administración.",
    technologies: ["HTML", "CSS", "React", "NodeJS","Vite","JSon Server"],
    repo:"https://github.com/devrave/RIWI-RESTAURANT",
    deploy:"",
  },
  {
    title: "Machine Company",
    image: project3,
    description:
      "Desarrollar una página web que cubra las necesidades en el área de maquinaria pesada para instruir, asesorar y prestar servicios a personas y/o empresas que desempeñen labores de infraestructura vial y/o construcción.",
    technologies: ["HTML", "CSS", "JavaScript"],
    repo:"https://github.com/devrave/Project-Machine-Company",
    deploy:"",
  },
  {
    title: "devrave",
    image: project4,
    description:
      "Este es un proyecto diseñado para destacar habilidades y creatividad. Funciona como un portafolio digital interactivo que organiza y presenta trabajos, proyectos y logros de manera visualmente atractiva. Su diseño moderno y funcional permite una navegación intuitiva, ideal para causar una impresión profesional y mostrar talento al máximo nivel.",
    technologies: ["JSX", "CSS", "React", "Tailwind", "Motion"],
    repo:"https://github.com/devrave/PORTFOLIO-REACT",
    deploy:"https://devrave.online/",
  },
];

export const CONTACT = {
  address: "Medellín, Colombia ",
  phoneNo: "+57 3052347042 ",
  email: "a.canorave@gmail.com",
};
