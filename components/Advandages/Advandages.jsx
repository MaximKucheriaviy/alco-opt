import { StyledAdvantages } from "./StyledAdvantages";
import { Container } from "../Container/Container";
import { Carousel } from "../Carousel/Carousel";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import { ControlDots } from "../ControlDots/ControlDots";
import { NavigationControl } from "../NavigationControl/NavigationControl";
import { Lines } from "../Lines/Lines";
import { MobileAccordeon } from "../MobileAcurdeon/MobileAcordeon";

const buttonData = [
  {
    number: 1,
    keyword: "КОНЦЕПЦІЯ",
  },
  {
    number: 2,
    keyword: "ДОСВІД",
  },
  {
    number: 3,
    keyword: "СЕРВІС",
  },
  {
    number: 4,
    keyword: "АСОРТИМЕНТ",
  },
  {
    number: 5,
    keyword: "СТАНДАРТИЗАЦІЯ",
  },
  {
    number: 6,
    keyword: "ЦІНИ",
  },
];

export const Advantages = () => {
  const [activeDot, setActiveDot] = useState(0);
  const carouselRef = useRef(null);
  const [enable, setEnable] = useState(true);

  useEffect(() => {
    if (!carouselRef.current) {
      return;
    }
    carouselRef.current.slickGoTo(activeDot);
  }, [activeDot]);

  const onChage = () => {
    setEnable(true);
  };
  const leftHandler = () => {
    if (!carouselRef.current || !enable) {
      return;
    }
    setEnable(false);
    setActiveDot((prev) => {
      if (prev == 0) {
        return 5;
      }
      return prev - 1;
    });
  };
  const rightHandler = () => {
    if (!carouselRef.current || !enable) {
      return;
    }
    setEnable(false);
    setActiveDot((prev) => {
      if (prev == 5) {
        return 0;
      }
      return prev + 1;
    });
  };

  const dotClick = (index) => {
    return () => {
      setActiveDot(index);
    };
  };

  return (
    <StyledAdvantages id="advantages">
      <Lines />
      <Container>
        <p className="airBackText numberAir">№3</p>
        <p className="airBackText opt">ФРАНШИЗА</p>
        <h2>
          Чому обрати <br /> <span>АЛКО/ОПТ?</span>
        </h2>
        <div className="controlBox">
          <div className="line"></div>
          {buttonData.map((item) => (
            <ControlDots
              key={item.keyword}
              number={item.number}
              keyword={item.keyword}
              active={activeDot + 1 === item.number}
              onClick={dotClick}
            />
          ))}
        </div>

        <NavigationControl active={3} top={60} />
      </Container>

      <div className="mobieData">
        <MobileAccordeon number={1} summaryText={"концепція"}>
          <p className="info">
            &#8226;Магазин &#8226;Склад &#8226;Бар АЛКО/ОПТ успішно поєднує
            найнижчі ціни та високий рівень обслуговування.
          </p>
          <p className="info">
            Зазвичай нас запитують: {'"'}Як ви досягаєте таких низьких цін і при
            цьому створюєте зручний та привітний магазин?{'"'} Це наш секрет і
            ми готові ним поділитись.
          </p>
          <p className="info">
            Пройдіть цей шлях разом з нами, і ви отримаєте можливість продавати
            алкоголь за найнижчими цінами, заробляючи при цьому.
          </p>
          <p className="info">
            Це місце, де доступність високоякісного алкоголю поєднується з
            ідеальним обслуговуванням, дозволяючи спробувати будь-яку пляшку за
            ціною її покупки на барі.
          </p>
        </MobileAccordeon>
        <MobileAccordeon number={2} line summaryText={"досвід"}>
          <o className="info">
            Наш проєкт реалізовано за участю висококваліфікованих фахівців, які
            мають значний досвід у сфері алкоголю та успішно працюють на ринку
            вже 17 років.
          </o>
          <p className="info">
            Ми вклали багато часу на формування нашої команди і пройшли важкий
            шлях разом.
          </p>
          <p className="info">
            Це дозволяє нам оптимально підібрати асортимент для будь-якого
            регіону, використовуючи найточніші аналітичні дані, забезпечивши тим
            самим прибуток кожного сантиметра ваших полиць, і відповідати
            потребам покупців.
          </p>
        </MobileAccordeon>
        <MobileAccordeon number={3} line summaryText={"сервіс"}>
          <p className="info">
            Наша компанія впроваджує систему контролю, яка забезпечує постійне
            дотримання високих стандартів обслуговування.
          </p>
          <p className="info">
            Ефективна система навчання персоналу, яка легко впроваджується у ваш
            магазин, забезпечує високий рівень сервісу.
          </p>
          <p className="info">
            Завдяки інноваційній системі “Віртуальний Сомельє”, покупці
            отримують інформацію про будь-який товар, просто скануючи QR-код на
            ціннику.
          </p>
          <p className="info">
            Цей простий, ефективний механізм дозволяє чудово оптимізувати та
            зробити висококваліфікований персонал.
          </p>
        </MobileAccordeon>
        <MobileAccordeon line number={4} summaryText={"асортимент"}>
          <p className="info">
            Наші Товарні аналітики постійно моніторять темпи продажів і
            оптимізують асортимент, спрямовуючись на підвищення прибутковості та
            задоволення клієнтських очікувань.
          </p>
          <p className="info">
            В нашому асортименті ви знайдете широкий вибір товарів, відповідних
            різноманітним смаковим уподобанням: від бюджетних класичних напоїв
            до унікальних рідкісних позицій з багатогранним смаком.
          </p>
          <p className="info">
            Наша команда розробила систему аналітики, яка щодня аналізує ціни на
            асортимент в залежності від регіону.
          </p>
        </MobileAccordeon>
        <MobileAccordeon number={5} line summaryText={"стандартизація"}>
          <p className="info">
            АЛКО/ОПТ - це виразно досконалий організм, де кожен етап процесу
            вивчений і максимально оптимізований.
          </p>
          <p className="info">
            Повний пакет відпрацьованих ефективних стандартів та алгоритмів
            допоможе вам з першого дня організувати всі робочі процеси і
            заощадити кошти.”
          </p>
        </MobileAccordeon>
        <MobileAccordeon number={6} line summaryText={"ціни"}>
          <p className="info">
            Наші довгострокові ефективні відносини з виробниками та дистриб{`'`}
            юторами створюють умови для реалізації товарів у роздріб за оптовими
            цінами.
          </p>
          <p className="info">
            Щоденно наші аналітики аналізують ціни конкуруючих мереж, і ми
            можемо запевнити, що наші ціни завжди найнижчі.
          </p>
        </MobileAccordeon>
      </div>

      <div className="imageThumb">
        <div className="buttonDiv">
          <button onClick={leftHandler}>
            <Image src={"/arrowLeft.svg"} width={44} height={44} alt="arrow" />
          </button>
          <button onClick={rightHandler}>
            <Image src={"/arrowRight.svg"} width={44} height={44} alt="arrow" />
          </button>
        </div>
        <Carousel refer={carouselRef} onChage={onChage} />
      </div>
    </StyledAdvantages>
  );
};
