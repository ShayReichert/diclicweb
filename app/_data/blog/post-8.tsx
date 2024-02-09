import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post8 = {
  id: 8,
  title: "Pourquoi opter pour un site statique ?",
  author: "Shay",
  slug: "pourquoi-opter-site-statique-jamstack",
  date: "2024-01-23",
  category: [1, 4],
  excerpt: "Quels sont les avantages et inconvénients de la JAMStack, cette alternative de plus en plus répandu au développement web classique ?",
  thumbnail: {
    path: "/images/blog/8_site_web_statique_jamstack_1.webp",
    alt: "Ordinateur portable sur un bureau, avec un site web",
  },
  content: [
    {
      type: "paragraph",
      text: [
        <>
          <p>
            La JAMStack ("JAM" pour JavaScript, APIs et Markdown) est une manière moderne de créer des sites web. En fournissant un
            <strong> contenu statique</strong>, elle vise à améliorer la<strong> performance </strong>, la<strong> sécurité </strong>et la
            <strong> rapidité de chargement </strong>des sites.
          </p>
          <p>
            Contrairement aux sites traditionnels qui sont préparés à la demande (un peu comme un repas fait à la minute),
            <strong> les sites JAMStack sont comme des plats préparés à l'avance</strong>, prêts à être servis instantanément à qui en a besoin. Cela
            les rend particulièrement rapides à charger et difficiles à perturber par des visiteur·ices malveillant·es.
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>Les avantages d'un site statique</h2>
          <ul>
            <li>
              <strong>Rapidité</strong> : Grâce à leur pré-génération, les pages d'un site statique s'affichent bien<strong> plus rapidement </strong>
              pour les utilisateur·ices, offrant une expérience de navigation véritablement fluide.
              <br />
              Un exemple frappant est le site de{" "}
              <Link href="https://legacy.reactjs.org/docs/getting-started.html" target="_blank" role="link" rel="noopener noreferrer">
                documentation de React
              </Link>
              , une bibliothèque JavaScript populaire. Grâce à sa nature statique, chaque page se charge presque instantanément, améliorant
              considérablement l'expérience utilisateur·ice.
            </li>
            <li>
              <strong>Sécurité renforcée</strong> : Du fait de l'absence de bases de données ou de gestion de contenu dynamique, les sites statiques
              sont<strong> moins vulnérables aux attaques malveillantes</strong>, assurant ainsi une sécurité accrue.
              <br />
              Le site de GitHub Pages, par exemple, héberge d'innombrables projets statiques, offrant une plateforme robuste et sécurisée pour les
              développeur·ses et leurs projets.
            </li>
            <li>
              <strong>Déploiement simplifié</strong> : Le déploiement d'un site statique s'opère aisément sur une multitude de plateformes
              d'hébergement, telles que GitHub Pages, Netlify et Vercel, facilitant ainsi la mise en ligne. Ces plateformes permettent d'automatiser
              le déploiement en seulement quelques clics !
            </li>
            <li>
              <strong>Coûts de maintenance allégés</strong> : L'absence de base de données ou de gestion de contenu dynamique réduit considérablement
              le travail de maintenance, ce qui se traduit par des<strong> coûts moindres à long terme</strong>. <br />
              Le blog{" "}
              <Link href="https://www.smashingmagazine.com/" target="_blank" role="link" rel="noopener noreferrer">
                Smashing Magazine
              </Link>{" "}
              a migré vers une architecture statique, réduisant considérablement ses dépenses opérationnelles tout en améliorant la performance et la
              fiabilité.
            </li>
            <li>
              <strong>Scalabilité optimale</strong> : Grâce à leur pré-génération, les pages statiques peuvent être aisément mises en cache et servies
              à partir de serveurs de contenu dédiés, ce qui renforce la scalabilité du site. Lors d'une campagne virale par exemple, un site statique
              peut<strong> gérer un afflux massif de visiteur·ices </strong>sans faiblir.
            </li>
          </ul>
        </>,
      ],
    },
    {
      type: "image",
      path: "/images/blog/8_site_web_statique_jamstack_2.webp",
      alt: "Un ordinateur portable, une tablette et un smartphone sur un bureau",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>Les inconvénients potentiels</h2>
          <p>
            Cependant, il est important de noter que les sites statiques ne conviennent pas à tous les types de projets et présentent certains
            inconvénients. En voici quelques uns :
          </p>
          <ul>
            <li>
              <strong>Fonctionnalités limitées</strong> : En raison de leur caractère pré-généré, il peut être complexe d'incorporer des{" "}
              <strong> fonctionnalités interactives </strong>ou certains éléments de contenu dynamique. Il existe des solutions, mais celles-ci
              peuvent être plus longues à mettre en place que sur un site classique.
            </li>
            <li>
              <strong>Gestion du contenu délicate</strong> : Le contenu statique peut poser des défis lorsqu'il s'agit de le mettre à jour,
              nécessitant parfois de repasser par le processus de génération de pages. Il existe cependant de plus en plus de solutions qui facilitent
              ce processus, comme<strong> les CMS Headless </strong>(Strapi, Contentful, Prismic, etc.). Ces CMS permettent de gérer le contenu de
              manière intuitive et offre une solution adaptée aux non-développeur·ses pour publier du contenu aisément.
            </li>
            <li>
              <strong>Gestion des données en temps réel</strong> : Manipuler les données en temps réel peut se révéler complexe avec un site statique,
              notamment pour les mises à jour instantanées ou les modifications de prix.
            </li>
            <li>
              <strong>Recours à un·e développeur·euse</strong> : Bien que l'utilisation d'un CMS headless facilite la modification du contenu, des
              compétences de développement peuvent s'avérer nécessaires pour<strong> des ajustements au niveau du code</strong>. Cela peut représenter
              un coût supplémentaire et rendre la gestion du contenu plus complexe pour les utilisateur·ices moins familiers avec la technologie.
            </li>
          </ul>
        </>,
      ],
    },

    {
      type: "paragraph",
      text: [
        <>
          <p>-------</p>

          <p>
            En somme, le choix d'opter pour un site statique dépendra largement des<strong> besoins spécifiques de votre projet</strong>. Choisir la
            bonne approche peut faire toute la différence en termes de performance et de fonctionnalités ! Il est important de peser ces avantages
            face aux spécificités de votre projet pour déterminer quelle approche correspond à vos besoins.
          </p>
          <p></p>
          <p>
            Je suis à votre disposition pour réfléchir avec vous à la meilleure solution pour votre projet. Si vous souhaitez avoir un avis
            sur-mesure, vous pouvez prendre contact avec moi via{" "}
            <Link href="/contact" role="link">
              le formulaire dédié
            </Link>{" "}
            !
          </p>
        </>,
      ],
    },
  ],

  related_posts: [1, 2, 3],
};
