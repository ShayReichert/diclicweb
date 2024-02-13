import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post1 = {
  id: 1,
  title: "C’est quoi l’éco-conception d’un site web ? 🌿",
  author: "Shay",
  slug: "eco-conception-site-web",
  date: "2024-01-07",
  category: [1],
  excerpt:
    "Éco-concevoir un site, c'est essayer d'anticiper et de réduire l'impact environnemental du site tout au long de sa vie : de sa conception à sa mise en ligne, en passant par son hébergement et sa maintenance.",
  thumbnail: {
    path: "/images/blog/1_eco_conception_site_web_1.webp",
    alt: "Un ordinateur avec un paysage de nature dans l'écran",
  },
  content: [
    {
      type: "paragraph",
      text: [
        <>
          <p>
            Si internet était un pays, il serait<strong> le 3ème plus gros consommateur d’électricité au monde </strong>après la Chine et les
            États-Unis. Et cette consommation double tous les deux ans !
          </p>
          <p>
            En tant que créateur de sites, j'estime avoir une responsabilité lorsque je propose des solutions numériques, c'est pourquoi j'essaye de
            mettre en place des <strong> pratiques plus durables </strong>sans sacrifier les performances du site, ni l’expérience utilisateur·ice (au
            contraire même !). <br />
          </p>
          <p>
            Je vais vous expliquer ici mes<strong> astuces et outils </strong>pour créer les sites web plus éco-responsables.
          </p>
        </>,
      ],
    },

    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>1. Utiliser les bons outils 🛠️</h2>
          <p>
            Quand le projet est adapté, je préfère coder<strong> des sites web statiques</strong>. Ils sont plus légers et plus rapides que les sites
            dynamiques. Ils ne nécessitent pas de base de données et sont donc bien moins énergivores !<br />
          </p>
          <p>
            Pour les sites e-commerce, ou si des fonctionnalités spécifiques sont nécessaires, j'utilise principalement{" "}
            <strong> WordPress avec le thème Divi</strong>. Cela me permet de créer des sites<strong> personnalisés et réactifs </strong>sans avoir à
            recourir à des plugins superflus. Cela contribue aussi à alléger la charge du site et à améliorer sa vitesse de chargement.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>2. Optimiser les images 🩻</h2>
          <p>
            Pour optimiser la taille et le poids des images, je m'assure de les<strong> compresser sans perdre en qualité</strong>, et de n'ajouter
            que les images réellement nécessaires sur le site. Cela réduit le temps de chargement des pages et économise de la bande passante, tant
            pour les utilisateur·ices que pour l'hébergeur du site. <br />
          </p>
          <p>
            {" "}
            L’utilisation du<strong> “lazy load” </strong>permet également de ne charger les images uniquement lorsqu'on en a besoin (au fur et à
            mesure du scroll).
          </p>
          <p>
            <Link href="/blog/comment-bien-optimiser-images-site-web/10" role="link">
              → Voir l’article “Comment bien optimiser les images sur son site"
            </Link>
          </p>
        </>,
      ],
    },
    {
      type: "image",
      path: "/images/blog/1_eco_conception_site_web_2.webp",
      alt: "Une forêt au lever du soleil",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>3. Le choix de l’hébergeur 🏠</h2>
          <p>
            Je recommande souvent à mes client·es de choisir<strong> l’hébergeur O2switch</strong>, une entreprise française reconnue pour ses
            pratiques respectueuses de l'environnement et son utilisation de sources d'énergie renouvelables. Leur offre unique est complète et leur
            support client très réactif. C'est un très bon choix !
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>4. Des design sobres et efficaces 🎨</h2>
          <p>
            Côté design, j'opte souvent pour une<strong> esthétique assez épurée et minimaliste</strong>. Cela permet de mettre valeur le contenu du
            site en gardant une interface claire et intuitive. Je n'ajoute que des<strong> fonctionnalités vraiment essentielles ou utiles </strong>{" "}
            pour que le site ne soit pas surchargé et que la navigation reste agréable pour les utilisateur·ices.
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
            La mise en cache d'un site web, c'est<strong> garder une copie temporaire du site sur son ordinateur</strong>. Quand on revient sur le
            site, s'il n'a pas été modifié entre temps, c'est cette copie qui sera affichée. Cela accélère considérablement le temps de chargement et
            <strong> réduit la quantité de données échangées</strong>. <br />
            Moins de data = moins d'énergie consommée !
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <p>-------</p>
          <p>
            En adoptant ces quelques pratiques <strong>éco-responsables</strong>, vous pouvez vous aussi limiter l'empreinte carbone de vos sites,
            tout en proposant une expérience de navigation plus agréable aux utilisateur·ices. Tout benef’ ! 🙌 🌿
          </p>
          <p>
            Et si vous avez besoin d'un accompagnement pour votre projet, n’hésitez pas à
            <Link href="/contact" role="link">
              {" "}
              me contacter{" "}
            </Link>
            !
          </p>
        </>,
      ],
    },
  ],

  related_posts: [2, 3, 10],
};
