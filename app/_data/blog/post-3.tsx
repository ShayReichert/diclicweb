import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post3 = {
  id: 3,
  title: "Accessibilité web : comment rendre mon site plus accessible ?",
  author: "Shay",
  slug: "accessibilite-web-comment-rendre-site-accessible",
  date: "2024-01-13",
  category: [2, 4],
  excerpt: "Voici des conseils pour permettre au mieux à tous·tes les internautes d'accéder au contenu de votre site web dans de bonnes conditions.",
  thumbnail: {
    path: "/images/blog/3_site_web_accessibilite_1.png",
    alt: "Dessin d'illustration, avec des écrans d'ordinateurs, de tablettes et de téléphones",
  },
  content: [
    {
      type: "paragraph",
      text: [
        <>
          <p>
            L'accessibilité web est souvent négligée par les entreprises et les organisations. Pourtant, elle est<strong> essentielle </strong>pour
            essayer de garantir à tous·tes les utilisateur·ices, y compris celles et ceux ayant des besoins spécifiques, de
            <strong> pouvoir accéder et naviguer facilement </strong>sur votre site.
            <br />
          </p>
        </>,
      ],
    },
    {
      type: "image",
      path: "/images/blog/3_site_web_accessibilite_2.png",
      alt: "Dessin d'illustration avec une personne en fauteuil roulant, devant un ordinateur, une tablette et un téléphone",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>1. Une structure qui a du sens</h2>
          <p>
            Votre site web est un peu comme une maison : il a besoin d'une<strong> structure claire </strong>pour pouvoir accueillir les
            visiteur·ices. Les pièces de votre maison doivent être facilement identifiables et accessibles. C'est pourquoi il est important d'utiliser
            les
            <strong> bonnes étiquettes HTML </strong>: "header", "nav", "main", "footer".... Comme ça, tout le monde s'y retrouve !
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>2. Des images qui parlent</h2>
          <p>
            Pour celleux qui ne voient pas très bien, il est important de donner une<strong> petite description aux images</strong>. C'est comme
            décrire une photo pour quelqu'un qui ne peut pas la voir. Il suffit pour ça de<strong> compléter l'attribut "alt" </strong>dans les
            balises "img". <br />
            Par exemple, pour une image d'un coucher de soleil, l'attribut alt pourrait être "Coucher de soleil sur la plage, avec des nuances de rose
            et d'orange dans le ciel".
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>3. Des couleurs adaptées</h2>
          <p>
            Privilégiez des couleurs avec un<strong> bon contraste </strong>pour que tout le monde puisse lire votre contenu. <br />
            Vous pouvez vérifier le contraste de vos couleurs sur des{" "}
            <a href="https://app.contrast-finder.org/?lang=fr" target="_blank" rel="noopener noreferrer">
              {" "}
              sites spécialisés
            </a>
            . <br />
            Il est important également<strong> d'adapter la taille des polices </strong>pour qu'elles soient aisément lisibles.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>4. Des titres et des sous-titres</h2>
          <p>
            Les titres et les sous-titres sont un peu comme les chapitres et sous-chapitres d'un livre : ils permettent de
            <strong> mieux s'y retrouver dans l'histoire</strong>. Il est important de<strong> respecter la hiérarchie des balises HTML </strong>:
            "h1", "h2", "h3"... Cela permet de structurer votre contenu et de le rendre plus accessible.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>5. Alternatives pour les contenus multimédias</h2>
          <p>
            Pour vos contenus vidéos et sonores, essayez de<strong> proposer des sous-titres et des transcriptions</strong> pour permettre aux
            personnes malentendantes de pouvoir accéder à votre contenu.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>6. Faites des tests</h2>
          <p>
            Utilisez des<strong> lecteurs d'écrans et des validateurs d'accessibilité </strong>pour vous assurer que tout fonctionne (par exemple, le
            lecteur d'écran NVDA ou le validateur d'accessibilité WAVE). Cela vous aidera à repérer les points à améliorer !
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
            En suivant ces quelques recommandations, vous allez augmenter l'accessibilité de votre site et
            <strong> créer une navigation plus fluide et agréable pour tout le monde </strong>! Si vous voulez en apprendre plus sur ce sujet, je vous
            conseille l'article{" "}
            <Link href="/blog/pourquoi-site-web-accessible-bénéfique/4">"Pourquoi un site web accessible est bénéfique à tout le monde ?"</Link> qui
            aborde également le sujet de l'accessibilité web.
          </p>
        </>,
      ],
    },
  ],

  related_posts: [2, 3],
};
