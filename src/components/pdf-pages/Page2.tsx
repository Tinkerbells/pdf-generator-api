import { FC } from "react";
import { PageWrapper } from "./PageWrapper";
import { HighlightedText, MarkedText } from "../typography";
import { BottomImage } from "../BottomImage";

interface Page2Props {
  name: string;
}

export const Page2: FC<Page2Props> = ({ name }) => {
  return (
    <PageWrapper number="2">
      <div className="flex h-full w-full flex-col gap-4 p-4">
        <h1 className="font-inter text-2xl">Уважаемый {name}!</h1>
        <p className="font-inter text-sm">
          Поздравляем! Вы стали на шаг ближе к пониманию особенностей своего
          организма.
        </p>
        <p className="font-inter text-base font-medium">
          Благодаря исследованию, вы:
        </p>
        <MarkedText>
          <span className="text-purple">Узнаете</span> о состоянии микробиоты
          кишечника и ее влиянии на здоровье и метаболизм
        </MarkedText>
        <MarkedText>
          <span className="text-purple">Получаете</span> дорожную карту
          здоровья, которая включает персональный план питания и рекомендации по
          приему добавок и витаминов
        </MarkedText>
        <MarkedText>
          <span className="text-purple">Экономите время и средства</span> — наше
          исследование позволяет не только комплексно оценить состояние
          микробиоты и здоровья, но и сразу получить рекомендации
        </MarkedText>
        <HighlightedText size={"lg"} className="text-sm">
          Придерживаясь полученных рекомендаций, вы сможете улучшить
          самочувствие и снизить риск развития метаболических заболеваний
        </HighlightedText>
        <p className="font-inter text-sm">
          Сердце компании <span className="text-purple">Новабиом</span> —
          молодые ученые и IT-специалисты. Чтобы помочь вам скорректировать
          микробиоту кишечника и исправить проблемы с питанием, мы построили{" "}
          <span className="text-purple">дорожную карту здоровья</span>. Для
          этого мы разработали рекомендательную систему, которая создает
          персональную траекторию коррекции питания и приема добавок, используя
          методы машинного обучения и результаты работ ученых мирового масштаба.{" "}
        </p>
        <p className="mt-4 font-inter text-base font-medium text-purple">
          Следуйте за наукой и будьте уверены в результате.
        </p>
        <BottomImage height="h-[120px]" />
      </div>
    </PageWrapper>
  );
};
