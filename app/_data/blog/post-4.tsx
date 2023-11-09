import { rocaOne } from "../../styles/fonts/font-face";

export const post4 = {
  id: 4,
  title: "Pourquoi rendre mon site web accessible ?",
  author: "Shay",
  slug: "pourquoi-site-web-accessible-bénéfique",
  date: "2023-11-10",
  category: [2],
  excerpt: "Je vous explique ici tous les avantages d'un site web accessible ! 😌",
  thumbnail: {
    path: "/images/blog/4_pourquoi_site_web_accessible.png",
    alt: "Dessin d'illustration d'une personne en fauteuil roulant devant un site web accessible",
  },
  content: [
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>1. Augmenter les personnes pouvant accéder à votre contenu</h2>
          <p>
            En rendant votre site web accessible, vous permettez à plus de personnes d'accéder à votre contenu.
            <br />
            Cela peut être des personnes en<strong> situation de handicap</strong>, mais également des
            <strong> personnes âgées des personnes qui ne parlent pas votre langue, des personnes qui ont des difficultés à lire</strong>, etc.
          </p>

          <p>
            Cela peut également être des personnes qui ne sont pas à l'aise avec la technologie, ou qui n'ont pas accès à une connexion internet de
            qualité. En bref, cela peut être bénéfique à tout le monde !
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>2. Un meilleur référecement</h2>
          <p>
            Votre site respectera les bonnes pratiques du web, ce qui permettra aux
            <strong> moteurs de recherche de mieux comprendre votre contenu </strong>et de mieux le référencer.
          </p>
        </>,
      ],
    },
    {
      type: "image",
      path: "/images/blog/4_site_web_accessible_seo.webp",
      alt: "Ecran d'ordinateur avec un fond d'écran graphique sur lequel on voit marqué SEO",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>3. Etre en règle avec la loi</h2>
          <p>
            La loi tend à rendre l'accessibilité web de<strong> plus en plus obligatoire </strong>pour les sites web publics et privés. En rendant
            votre site accessible dès aujourd'hui, vous aurez moins de changements à faire par la suite !
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>4. Améliorer votre image</h2>
          <p>
            En rendant votre site accessible, vous montrez que vous êtes une entreprise ou une organisation qui se
            <strong> soucie de l'inclusivité web </strong>et qui souhaite offrir la meilleure expérience possible à tout le monde.
          </p>
        </>,
      ],
    },
  ],

  related_posts: [2, 3],
};
