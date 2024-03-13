import { StyledInvastition } from "./StyledInvestitionSum";
import { Container } from "../Container/Container";
import { Line } from "../Line/Line";
import { ItemPrice } from "../ItemPrice/ItemPrice";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import Image from "next/image";

export const InvestitionSum = () => {
  return (
    <StyledInvastition id="investition_sum">
      <Container>
        <p className="airBackText numberAir">№6</p>
        <p className="airBackText opt">ФРАНШИЗА</p>

        <p className="description">ДО СУМИ ІНВЕСТИЦІЙ ВХОДИТЬ:</p>
        <h2>Послуги</h2>
        <Line className="line" />
        <div className="grid1">
          <ItemPrice path={"/Icons/Icon1.svg"}>
            Права На ведення діяльності під ТМ АЛКО/ОПТ
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon2.svg"}>
            Консультація в пошуку локації і приміщення
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon3.svg"}>
            Допомога в розробці дизайн-проекту майбутнього магазину
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon4.svg"}>
            Налаштування доступу до професійного програмного забезпечення
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon5.svg"}>
            Ексклюзивні ціни на товар
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon6.svg"}>
            Надаємо всі стандарти роботи, посадові інструкції і бізнес-процеси
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon7.svg"}>
            Щомісячне оцінювання знань продавців
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon8.svg"}>
            Консультація з пошуку персоналу
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon9.svg"}>
            Доступ до торгівельної і товарної аналітики
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon10.svg"}>
            Доступ до мережевої дисконтної програми
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon11.svg"}>
            Доступ до користування програмою “Віртуальний сомельє”
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon12.svg"}>
            Підключення до телеграм-боту компанії
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon13.svg"}>
            Учать власників в освітніх заходах
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon14.svg"}>
            Повна юридична і товарна консультація протягом всього періоду
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon15.svg"}>
            Підключення до Dashboard з ключовими показниками магазину
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon16.svg"}>
            Підключення до щоденної аналітики цін згідно вашого регіону
          </ItemPrice>
        </div>
        <p className="values">Матеріальні цінності</p>
        <Line className="line" />
        <div className="grid1">
          <ItemPrice path={"/Icons/Icon17.svg"}>
            Повний перелік всіх меблів
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon18.svg"}>
            увесь перелік POS матеріалів
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon19.svg"}>
            Повний перелік всього необхідного обладнання
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon20.svg"}>Зовнішня вивіска</ItemPrice>
          <ItemPrice path={"/Icons/Icon21.png"}>
            Повне внутрішнє брендування
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon22.svg"}>Навігація</ItemPrice>
          <ItemPrice path={"/Icons/Icon23.svg"}>
            Допомога в розробці стелажів для розміщення товару
          </ItemPrice>
        </div>
        <div className="logo">
          <Image src="/logoRed.png" width={127} height={93} alt="logo" />
          <p className="logoText">дешевше ваших інтернетів</p>
        </div>
        <NavigationControl active={6} black height={525} top={200} />
      </Container>
    </StyledInvastition>
  );
};
