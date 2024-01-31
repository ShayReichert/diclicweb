import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post10 = {
  id: 10,
  title: "Comment bien optimiser les images sur son site ?",
  author: "Shay",
  slug: "comment-bien-optimiser-images-site-web",
  date: "2024-01-26",
  category: [1, 4],
  excerpt:
    "L'importance du poids et de la taille des images sur un site est trop souvent négligée. Pourtant optimiser vos images peut vous aider significativement à avoir un site plus performant !",
  thumbnail: {
    path: "/images/blog/10_optimiser_images_site_web_1.webp",
    alt: "Quelqu'un qui scrolle sur un smartphone",
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
      path: "/images/blog/10_optimiser_images_site_web_2.webp",
      alt: "Une personne devant un ordinaateur portable",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>L'importance de l'optimisation des images</h2>
          <h3 className={rocaOne.className}>Amélioration de l'expérience utilisateur</h3>
          <p>
            Les images sont cruciales pour l'esthétique de votre site, mais des fichiers trop volumineux peuvent considérablement ralentir le temps de
            chargement. Une compression efficace des images<strong> réduit leur taille sans compromettre la qualité visuelle</strong>, assurant ainsi
            un affichage<strong> rapide et sans interruption</strong>. Cela contribue à une expérience utilisateur·ice fluide et satisfaisante,
            réduisant le risque de frustration et d'abandon de la part des visiteur·ices.
          </p>
          <h3 className={rocaOne.className}>Un site plus écologique et moins cher</h3>
          <p>
            Les images non optimisées<strong> consomment inutilement de l'espace serveur</strong>, entraînant également des coûts d'hébergement plus
            élevés.
          </p>
          <p>
            Un site nécessitant moins de ressources serveur pour le chargement des images est
            <strong> plus respectueux de l'environnement</strong>, contribuant à réduire l'empreinte carbone de votre activité numérique. De plus en
            compressant vos images, vous diminuez leur taille de fichier, réduisant l'espace de stockage requis et les coûts associés.
          </p>

          <h3 className={rocaOne.className}>Amélioration du référencement</h3>
          <p>
            La rapidité d'un site est un critère de référencement clé pour<strong> les moteurs de recherche </strong>comme Google. En optimisant vos
            images pour qu'elles se chargent plus vite, vous<strong> améliorez les performances globales de votre site</strong>.
          </p>
          <p>
            Cette accélération du temps de chargement peut non seulement améliorer votre positionnement dans les résultats de recherche, mais aussi
            augmenter l'engagement des utilisateur·ices et<strong> réduire le taux de rebond</strong>.
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
              <Link href="https://www.resizepixel.com/" role="link" target="_blank" rel="noopener noreferrer">
                Resizepixel
              </Link>{" "}
              pour ajuster les dimensions de vos images en fonction de leur utilisation sur le site. Évitez de télécharger des images excessivement
              grandes qui seront ensuite redimensionnées par le navigateur.
              <br />
              Uploadez simplement votre image, choisissez les dimensions souhaitées et téléchargez l'image redimensionnée. Idéal pour adapter vos
              images aux différents emplacements sur votre site, comme les vignettes d'article ou les en-têtes de page.
            </li>
            <li>
              <strong>Compresser </strong>: Rendez-vous sur{" "}
              <Link href="https://compressor.io/" role="link" target="_blank" rel="noopener noreferrer">
                compressor.io
              </Link>{" "}
              et téléchargez vos images. Cet outil comprime automatiquement les images tout en préservant leur qualité. Les images compressées
              conservent leur netteté tout en prenant moins de place. <br />
              Glissez-déposez simplement vos images sur la plateforme et cliquez sur "Download" pour récupérer vos images compressées. <br />
              <small>
                <em>
                  Si vous cherchez d'autres outils, TinyPNG est excellent pour compresser les fichiers PNG et JPEG. Il est également possible
                  d'utiliser des plugins WordPress comme Smush ou EWWW Image Optimizer pour automatiser cette étape.
                </em>
              </small>
            </li>
            <li>
              <strong>Convertir en WebP </strong>: Utilisez{" "}
              <Link href="https://convertio.co/fr/" role="link" target="_blank" rel="noopener noreferrer">
                Convertio.co
              </Link>{" "}
              pour convertir vos images au format WebP. Ce format offre une qualité similaire à JPG et PNG, mais avec une taille de fichier
              considérablement réduite, garantissant ainsi des temps de chargement plus rapides. Sélectionnez simplement votre fichier, choisissez le
              format WebP et téléchargez votre nouvelle image optimisée pour le web.
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
            En somme, l'optimisation des images est bien plus qu'une simple amélioration technique : en prenant le temps de compresser et d'optimiser
            chaque image, vous investissez dans<strong> la performance et la durabilité </strong>de votre présence en ligne !
          </p>
          <p>
            {" "}
            Si vous vous intéressez aux démarches d'éco-conception de sites web, cet autre article peut vous intéresser :{" "}
            <Link href="/blog/eco-conception-site-web/1" role="link">
              C’est quoi l’éco-conception d’un site web ? 🌿
            </Link>
          </p>
        </>,
      ],
    },
  ],

  related_posts: [1, 8, 9],
};
