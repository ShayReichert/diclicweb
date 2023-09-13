import styles from "./SectionServices.module.scss";
import { rocaOne } from "../../styles/fonts/font-face";
import Button from "../Button/Button";
import ItemService from "../ItemService/ItemService";

export default function SectionServices({ data }: ServicesProps) {
  const { services } = data;

  return (
    <section className={styles["section-services"]}>
      <div className={styles["section-content"]}>
        <h2 className={rocaOne.className}>Mes services</h2>

        <div className={styles["services-wrapper"]}>
          {services.map((service) => service.short_desc && <ItemService key={service.id} {...service} />)}
        </div>

        <div className={styles["services-cta"]}>
          <Button text="En&nbsp;savoir&nbsp;plus" href="/offres-et-services" />
        </div>
      </div>
    </section>
  );
}
