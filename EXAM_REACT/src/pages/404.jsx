import { useRouteError } from "react-router-dom";

// Définition du composant ErrorPage
export default function ErrorPage() {
  // Utilisation du hook useRouteError pour obtenir les détails de l'erreur de la route
  const error = useRouteError();

  // Affichage de l'erreur dans la console pour le débogage
  console.error(error);

  // Rendu JSX de la page d'erreur
  return (
    <div id="error-page">
      <h1>Oops!</h1>

      <p>Sorry, an unexpected error has occurred.</p>

      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
