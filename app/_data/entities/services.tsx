import Link from "next/link";

export const sectionServicesData = {
  services: [
    {
      id: 1,
      title: "Site vitrine WordPress",
      short_desc: "Je réalise des sites vitrines et e-commerce éthiques, performants et personnalisés grâce à WordPress.",
      text: [
        <>
          <p>
            Un site vitrine<strong> présente votre activité </strong>ou votre structure. Le site peut avoir plusieurs pages, une partie blog, un
            formulaire de contact… mais il n’inclut pas la possibilité de vendre directement en ligne.
          </p>
          <p>
            J’utilise WordPress, un CMS open source qui n’a plus à faire ses preuves ! Cela vous permettra d’être
            <strong> autonome dans la gestion du contenu </strong>de votre site.
          </p>
          <p>
            Je propose un "
            <Link href="offres-et-services/packs#site-vitrine" role="link">
              <strong>Pack Site vitrine</strong>
            </Link>
            " qui comprend l'essentiel pour un site vitrine professionnel complet. Pour des besoins plus spécifiques, je peux également faire
            <strong> un site vitrine sur-mesure </strong> 📏
          </p>
        </>,
      ],
      icon: "/images/services/icon_site.svg",
      icon_alt: "Icone d'ordinateur",
    },
    {
      id: 2,
      title: "Site e-commerce",
      short_desc: "",
      text: [
        <>
          <p>
            Un site e-commerce vous permettra de<strong> vendre vos produits en ligne</strong>. Comme pour le site vitrine, il peut également
            comprendre une partie blog, un formulaire de contact, une FAQ…
          </p>
          <p>
            Si vous souhaitez une solution clé en main, je propose un "{" "}
            <Link href="offres-et-services/packs#site-vitrine" role="link">
              <strong>Pack Site E-commerce</strong>
            </Link>
            " qui comprend tout ce dont vous avez besoin pour démarrer votre<strong> boutique en ligne professionnelle </strong>dans les meilleures
            conditions.
          </p>
          <p>
            Je vous<strong> formerai </strong>dans tous les cas à la prise en main de l’administration pour que vous puissiez vous occuper sereinement
            de la partie boutique.
          </p>
        </>,
      ],
      icon: "/images/services/icon_commerce.svg",
      icon_alt: "Icone de site internet",
    },

    {
      id: 3,
      title: "Application Web",
      short_desc: "Pour les projets plus spécifiques, je peux également coder des sites et des applications sur-mesure (React / Next.js).",
      text: [
        <>
          <p>
            Vous avez un projet très spécifique, comme un projet d’<strong>application web </strong>? Ou bien vous aimeriez un site vraiment
            différent, avec des
            <strong> animations complexes </strong>ou une mise en page vraiment particulière ? Je peux peut-être vous aidez aussi !
          </p>
          <p>N'hésitez pas à me contacter directement pour discuter de votre projet 😃</p>
        </>,
      ],
      icon: "/images/services/icon_code.svg",
      icon_alt: "Icone d'ordinateur",
    },

    {
      id: 4,
      title: "Maintenance / Support",
      short_desc: "Je propose de la maintenance mensuelle pour que votre site reste sécurisé et en bonne santé.",
      text: [
        <>
          <p>
            La maintenance d’un site est<strong> primordiale </strong>! Que ce soit pour surveiller les performances, faire les mises à jour, veiller
            à la sécurité... Faire l’entretien de son site, c’est comme faire l’entretien de sa voiture : c’est une
            <strong> hygiène indispensable </strong>pour éviter les pannes et les accidents.
          </p>
          <p>
            Côté<strong> support</strong>, si vous avez besoin d’ajouter de nouvelles fonctionnalités ou d’aide pour
            <strong> ajouter du contenu</strong>, je suis là pour ça également ! 💪
          </p>
        </>,
      ],
      icon: "/images/services/icon_maintenance.svg",
      icon_alt: "Icone d'outil",
    },

    // {
    //   id: 3,
    //   title: "Site One-Page",
    //   short_desc: "Vous avez besoin d'une page unique pour présenter votre activité ? Je peux vous créer un site One-Page.",
    //   text: [
    //     <>
    //       <p>
    //         Un site One-)Page est un site qui tient sur une seule page. Il est souvent utilisé pour<strong> présenter une activité </strong>ou un
    //         produit de manière simple et efficace.
    //       </p>
    //       <p>
    //         Ce type de site est idéal si vous avez peu de contenu à présenter ou si vous souhaitez avoir une
    //         <strong> présence en ligne rapide </strong>et efficace. 🚀
    //       </p>
    //       <p>
    //         Je propose un "
    //         <Link href="offres-et-services/packs#site-one-page" role="link">
    //           <strong>Pack Site One-Page</strong>
    //         </Link>
    //         qui présentera votre activité de manière claire et professionnelle. Il pourra par ailleurs facilement évoluer en site vitrine de plusieurs
    //         pages ou en site e-commerce si vos besoins évoluent.
    //       </p>
    //     </>,
    //   ],
    // },

    // {
    //   id: 3,
    //   title: "Charte Graphique",
    //   short_desc: "Vous avez besoin d'une identité visuelle ? Je peux également vous aider à créer votre charte graphique.",
    //   text: [
    //     <>
    //       <p>
    //         La présentation, c'est important ! Avoir une identité visuelle<strong> cohérente avec votre activité </strong>et ses valeurs renforcera
    //         votre crédibilité 🎨
    //       </p>
    //       <p>
    //         Je propose un pack "
    //         <Link href="offres-et-services/packs#site-vitrine" role="link">
    //           <strong>Charte Graphique</strong>
    //         </Link>
    //         " qui comprend une palette de couleurs, un logo sur-mesure, des polices adaptées et une favicon.
    //       </p>
    //       <p>
    //         Par ailleurs, vous pourrez utiliser cette charte graphique
    //         <strong> dans l'ensemble de votre communication </strong>
    //         (réseaux sociaux, flyers...).
    //       </p>
    //     </>,
    //   ],
    //   icon: "/images/services/icon_site.svg",
    //   icon_alt: "Icone de site internet",
    // },
  ],
};
