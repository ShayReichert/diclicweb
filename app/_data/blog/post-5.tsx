import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post5 = {
  id: 5,
  title: "Création de sites web par et pour les queers !",
  author: "Shay",
  slug: "creation-site-web-queers",
  date: "2024-01-20",
  category: [2],
  excerpt: "Vous êtes une personne queer et vous avez un projet de site web ? Je peux certainement vous aider ! 🙌",
  thumbnail: {
    path: "/images/blog/5_sites_web_queer_1.webp",
    alt: "Bras avec un bracelet arc-en-ciel LGBT au poignet",
  },
  content: [
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>1. Je me présente 😃</h2>
          <p>
            Moi c'est Shay, je suis développeur web et je suis une personne<strong> queer et trans</strong>. Étant directement concerné, développer
            des sites pour la communauté queer et LGBTQIA+ est quelque chose qui
            <strong> me tient particulièrement à coeur </strong> ! 🏳️‍🌈 <br />
          </p>
          <p>
            Je souhaite également apporter mon aide aux<strong> projets à impacts, inclusifs et qui ont du sens </strong>plus généralement (artisanat,
            culture, art, écologie, projets associatifs...).
          </p>
        </>,
      ],
    },

    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>2. Mes aventures passées</h2>
          <ul>
            <li>
              <strong>
                <Link href="https://queerbandfrance.com/" role="link" target="_blank" rel="noopener noreferrer">
                  QueerBandFrance
                </Link>{" "}
                :{" "}
              </strong>
              Un site référençant les<strong> groupes de musique queer et féministes</strong>en France. <br />
              Ce site a été conçu en collaboration avec l'association "This is a RIOT", pour référencer et promouvoir les groupes de musique queer et
              féministe à travers la France, offrant une plateforme pour augmenter leur visibilité. Ce site permet également aux organisateur·ices de
              concerts et de festivals queer de trouver plus facilement des groupes à programmer.
            </li>
            <li>
              <strong>
                <Link href="https://lesqueeriersducinema.com/" role="link" target="_blank" rel="noopener noreferrer">
                  Les Queeriers du Cinéma
                </Link>{" "}
                :{" "}
              </strong>
              Un blog sur les pépites du cinéma queers, LGBTQIA+ et inclusifs. <br />
              Ce blog a été crée dans le but de partager et promouvoir des films sur d'autres critères que des notes.
              <br />
              Chaque film a 5 barres de critères : "Représentation et visibilisation", "Personnes Concernées", "Feel Good", "Militant" et
              "Déconstruction". <br />
              Des<strong> triggers warnings </strong>sont également indiqués pour chaque film, pour prévenir des contenus sensibles (violences,
              maladies, morts, etc.).
            </li>
            <li>
              <strong>
                <Link href="https://moncinemaqueer.netlify.app/" role="link" target="_blank" rel="noopener noreferrer">
                  Mon Cinéma Queer
                </Link>{" "}
                :{" "}
              </strong>
              Un site listant les derniers films queer sortis. <br />
              Je souhaitais offrir un moyen simple et rapide de connaitre les<strong> dernières sorties de films queers</strong>. Le site utilise
              l'API de TMDB (The Movie DataBase), une des plus grandes bases de données de films au monde.
            </li>
          </ul>
          <p>
            J'ai également collaboré avec des personnes queers pour<strong> les accompagner dans la création de leur site web </strong>! (site
            e-commerce pour de la vente en ligne, site vitrine pour présenter leur entreprise...)
          </p>
        </>,
      ],
    },
    {
      type: "image",
      path: "/images/blog/5_sites_web_queer_2.webp",
      alt: "Aperçu du site web Les Queeriers du cinéma",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>3. Vous êtes queers et vous avez besoin d'un site web ? 🏳️‍⚧️</h2>
          <p>
            Que vous représentiez une<strong> association LGBTQIA+ </strong>à la recherche d'une plateforme pour unir et informer votre communauté,
            que vous lanciez<strong> votre propre entreprise </strong>ou que vous souhaitiez établir<strong> un espace de vente en ligne </strong>avec
            une thématique queer et/ou féministe : je peux sans doute vous aider à créer un site qui répond à vos besoins.
          </p>
          <p>
            {" "}
            N'hésitez pas à{" "}
            <Link href="/contact" role="link">
              me contacter
            </Link>{" "}
            pour me parler de votre projet 😃
          </p>
        </>,
      ],
    },
  ],

  related_posts: [4, 9],
};
