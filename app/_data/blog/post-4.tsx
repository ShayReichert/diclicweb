import { rocaOne } from "../../styles/fonts/font-face";

export const post4 = {
  id: 4,
  title: "Pourquoi rendre mon site web accessible ?",
  author: "Shay",
  slug: "pourquoi-site-web-accessible-bénéfique",
  date: "2024-01-19",
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
          <h2 className={rocaOne.className}>1. Élargir l'accès à votre contenu à davantage de personnes</h2>
          <p>
            En rendant votre site web accessible, vous permettez à plus de personnes d'accéder à votre contenu.
            <br />
            Cela peut être des personnes en<strong> situation de handicap</strong>, mais également des
            <strong> personnes âgées, des personnes qui ne parlent pas votre langue, des personnes qui ont des difficultés à lire</strong>, etc.
          </p>

          <p>
            <strong>- Améliorer l'expérience des personnes plus âgées : </strong>
            Par exemple, pour les<strong> utilisateur·ices plus âgé·es</strong>, une navigation intuitive et des options de personnalisation telles
            que<strong> l'augmentation de la taille </strong>du texte peuvent grandement améliorer l'expérience utilisateur·ice. Les sites accessibles
            prennent souvent en compte la<strong> clarté visuelle</strong>, offrant un<strong> contraste élevé </strong>entre le texte et
            l'arrière-plan pour faciliter la lecture. <br />
          </p>

          <p>
            <strong>- Faciliter l'usage pour les personnes avec des limitations motrices : </strong> Des boutons et des liens
            <strong> suffisamment grands </strong>évitent les difficultés liées à la coordination motrice fine, rendant la navigation plus aisée pour
            celles et ceux qui peuvent avoir des problèmes d'arthrite ou de dextérité.
          </p>

          <p>
            <strong>- Soutenir les utilisateur·ices non-natifs de la langue : </strong>Autre exemple, pour les visiteur·ices qui ne sont pas familiers
            avec la langue de votre site, les fonctionnalités d'accessibilité telles que les<strong> traductions automatiques </strong>peuvent être
            très utiles. L'ajout<strong> d'icônes explicites </strong>à côté des textes importants et l'utilisation de la navigation visuelle aident
            également les utilisateur·ices à comprendre le contenu et
            <strong> la structure du site </strong>sans se reposer entièrement sur le texte. <br />
            Les images et les vidéos avec des<strong> sous-titres ou des légendes </strong>dans plusieurs langues améliorent également l'accessibilité
            pour ce groupe, en offrant des alternatives pour comprendre le contenu sans barrière linguistique.
          </p>

          <p>
            <strong>- Accessibilité pour les non-technophiles et connexions limitées : </strong>Cela peut également être des personnes qui ne sont pas
            à l'aise avec la technologie, ou qui n'ont pas accès à une connexion internet de qualité.
          </p>
          <p>
            En bref, rendre votre site plus accessible<strong> peut être bénéfique à tout le monde </strong>!
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>2. Un meilleur référencement</h2>
          <p>
            Votre site respectera les bonnes pratiques du web, ce qui permettra aux
            <strong> moteurs de recherche de mieux comprendre votre contenu </strong>et de mieux le référencer.
          </p>
          <p> Voici quelques exemples concrets : </p>
          <ol>
            <li>
              {" "}
              <strong>Utilisation des balises "alt" pour les images</strong> : Les balises "alt" fournissent une
              <strong> description textuelle </strong>
              des images aux moteurs de recherche et aux technologies d'assistance, comme les lecteurs d'écran. En ajoutant des balises "alt"
              descriptives à vos images, vous améliorez<strong> l'indexation de votre contenu visuel par les moteurs de recherche</strong>.<br />
              Par exemple, une balise "homme lisant un livre dans un parc ensoleillé" est beaucoup plus informative qu'une balise générique "image".
              Cela aide les moteurs de recherche à comprendre le<strong> contexte de vos images</strong>, améliorant ainsi la pertinence de votre site
              pour des requêtes spécifiques.
            </li>
            <li>
              <strong> Structuration sémantique du contenu </strong> : L'utilisation correcte des balises HTML sémantiques (comme{" "}
              {`<h1>, <h2>, <nav>, <footer>`}, etc.) aide à structurer votre contenu de manière logique, facilitant sa compréhension par les moteurs
              de recherche.
              <br />
              Une structure claire permet aux crawlers des moteurs de recherche de mieux saisir
              <strong> la hiérarchie et l'importance des différentes sections de votre page</strong> , ce qui peut contribuer à améliorer le
              classement de votre site dans les résultats de recherche.
            </li>
          </ol>
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
          <h2 className={rocaOne.className}>3. Être en règle avec la loi</h2>
          <p>
            Actuellement, l'Europe impose une accessibilité web stricte via<strong> la directive (UE) 2016/2102</strong>, visant à rendre les sites et
            applications mobiles des entités publiques accessibles à tous·tes, en suivant les<strong> directives WCAG 2.1</strong>.<br />
            En France, cette directive est complétée par<strong> la loi de 2005 sur l'égalité des droits et des chances</strong>, qui étend l'exigence
            d'accessibilité au-delà du secteur public, et par le RGAA, qui détaille les standards à respecter.
            <br />
            Ces mesures légales ne se contentent pas de promouvoir l'inclusion : elles obligent les acteurs numériques à créer des espaces en ligne où
            chaque utilisateur·ice, indépendamment de ses capacités, peut<strong> naviguer et interagir sans entrave</strong>, garantissant ainsi une
            égalité d'accès à l'information et aux services en ligne.
          </p>
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
          <p>
            Cette approche ne se limite pas à une simple amélioration technique de votre site : elle reflète une
            <strong> philosophie qui place la diversité et l'égalité </strong>au cœur de vos valeurs.
          </p>
          <p>
            En optimisant l'accessibilité de votre site, vous reconnaissez et valorisez<strong> la diversité de votre audience</strong>, en tenant
            compte des besoins variés des personnes en situation de handicap, des personnes âgées, et de celles et ceux qui peuvent être
            temporairement limité·es dans leur interaction avec le web.
          </p>
          <p>
            Faire de l'accessibilité une priorité améliore non seulement l'expérience utilisateur·ice pour un public plus large, mais
            <strong> renforce également votre réputation en tant qu'entité socialement responsable</strong>.
            <br />
            Cela peut se traduire par une<strong> fidélisation accrue de la clientèle</strong>, une meilleure image de votre organisation ou encore
            une<strong> augmentation de la confiance </strong>de vos visiteur·ices.
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
            En conclusion, rendre votre site web accessible n'est pas seulement une question de conformité légale : c'est un
            <strong>cela reflète une sensibilité aux besoins divers de votre audience et peut renforcer votre réputation</strong>.<br />
            <br />
            Envisager l'accessibilité comme<strong> un voyage continu plutôt qu'une destination finale </strong>peut ouvrir de nouvelles perspectives
            pour l'innovation et l'amélioration continue !
          </p>
        </>,
      ],
    },
  ],

  related_posts: [2, 3],
};
