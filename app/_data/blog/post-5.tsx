import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post5 = {
  id: 5,
  title: "Création de sites web par et pour les queers !",
  author: "Shay",
  slug: "creation-site-web-queers",
  date: "2023-11-11",
  category: [2],
  excerpt: "Vous êtes une personne queer et vous avez un projet de site web ? Je peux certainement vous aider ! 🙌",
  thumbnail: {
    path: "/images/blog/5_sites_web_queer_1.webp",
    alt: "Image d'illustration de l'article",
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
      type: "image",
      path: "/images/blog/5_sites_web_queer_2.webp",
      alt: "Image d'un ordinateur avec un site web",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>2. Mes aventures passées</h2>
          <ul>
            <li>
              <strong>
                <Link href="https://queerbandfrance.com/" role="link" target="_blank">
                  QueerBandFrance
                </Link>{" "}
                :{" "}
              </strong>
              Un site référençant les groupes de musique queer en France.
            </li>
            <li>
              <strong>
                <Link href="https://lesqueeriersducinema.com/" role="link" target="_blank">
                  Les Queeriers du Cinéma
                </Link>{" "}
                :{" "}
              </strong>
              Un blog sur les pépites du cinéma queers, LGBTQIA+ et inclusifs.
            </li>
            <li>
              <strong>
                <Link href="https://moncinemaqueer.netlify.app/" role="link" target="_blank">
                  Mon Cinéma Queer
                </Link>{" "}
                :{" "}
              </strong>
              Un site listant les derniers films queer sortis.
            </li>
          </ul>
          <p>
            J'ai également collaboré avec des personnes queers pour<strong> les accompagner dans la création de leur site web </strong>!
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>3. Vous êtes queers et vous avez besoin d'un site web ? 🏳️‍⚧️</h2>
          <p>
            Vous êtes une<strong> association queer ou LGBTQIA+ </strong>et vous avez besoin d'un site web ? Ou vous êtes entrain de
            <strong> monter votre entreprise </strong>et vous auriez bien besoin d'un site vitrine ? Ou encore vous avez besoin d'un
            <strong> site e-commerce pour de la vente en ligne </strong>?
          </p>
          <p>
            {" "}
            N'hésitez pas à{" "}
            <Link href="/contact" role="link">
              me contacter
            </Link>{" "}
            pour voir si nous pouvons collaborer !
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>4. Vous avez un projet de site web queers ?</h2>
          <p>
            Si vous avez plutôt un projet de<strong> site web ou d'application web utile à la communauté queer ou LGBTQIA+ </strong>ça marche aussi !{" "}
            <Link href="/contact" role="link">
              Contactez-moi
            </Link>{" "}
            et nous discuterons ensemble de votre projet 😃
          </p>
        </>,
      ],
    },
  ],

  related_posts: [4, 9],
};
