import Link from "next/link";
import { rocaOne } from "../../styles/fonts/font-face";

export const post4 = {
  id: 4,
  title: "Pourquoi un site web accessible est bénéfique à tout le monde ?",
  author: "Shay",
  slug: "pourquoi-site-web-accessible-bénéfique",
  date: "2023-11-10",
  category: [2],
  excerpt: "Lorem ipsum Accessibilité",
  thumbnail: {
    path: "/images/services/icon_site.png",
    alt: "Image d'illustration de l'article",
  },
  content: [
    {
      type: "paragraph",
      text: [
        <>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nisl, eget
          </p>
        </>,
      ],
    },
    {
      type: "image",
      path: "/images/services/icon_site.png",
      alt: "Image d'un ordinateur avec un site web",
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>1. Titre 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nisl, eget
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>2.Titre 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nisl, eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nisl, eget
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>3.Titre 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nisl, eget.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nisl, eget
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <h2 className={rocaOne.className}>4. Titre 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nisl, eget
          </p>
        </>,
      ],
    },
    {
      type: "paragraph",
      text: [
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget ultricies ultricies, nunc nisl ultricies nisl, eget
          </p>
          <p>
            Si vous avez besoin de conseils ou d’accompagnements pour votre projet, n’hésitez pas à
            <Link href="/contact" role="link">
              me contacter
            </Link>
            .
          </p>
        </>,
      ],
    },
  ],

  related_posts: [2, 3],
};
