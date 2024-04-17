import Slider from "react-slick";
import styled from "@emotion/styled";
import { mediaScreen } from "@/service/mediaRules";

const CarouselDiv = styled.div`
  width: 366px;
  height: 484px;
  background-color: #fff;
  padding: 24px;
  position: absolute;
  left: 0px;
  bottom: 0px;
  ${mediaScreen(1280)} {
    width: 492px;
    height: 593px;
    padding: 46px 40px;
  }
  & h3 {
    color: #000;
    font-family: "Proxima Nova";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: uppercase;
    ${mediaScreen(1280)} {
      font-size: 32px;
    }
  }
  & p {
    margin-top: 24px;
    color: #000;
    font-family: "Proxima Nova";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    ${mediaScreen(1280)} {
      font-size: 20px;
    }
  }
  & br {
    margin-bottom: 10px;
  }
`;

export const Carousel = ({ refer, onChage }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    fade: true,
    arrows: false,
    afterChange: onChage,
  };
  return (
    <CarouselDiv>
      <Slider ref={refer} {...settings}>
        <div className="item">
          <h3>КОНЦЕПЦІЯ:</h3>
          <p>
            Магазин-Склад-Бар АЛКО/ОПТ успішно поєднує найнижчі ціни та високий
            рівень обслуговування.
            <br /> Зазвичай нас запитують: {'"'}Як ви досягаєте таких низьких
            цін і при цьому створюєте зручний та привітний магазин?{'"'} Це наш
            секрет і ми готові ним поділитись.
            <br /> Пройдіть цей шлях разом з нами, і ви отримаєте можливість
            продавати алкоголь за найнижчими цінами, заробляючи при цьому.
            <br />
            Це місце, де доступність високоякісного алкоголю поєднується з
            ідеальним обслуговуванням, дозволяючи спробувати будь-яку пляшку за
            ціною її покупки на барі.
          </p>
        </div>
        <div className="item">
          <h3>ДОСВІД:</h3>
          <p>
            Наш проєкт реалізовано за участю висококваліфікованих фахівців, які
            мають значний досвід у сфері алкоголю та успішно працюють на ринку
            вже 17 років.
            <br />
            Ми вклали багато часу на формування нашої команди і пройшли важкий
            шлях разом.
            <br />
            Це дозволяє нам оптимально підібрати асортимент для будь-якого
            регіону, використовуючи найточніші аналітичні дані, забезпечивши тим
            самим прибуток кожного сантиметра ваших полиць, і відповідати
            потребам покупців.
          </p>
        </div>
        <div className="item">
          <h3>СЕРВІС:</h3>
          <p>
            Наша компанія впроваджує систему контролю, яка забезпечує постійне
            дотримання високих стандартів обслуговування.
            <br />
            Ефективна система навчання персоналу, яка легко впроваджується у ваш
            магазин, забезпечує високий рівень сервісу.
            <br />
            Завдяки інноваційній системі “Віртуальний Сомельє”, покупці
            отримують інформацію про будь-який товар, просто скануючи QR-код на
            ціннику.
            <br />
            Цей простий та ефективний механізм дозволяє чудово оптимізувати та
            зробити висококваліфікований персонал.
          </p>
        </div>
        <div className="item">
          <h3>АСОРТИМЕНТ:</h3>
          <p>
            Наші товарні аналітики постійно моніторять темпи продажів і
            оптимізують асортимент, спрямовуючись на підвищення прибутковості та
            задоволення клієнтських очікувань.
            <br />В нашому асортименті ви знайдете широкий вибір товарів,
            відповідних різноманітним смаковим уподобанням: від бюджетних
            класичних напоїв до унікальних рідкісних позицій з багатогранним
            смаком.
            <br />
            Наша команда розробила систему аналітики, яка щодня аналізує ціни на
            асортимент в залежності від регіону.
          </p>
        </div>
        <div className="item">
          <h3>СТАНДАРТИЗАЦІЯ:</h3>
          <p>
            АЛКО/ОПТ - це виразно досконалий організм, де кожен етап процесу
            вивчений і максимально оптимізований.
            <br />
            Повний пакет відпрацьованих ефективних стандартів та алгоритмів
            допоможе вам з першого дня організувати всі робочі процеси і
            заощадити кошти.
          </p>
        </div>
        <div className="item">
          <h3>ЦІНИ:</h3>
          <p>
            Наші довгострокові ефективні відносини з виробниками та дистриб
            {`'`}юторами створюють умови для реалізації товарів у роздріб за
            оптовими цінами.
            <br />
            Щоденно наші аналітики аналізують ціни конкуруючих мереж, і ми
            можемо запевнити, що наші ціни завжди найнижчі.
          </p>
        </div>
      </Slider>
    </CarouselDiv>
  );
};
