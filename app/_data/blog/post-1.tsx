import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post1 = {
  id: 1,
  title: "C’est quoi l’éco-conception d’un site web ? 🌿",
  author: "Shay",
  slug: "eco-conception-site-web",
  date: "2023-11-07",
  category: [1],
  excerpt:
    "L'éco-conception de site internet est un enjeu de plus en plus important pour les entreprises et les organisations qui souhaitent minimiser leur impact environnemental.",
  thumbnail: "/images/services/icon_site.png",
  content: [
    {
      type: "paragraph",
      text: [
        <>
          <p>
            L'éco-conception de site internet est un enjeu de plus en plus important pour les entreprises et les organisations qui souhaitent
            minimiser leur impact environnemental. En tant que créateur de site, je m'efforce de mettre en place des pratiques durables sans pour
            autant nuire aux performances du site et à l’expérience utilisateur·ice (au contraire même !). <br />
            Je vous explique dans cet article mes méthodes et mes outils pour créer des sites web éco-responsables.
          </p>
        </>,
      ],
    },
    {
      type: "image",
      path: "/images/services/icon_site.png",
      alt: "Image d'un ordinateur avec un site web",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>1. Utiliser les bons outils 🛠️</h2>
          <p>
            Je privilégie l'utilisation de Wordpress avec le thème Divi, qui me permet de créer des sites personnalisés et réactifs sans avoir à
            recourir à des plugins superflus. Cela contribue à alléger la charge du site et à améliorer sa vitesse de chargement.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>2.Optimiser les images 🩻</h2>
          <p>
            Pour optimiser la taille et le poids des images, je m'assure de les compresser sans perdre en qualité, et de ne télécharger que les images
            réellement utiles sur le site. Cela permet de réduire le temps de chargement des pages et d'économiser de la bande passante, tant pour les
            utilisateur·ices que pour l'hébergeur du site. <br />
            L’utilisation du “lazy load” permet également de ne charger les images uniquement que lorsque celle-ci sont nécessaires (au fur et à
            mesure du scroll). <br />
            <Link href="/a-propos" role="link">
              → Voir l’article “Comment bien optimiser les images sur son site"
            </Link>
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>3. Le choix de l’hébergeur 🏠</h2>
          <p>
            Je recommande notamment à mes client·es de choisir l’hébergeur O2switch, une entreprise française reconnue pour ses pratiques
            respectueuses de l'environnement et son utilisation de sources d'énergie renouvelables.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2>4. Des design sobres et efficaces 🎨</h2>
          <p>
            Côté design, j'opte pour une esthétique épurée et minimaliste, qui met en valeur le contenu du site tout en proposant une interface claire
            et intuitive. Je n'ajoute que les fonctionnalités utiles et essentielles, afin d'éviter de surcharger le site et de rendre la navigation
            agréable pour les utilisateur·ices.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>5. Mise en cache 🚀</h2>
          <p>
            La mise en cache d'un site web consiste à enregistrer temporairement une copie des données d'un site sur l'ordinateur de l'utilisateur·ice
            et accélère les temps de chargement. Cela permet de réduire la quantité de données transférées via le réseau, ce qui réduit la
            consommation d'énergie et la charge côté serveurs.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <p>
            En adoptant ces pratiques **éco-responsables**, je suis heureux de contribuer à la création de sites internet durables, qui limitent leur
            empreinte carbone tout en proposant une expérience de navigation optimale aux utilisateur·ices. Tout benef’ ! 🙌 🌿
          </p>
          <p>
            Si vous avez besoin de conseils ou d’accompagnements pour votre projet, n’hésitez pas à
            <Link href="/contact" role="link">
              me contacter
            </Link>
            .
          </p>
        </>,
      ],
    },
  ],

  related_posts: [2, 3],
};
