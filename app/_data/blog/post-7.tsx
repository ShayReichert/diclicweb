import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post7 = {
  id: 7,
  title: "Ai-je besoin d’un site internet ?",
  author: "Shay",
  slug: "besoin-site-internet",
  date: "2023-11-13",
  category: [4],
  excerpt:
    "Si un site web semble indispensable pour une entreprise ou un commerce, il l'est tout autant pour une association ou un club. Nous allons voir pourquoi !",
  thumbnail: {
    path: "/images/blog/7_besoin_site_web_1.webp",
    alt: "Ordinateur vue de dessus, avec des mains qui tapent sur le clavier",
  },
  content: [
    {
      type: "paragraph",
      text: [
        <>
          <p>
            De nos jours, la présence en ligne est <strong>cruciale</strong>. Cela vous offre un<strong> espace dédié </strong>pour présenter votre
            projet, communiquer sur vos actualités et répondre aux questions... Voyons en quelques points ce que peut vous apporter un site internet !
          </p>
        </>,
      ],
    },

    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>1. Crédibilité et sérieux</h2>
          <p>
            Avoir son propre site web donne une image<strong> professionnelle et engagée</strong>. Quand les gens chercheront des informations sur
            vous, ils auront accès à un site qui vous représente et qui vous appartient. Ce sera la<strong> première impression </strong>qu'ils auront
            de vous, il est donc important de la soigner !
          </p>
          <p>
            En mettant régulièrement votre site web à jour, vous montrerez également votre<strong> dynamisme et la pérennité </strong>de votre
            activité. C'est important pour rassurer vos<strong> futurs membres et trouver des partenaires </strong>!
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>2. Vente et support client</h2>
          <p>
            Que ce soit pour des<strong> adhésions, des dons ou la vente de produits liés à votre cause</strong>, une boutique en ligne simplifie
            grandement ces démarches.
          </p>
          <p>
            Votre site peut également jouer un rôle de<strong> support client </strong>: il vous permet de répondre rapidement et efficacement aux
            questions fréquentes de vos membres ou donateur·ices grâce à une<strong> section FAQ</strong>.
          </p>
          <p>
            Ces éléments augmente la satisfaction de vos adhérent·es, contribuant ainsi à potentiellement<strong> fidéliser et élargir </strong>votre
            communauté !
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>3. Collecte d'adresses mails</h2>
          <p>
            En proposant du<strong> contenu exclusif, des guides ou des newsletters régulières</strong>, vous incitez les visiteur·ices à partager
            leurs adresses e-mails. Cela vous offre une base de données précieuse de personnes<strong> véritablement intéressées </strong>par votre
            cause.
          </p>
          <p>
            Vous aurez ainsi le moyen de contacter une<strong> communauté engagée</strong>, souhaitant être tenue informée de vos activités et de vos
            actualités. Avoir une liste d'emails vous permettra de communiquer efficacement sur
            <strong> vos événements à venir, de solliciter du soutien </strong>lors de campagnes ou d'actions spécifiques par exemple.
          </p>
        </>,
      ],
    },
    {
      type: "image",
      path: "/images/blog/7_besoin_site_web_2.webp",
      alt: "Ordinateur de bureau, avec éclairage néon en arrière plan",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>4. Rassurer vos futurs membres</h2>
          <p>
            Avec un site web, vous pouvez <strong> exposer vos réalisations passées </strong>, expliquer vos <strong> missions actuelles </strong>et
            vos futurs objectifs. Cela permettra de démontrer votre expertise et la régularité de votre engagement.
          </p>
          <p>
            Vous pourrez aussi mettre en avant des <strong> témoignages </strong>de personnes ayant collaborées avec vous, rassurant ainsi de nouveaux
            membres potentiels.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>4. Économiser du temps !</h2>
          <p>
            Un site web vous permettra d'offrir un<strong> accès facile et rapide </strong> à des <strong> infos essentielles </strong>. Les démarches
            pour rejoindre votre association, vos futurs évenements, les moyens pour vous faire des dons... Tout ça sera accessibles au même endroit !
          </p>
          <p>
            Un site web peut également inclure des <strong> ressources pratiques</strong>, comme des formulaires d'adhésion en ligne, des documents
            téléchargeables, des liens vers d'autres ressources...
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
            Pour résumer, même si un site web peut sembler être un investissement coûteux, cela vous permettra certainement de{" "}
            <strong> gagner du temps et de l'argent </strong>sur le long terme ! <br />
            Si vous souhaitez des précisions ou un devis sur-mesure, n'hésitez pas à{" "}
            <Link href="/contact" role="link">
              me contacter
            </Link>{" "}
            pour qu'on en discute ensemble.
          </p>
        </>,
      ],
    },
  ],

  related_posts: [9, 10],
};
