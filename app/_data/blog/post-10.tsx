import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post10 = {
  id: 10,
  title: "Comment bien optimiser les images sur son site ?",
  author: "Shay",
  slug: "comment-bien-optimiser-images-site-web",
  date: "2023-11-13",
  category: [1, 4],
  excerpt:
    "L'importance du poids et de la taille des images sur un site est trop souvent négligée. Pourtant optimiser vos images peut vous aider significativement à avoir un site plus performant !",
  thumbnail: {
    path: "/images/services/etape_2.webp",
    alt: "Image d'illustration de l'article",
  },
  content: [
    {
      type: "paragraph",
      text: [
        <>
          <p>
            L'optimisation des images est une étape importante pour<strong> améliorer les performances</strong>,<strong> le référencement </strong>et
            <strong> l'expérience utilisateur </strong>de votre site web.
            <br />
          </p>
          <p>
            {" "}
            Des images plus légères, c'est aussi moins d'espace de stockage utilisé côté serveur, donc<strong> moins de pollution </strong>!
          </p>
          <p>Voyons en détail l'utilité d'optimiser ses images puis comment procéder 😉</p>
        </>,
      ],
    },
    {
      type: "image",
      path: "/images/about/a_propos_2.webp",
      alt: "Image d'un ordinateur avec un site web",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>L'importance de l'optimisation des images</h2>
          <h3 className={rocaOne.className}>Amélioration de l'expérience utilisateur</h3>
          <p>
            Les images jouent un rôle essentiel dans l'attrait visuel d'un site web. Cependant, si elles prennent trop de temps à charger, elles
            peuvent rapidement frustrer les visiteurs. En optimisant vos images, vous garantissez<strong> un chargement rapide et fluide</strong>,
            offrant ainsi une expérience utilisateur plus agréable.
          </p>
          <h3 className={rocaOne.className}>Un site plus écologique et moins cher</h3>
          <p>
            Des images lourdes occupent davantage d'espace sur votre serveur, ce qui peut entraîner des coûts supplémentaires en matière
            d'hébergement. En optimisant vos images, vous<strong> réduisez la quantité de données à stocker</strong>, ce qui se traduit par des
            <strong> économies potentielles</strong>.
          </p>
          <p>
            En optimisant vos images, vous rendez également votre site web<strong> plus écologique </strong>car moins de ressources serveur sont
            nécessaires pour stocker vos images.
          </p>
          <h3 className={rocaOne.className}>Amélioration du référencement</h3>
          <p>
            Les moteurs de recherche accordent de l'importance à la vitesse de chargement des pages. Des images optimisées permettent à votre site web
            de<strong> se charger plus rapidement</strong>, ce qui peut avoir un impact positif sur votre classement dans les
            <strong> résultats de recherche</strong>.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>Comment bien optimiser ses images</h2>
          <p>Suivez ces étapes simples pour garantir des images optimales sur votre site web :</p>
          <ol>
            <li>
              <strong>Redimensionner </strong>: Utilisez un outil tel que{" "}
              <Link href="https://www.resizepixel.com/" role="link" target="_blank">
                Resizepixel
              </Link>{" "}
              pour ajuster les dimensions de vos images en fonction de leur utilisation sur le site. Évitez de télécharger des images excessivement
              grandes qui seront redimen
            </li>
            <li>
              <strong>Compresser </strong>: Rendez-vous sur{" "}
              <Link href="https://compressor.io/" role="link" target="_blank">
                compressor.io
              </Link>{" "}
              et téléchargez vos images. Cet outil comprime automatiquement les images tout en préservant leur qualité. Les images compressées
              conservent leur netteté tout en prenant moins de place.
            </li>
            <li>
              <strong>Convertir en WebP </strong>: Utilisez{" "}
              <Link href="https://convertio.co/fr/" role="link" target="_blank">
                Convertio.co
              </Link>{" "}
              pour convertir vos images au format WebP. Ce format offre une qualité similaire à JPG et PNG, mais avec une taille de fichier
              considérablement réduite, garantissant ainsi des temps de chargement plus rapides.
            </li>
            <li>
              <strong>Renommer judicieusement </strong>: Profitez de cette étape pour attribuer des noms descriptifs à vos images en fonction de leur
              contenu. Cela non seulement facilite l'organisation, mais contribue également à améliorer le référencement.
            </li>
            <li>
              <strong>Intégration sur votre site web </strong>: Une fois vos images optimisées, uploadez-les sur votre site web !
            </li>
          </ol>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <p>-------</p>
          <p>
            En suivant ces étapes, vous garantissez des images bien optimisées qui amélioreront significativement les performances de votre site web.
          </p>
        </>,
      ],
    },
  ],

  related_posts: [1, 8, 9],
};
