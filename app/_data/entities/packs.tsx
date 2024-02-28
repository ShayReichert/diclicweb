import Button from "@/app/components/Button/Button";
import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const sectionPacksData = {
  packs: [
    {
      title: "Pack Site Vitrine",
      price: "1250€",
      text_thumbnails: [
        <>
          <p>
            Création d'un<strong> site vitrine Wordpress professionnel</strong>, avec les fonctionnalités essentielles pour présenter votre activité.
          </p>
          <p>
            Ce pack est idéal pour
            <strong> les associations, les indépendant·es, les artisans, les artistes, les petites entreprises</strong>… qui souhaite un premier site
            web ou une refonte plus moderne de leur site actuel.
          </p>
          <p>
            Ce site Wordpress restera<strong> évolutif </strong>par la suite selon vos besoins (ajout de fonctionnalités, de pages, de contenus…)
          </p>
          <Button href="/packs#site-vitrine" text="En&nbsp;savoir&nbsp;plus" />
        </>,
      ],
      text: [
        <>
          <p>
            Un site vitrine a pour objectif de<strong> présenter votre activité</strong>, vos services ou vos produits. Je vous propose un pack
            complet pour un<strong> site vitrine professionnel et performant</strong>.
          </p>
          <br />
          <br />

          <p style={{ fontSize: "20px" }}>
            <strong>Ce pack comprend </strong>:{" "}
          </p>

          <h3 className={rocaOne.className}>Accompagnement hébergement</h3>
          <ul>
            <li>
              Accompagnement pour <strong>le choix et l'achat de l’hébergement et du nom de domaine</strong> (à votre charge).
            </li>
            <li>
              Création d’une <strong>adresse mail personnalisée</strong> (contact@votrenomdedomaine.fr par exemple).
            </li>
          </ul>

          <h3 className={rocaOne.className}>Création du site</h3>
          <ul>
            <li>
              <strong>Création de 4 pages </strong> à partir de templates (par exemple : Accueil, Services, À propos, Contact).
            </li>
            <li>
              Intégration de votre<strong> logo</strong>, personnalisation selon votre<strong> charte graphique</strong>.
            </li>
            <li>Création du menu et sous-menu.</li>
            <li>Mise en place d’un formulaire de contact.</li>
            <li>
              Intégration de<strong> vos réseaux sociaux </strong>en bas de page.
            </li>
            <li>Pages de mentions légales et politique de confidentialité (contenu à me fournir, je peux vous conseiller sur ces points-là).</li>
          </ul>

          <h3 className={rocaOne.className}>Sécurité et optimisation</h3>
          <ul>
            <li>
              <strong>Sécurisation complète </strong>du site.
            </li>
            <li>
              Mise en place d’un système de<strong> sauvegarde </strong>pour restaurer votre site si besoin.
            </li>
            <li>
              Optimisation des<strong> performances et de l’impact écologique </strong>(images, mise en cache…).
            </li>
            <li>
              <strong>Responsive design </strong>(pour que l’affichage soit adapté à toutes les tailles d’écrans : mobile, tablette et ordinateur).
            </li>
            <li>
              Optimisation<strong> SEO </strong>de base pour le référencement.
            </li>

            <li>
              Amélioration de<strong> l’accessibilité </strong>(liens accessibles au clavier, accès direct au contenu).
            </li>
          </ul>

          <h3 className={rocaOne.className}>Formation</h3>
          <ul>
            <li>
              <strong>Formation à Wordpress </strong>pour pouvoir modifier et ajouter du contenu sur votre site en autonomie (je vous forme en
              visioconférence).
            </li>
          </ul>
          <p>-------</p>
          <h3 className={rocaOne.className}>En option</h3>
          <ul>
            <li>
              Mise en place de Matomo (un outils respectueux des RGPD pour<strong> l’analyse de l’audience </strong>de votre site) + 100€
            </li>
            <li>
              Création d’un espace<strong> blog / actualités </strong>+ 150€
            </li>
            <li>Page supplémentaire + 100€</li>
          </ul>
          <p>-------</p>
          <p>
            <em>
              Vous n’avez pas de charte graphique ou de logo ? Je propose{" "}
              <Link href="/packs#charte-graphique" role="link">
                <strong style={{ textDecoration: "underline" }}>un pack de création de charte graphique</strong>
              </Link>{" "}
              .
            </em>
          </p>
          <p>
            <em>
              Pour un site vitrine ou un design<strong> totalement sur-mesure</strong>,{" "}
              <Link href="/contact" role="link">
                <strong>contactez-moi</strong>
              </Link>{" "}
              pour un devis personnalisé.
            </em>
          </p>
        </>,
      ],
      anchor: "site-vitrine",
      image: "/images/packs/vitrine.webp",
      image_alt: "",
    },
    {
      title: "Pack Site e-Commerce",
      price: "2500€",
      text_thumbnails: [
        <>
          <p>
            Création d'un<strong> site e-commerce Wordpress professionnel</strong>, avec les fonctionnalités essentielles pour vendre vos produits en
            ligne.
          </p>
          <p>
            Il vous permettra de présenter votre activité et de<strong> vendre vos produits en ligne </strong>et pourra facilement évoluer selon vos
            besoins. <br />
            Vous pourrez <strong> gérer votre boutique </strong>depuis l’administration de votre site.
          </p>
          <p>
            Ce pack est adapté pour<strong> les commerçants, les créateur·ices, les artisan·es, les petits commerces</strong>…
          </p>

          <Button href="/packs#site-e-commerce" text="En&nbsp;savoir&nbsp;plus" />
        </>,
      ],
      text: [
        <>
          <p>
            Un site e-commerce vous permet de<strong> vendre vos produits en ligne</strong>. Je vous propose un pack complet pour un
            <strong> site e-commerce professionnel et évolutif</strong>.
          </p>
          <br />
          <br />

          <p style={{ fontSize: "20px" }}>
            <strong>Ce pack comprend :</strong>
          </p>

          <h3 className={rocaOne.className}>Accompagnement hébergement</h3>
          <ul>
            <li>
              Accompagnement pour<strong> le choix et l'achat de l’hébergement et du nom de domaine</strong> (à votre charge).
            </li>
            <li>
              Création d’une<strong> adresse mail personnalisée</strong> (contact@votrenomdedomaine.fr par exemple).
            </li>
          </ul>

          <h3 className={rocaOne.className}>Création du site</h3>
          <ul>
            <li>
              <strong>Création de 4 pages</strong> à partir de templates (par exemple : Accueil, Boutique, À propos, Contact).
            </li>
            <li>
              Intégration de votre<strong> logo</strong>, personnalisation selon votre<strong> charte graphique</strong>.
            </li>
            <li>Création du menu et sous-menu.</li>
            <li>Mise en place d’un formulaire de contact.</li>
            <li>
              Intégration de<strong> vos réseaux sociaux</strong> en bas de page.
            </li>
            <li>Pages de mentions légales et politique de confidentialité (texte à me fournir, je peux vous conseiller sur ces points-là).</li>
          </ul>

          <h3 className={rocaOne.className}>Boutique</h3>
          <ul>
            <li>
              Installation et configuration de<strong> WooCommerce</strong> (modes de livraison, liaison avec système de paiement, emails de
              commande…).
            </li>
            <li>
              Création des<strong> pages des 5 produits</strong>.
            </li>
            <li>
              <strong>Pages de vente </strong>(pages panier, validation de commande, mon compte).
            </li>
            <li>
              Mise en place d’un système de création de<strong> factures PDF</strong>.
            </li>
            <li>Création de la page des CGV (texte à me fournir).</li>
          </ul>

          <h3 className={rocaOne.className}>Sécurité et optimisation</h3>
          <ul>
            <li>
              <strong>Sécurisation complète</strong> du site.
            </li>
            <li>
              Mise en place d’un<strong> système de sauvegarde</strong> pour restaurer votre site si besoin.
            </li>
            <li>
              Optimisation des<strong> performances</strong> et de l’impact écologique (images, mise en cache…)
            </li>
            <li>
              <strong>Responsive design</strong> (pour que l’affichage soit adapté à toutes les tailles d’écrans : mobile, tablette et ordinateur)
            </li>
            <li>
              Optimisation<strong> SEO</strong> de base pour le référencement
            </li>

            <li>
              Amélioration de<strong> l’accessibilité</strong> (liens accessibles au clavier, accès direct au contenu)
            </li>
          </ul>

          <h3 className={rocaOne.className}>Formation</h3>
          <ul>
            <li>
              Formation à<strong> Wordpress et WooCommerce</strong> pour pouvoir<strong> modifier et ajouter du contenu sur votre site</strong> en
              autonomie (je vous forme en visioconférence)
            </li>
          </ul>

          <p>-------</p>

          <h3 className={rocaOne.className}>En option</h3>
          <ul>
            <li>
              Liaison avec un outil de<strong> newsletter</strong> (brevo, mailchimp…) + 100€
            </li>
            <li>
              Mise en place de Matomo (un outils respectueux des RGPD pour l’<strong>analyse de l’audience</strong> de votre site) + 100€
            </li>
            <li>
              Création d’un espace<strong> blog / actualités</strong> + 150€
            </li>
            <li>Page supplémentaire + 100€</li>
          </ul>

          <p>-------</p>

          <p>
            <em>
              Vous n’avez pas de charte graphique ou de logo ? Je propose{" "}
              <Link href="/packs#charte-graphique" role="link">
                <strong style={{ textDecoration: "underline" }}>un pack de création de charte graphique</strong>
              </Link>
              .
            </em>
          </p>
          <p>
            <em>
              Pour un site e-commerce ou un design<strong> totalement sur-mesure</strong>,{" "}
              <Link href="/contact" role="link">
                <strong>contactez-moi</strong>
              </Link>{" "}
              pour un devis personnalisé.
            </em>
          </p>
        </>,
      ],
      anchor: "site-e-commerce",
      image: "/images/packs/ecommerce.webp",
      image_alt: "",
    },
    {
      title: "Charte Graphique",
      price: "580€",
      text_thumbnails: [
        <>
          <p>
            Création d'une<strong> identité visuelle sur-mesure </strong>pour votre site et vos supports de communication.
          </p>
          <p>
            Il vous permettra d’avoir une identité visuelle<strong> cohérente et professionnelle </strong>pour commencer ou développer votre activité
          </p>
          <p>
            Ce pack est idéal pour<strong> les indépendant·es, les associations, les artistes, les petites entreprises</strong>… qui n'ont pas encore
            d'identité visuelle.
          </p>

          <Button href="/packs#charte-graphique" text="En&nbsp;savoir&nbsp;plus" />
        </>,
      ],
      text: [
        <>
          <p>
            Vous n'avez pas encore de logo, de couleurs, de polices d'écriture qui vous représentent ? Je vous propose un{" "}
            <strong> pack complet pour une identité visuelle </strong>sur-mesure.
          </p>
          <br />
          <br />

          <p style={{ fontSize: "20px" }}>
            <strong>Ce pack comprend :</strong>
          </p>

          <ul>
            <li>
              Une<strong> palette de couleurs</strong> qui reflètera l'essence de votre organisation.
            </li>
            <li>
              Un<strong> logo sur mesure</strong>, décliné en différentes versions (couleurs et formats), pour une utilisation optimale sur tous vos
              supports de communication.
            </li>
            <li>
              Des<strong> polices d’écriture</strong> sélectionnées avec soin pour refléter votre style et mettre en valeur votre contenu.
            </li>
            <li>
              Une<strong> favicon</strong> personnalisée pour votre site internet (l’icône qui s’affiche dans l’onglet du navigateur).
            </li>
          </ul>

          <p>-------</p>

          <p>
            <em>
              Vous pouvez également ajouter des options à ce pack, comme la création de cartes de visite, de templates pour les réseaux sociaux, etc.
            </em>
          </p>
          <p>
            <em>
              Astuce : Vous pouvez compléter cette offre avec un
              <strong>
                <Link href="/packs#site-vitrine" role="link">
                  <strong> pack de création de site vitrine </strong>
                </Link>
                ou
                <Link href="/packs#site-e-commerce" role="link">
                  <strong> e-commerce</strong>
                </Link>
              </strong>{" "}
              pour avoir une identité visuelle et un site web cohérents.
            </em>
          </p>
        </>,
      ],
      anchor: "charte-graphique",
      image: "/images/packs/charte.webp",
      image_alt: "",
    },
  ],
};
