import LogoImage from './Logo.png'; // Assurez-vous que le chemin est correct

export default function createLogo(context) {
  // Créez l'élément img
  const logo = document.createElement('img');

  // Définissez la source de l'image sur l'URL importée
  logo.src = LogoImage;

  // Définissez d'autres styles ou attributs au besoin
  logo.style.margin = '5px';
  logo.style.width = '100px'; // Par exemple, définissez la largeur de l'image
  logo.alt = 'Your Logo'; // Ajoutez un attribut alt pour l'accessibilité

  return logo;
}
