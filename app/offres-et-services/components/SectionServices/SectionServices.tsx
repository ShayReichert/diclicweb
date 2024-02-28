import styles from "./SectionServices.module.scss";
import Button from "../../../components/Button/Button";
import ItemService from "../ItemService/ItemService";

export default function SectionServices({ data }: ServicesProps) {
  const { services } = data;

  return (
    <section className={styles["section-services"]}>
      <div className={styles["section-content"]}>
        <div className={styles["services-wrapper"]}>
          {services.map((service) => (
            <ItemService key={service.id} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
