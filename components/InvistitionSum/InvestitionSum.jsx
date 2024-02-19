import { StyledInvastition } from "./StyledInvestitionSum";
import { Container } from "../Container/Container";
import { Line } from "../Line/Line";
import { ItemPrice } from "../ItemPrice/ItemPrice";
import { NavigationControl } from "../NavigationControl/NavigationControl";

export const InvestitionSum = () => {
  return (
    <StyledInvastition id="investition_sum">
      <Container>
        <p className="description">ДО СУМИ ІНВЕСТИЦІЙ ВХОДИТЬ:</p>
        <h2>Послуги</h2>
        <Line className="line" />
        <div className="grid1">
          <ItemPrice path={"/Icons/Icon1.svg"}>
            Права На ведення діяльності під ТМ АЛКООПТ
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon2.svg"}>
            Допомога в пошуку локації і приміщення
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon3.svg"}>
            Розробка дизайн-проєкту майбутнього магазину
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon4.svg"}>
            Налаштування доступу до професійного програмного забезпечення
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon5.svg"}>
            Ексклюзивні умови з постачальниками
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon6.svg"}>
            Передача всіх стандартів роботи, посадових інструкцій і
            бізнес-процесів
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon7.svg"}>
            Щомісячне оцінювання знань продавців
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon8.svg"}>Пошук персоналу</ItemPrice>
          <ItemPrice path={"/Icons/Icon9.svg"}>
            Доступ до торгівельної і товарної аналітики
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon10.svg"}>
            Доступ до мережевої дисконтної програми
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon11.svg"}>
            Доступ до користування програмою електронного сомельє
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
            Щоденна аналітика в реальному часі всіх показників магазину
          </ItemPrice>
          <ItemPrice path={"/Icons/Icon16.svg"}>
            Щоденний зріз цін та корегуння під формат
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
            Індивідуальні стелажі для розміщення товару
          </ItemPrice>
        </div>
        <NavigationControl active={6} black height={525} top={72} />
      </Container>
    </StyledInvastition>
  );
};
