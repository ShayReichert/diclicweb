import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post9 = {
  id: 9,
  title: "Est-ce que je peux faire mon site internet moi-même ?",
  author: "Shay",
  slug: "faire-site-web-soi-meme",
  date: "2023-11-13",
  category: [4],
  excerpt: "Faire votre site internet vous-même est tout à fait possible. Mais est-ce que c'est une bonne idée ? Et comment s'y prendre ?",
  thumbnail: {
    path: "/images/blog/9_faire_site_soi_meme_1.webp",
    alt: "Des papiers avec des notes et un ordinateur",
  },
  content: [
    {
      type: "paragraph",
      text: [
        <>
          <p>
            Si vous vous lancez dans la création de votre site internet et que vous disposez de
            <strong> bonnes connaissances en développement web </strong>tout en ayant un<strong> budget limité</strong>, alors créer votre site
            vous-même peut être une excellente option. Cela vous permettra d'avoir un contrôle total sur le processus de création et de personnaliser
            votre site selon vos besoins.
          </p>
        </>,
      ],
    },

    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>1. Comment créer un site internet professionnel</h2>
          <p>Voici quelques conseils essentiels pour réaliser au mieux votre site vous-même :</p>
          <ul>
            <li>
              <strong>Définissez vos objectifs </strong>: Avant de commencer, il est crucial de définir clairement les objectifs de votre site.
              Pourquoi avez-vous besoin de ce site web ? Que souhaitez-vous accomplir ? Quels sont les messages que vous souhaitez transmettre à vos
              visiteur·ices ?
            </li>
            <li>
              <strong>Créez une identité graphique cohérente </strong>: Même avec des moyens limités, il est possible de développer une identité
              visuelle professionnelle. Choisissez<strong> des couleurs, des polices et des images </strong>qui correspondent à votre activité.
              N'hésitez pas à vous inspirer de la concurrence, tout en veillant à rester authentique bien sûr. 😉
            </li>
            <li>
              <strong>Optimisez les performances </strong>: La vitesse de chargement de votre site est cruciale. Assurez-vous qu'il se charge
              rapidement pour offrir une expérience utilisateur optimale.
            </li>
            <li>
              <strong>Soignez votre contenu </strong>: Le contenu de votre site doit être informatif, engageant et bien organisé. Il doit refléter
              votre expertise et<strong> susciter l'intérêt </strong>de vos visiteur·ices.
            </li>
          </ul>
          <p>Quelques exemples de plateformes intuitives avec lesquelles vous pourrez créer votre site web : Odoo, Wix, Wordpress...</p>
          <p>
            Et si vous envisagez de mettre en place une boutique en ligne, plusieurs plateformes vous simplifient la tâche, telles que Shopify, Wix,
            Squarespace, ou encore Etsy ou Big Cartel pour les artistes et les artisan·es.
          </p>
          <p>
            Cependant, il est important de noter que<strong> ces solutions présentent des limites</strong>. Votre site ou votre boutique ne vous
            appartiendra pas complètement, et vous pourriez rapidement rencontrer des<strong> limitations en termes de fonctionnalités</strong>. De
            plus, les<strong> coûts supplémentaires </strong> peuvent rapidement s'accumuler (premium, fonctionnalités supplémentaires, frais de
            transaction, etc.).
          </p>
        </>,
      ],
    },
    {
      type: "image",
      path: "/images/blog/9_faire_site_soi_meme_2.webp",
      alt: "Ddeux personnes de dos, devant un ordinateur",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>2. Faire appel à un·e professionnel·le</h2>
          <p>
            Si vous disposez du budget nécessaire, faire appel à un·e professionnel·le pour créer votre site est une
            <strong> option que je recommande vivement</strong>. Cela vous permettra de<strong> vous concentrer pleinement sur votre projet </strong>
            et d'investir votre temps dans d'autres aspects de votre activité.
          </p>
          <p>
            La conception et la gestion d'un site web peuvent être<strong> énergivores et techniques</strong>. Travailler avec un·e développeur·se ou
            un·e créateur·ice de site web professionnel·le et sérieux·se vous assure<strong> des bases solides pour votre projet</strong>, adaptées à
            vos besoins spécifiques.
            <br /> De plus, vous pourrez facilement les contacter pour<strong> faire évoluer votre site </strong>selon vos besoins futurs. Cela vaut
            également pour<strong> la maintenance et l'entretien de votre site</strong>, vous permettant ainsi de vous concentrer pleinement sur votre
            activité.
          </p>
          <p>
            Au final, l'investissement financier sera<strong> rapidement rentabilisé </strong>par les avantages et la qualité de votre site !
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
            Que vous choisissiez de créer votre site vous-même ou de faire appel à un·e professionnel·le dépendra de trois facteurs :
            <strong> vos besoins, vos compétences et vos ressources</strong>. Quelle que soit la solution choisie, prenez le temps en amont de définir
            vos objectifs et votre identité visuelle pour un site de qualité.
          </p>
          <p>
            Et si vous avez des questions ou si vous souhaitez de l'aide pour votre projet de site web, n'hésitez pas à{" "}
            <Link href="/contact" role="link">
              me contacter
            </Link>{" "}
            pour qu'on en discute !
          </p>
        </>,
      ],
    },
  ],

  related_posts: [6, 7, 10],
};
