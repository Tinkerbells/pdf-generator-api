import { HighlightedText } from "../typography";
import { PageWrapper } from "./PageWrapper";
import { AidKitIcon, BacteriaIcon, ForkIcon, TabletIcon } from "../icons";
import { BottomImage } from "../BottomImage";

export const Page3 = () => {
  return (
    <PageWrapper number="3">
      <div className="flex flex-col justify-center gap-5">
        <h1 className="-mb-2 mt-4 text-start font-inter text-[32px] font-medium uppercase leading-[110%]">
          В отчете <span className="text-purple">четыре </span>основных раздела:
        </h1>
        <div className="grid grid-cols-2 gap-7 px-12">
          <div className="flex flex-col gap-2">
            <p className="font-inter text-3xl text-purple">
              01
              <span className="ml-2 text-sm font-medium text-black">
                О технологии
              </span>
            </p>
            <p className="font-roboto text-xs">
              Этапы проведения исследования и создания
              <span className="text-purple">персональной дорожной карты </span>
              здоровья
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-inter text-3xl text-purple">
              02
              <span className="ml-2 text-sm font-medium text-black">
                Результаты
              </span>
            </p>
            <p className="font-roboto text-xs">
              Индекс здоровья микробиоты и соответствие микробиоты вашему
              возрасту, основные группы бактерий и оценка рисков развития
              заболеваний
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="flex items-start font-inter text-3xl text-purple">
              03
              <span className="ml-2 text-sm font-medium text-black">
                Дорожная карта здоровья
              </span>
            </p>
            <p className="font-roboto text-xs">
              Рекомендации по изменению рациона, приему витаминов и биологически
              активных добавок для коррекции микробиоты
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-inter text-3xl text-purple">
              04
              <span className="ml-2 text-sm font-medium text-black">
                Дополнительно
              </span>
            </p>
            <p className="font-roboto text-xs">
              Глоссарий и основные таксономические группы бактерий
            </p>
          </div>
        </div>
        <div className="w-full px-7">
          <HighlightedText size={"sm"} className="text-xs">
            При выявлении нарушений состава микробиоты мы можем рекомендовать:{" "}
          </HighlightedText>
        </div>
        <div className="grid grid-cols-2 gap-5 px-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <ForkIcon />
              <span className="ml-2 place-self-end font-roboto text-sm font-medium text-black">
                Изменить питание
              </span>
            </div>
            <p className="font-roboto text-xs">
              В разделе{" "}
              <span className="text-purple">
                Ваш персональный план питания{" "}
              </span>
              вы найдете карту рекомендованных продуктов и пример готового меню
              на неделю
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <TabletIcon />
              <span className="ml-2 place-self-end font-roboto text-sm font-medium text-black">
                Принимать добавки и витамины
              </span>
            </div>
            <p className="font-roboto text-xs">
              В разделах <span className="text-purple">Добавки </span>и{" "}
              <span className="text-purple">Витамины </span>
              вы найдете рекомендации, которые улучшат самочувствие и снизят
              риск развития заболеваний
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <BacteriaIcon />
              <span className="ml-2 place-self-end font-roboto text-sm font-medium text-black">
                Принимать пробиотики
              </span>
            </div>
            <p className="font-roboto text-xs">
              В разделе <span className="text-purple">Пробиотики </span>вы
              узнаете, какие пробиотические бактерии помогут скорректировать
              микробиоту кишечника
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center">
              <AidKitIcon />
              <span className="ml-2 place-self-end font-roboto text-sm font-medium text-black">
                Обратиться к специалисту
              </span>
            </div>
            <p className="font-roboto text-xs">
              Если вы видите данную иконку, советуем{" "}
              <span className="text-purple">обратиться к врачу</span>
            </p>
          </div>
        </div>
        <BottomImage height="h-[93px]" />
      </div>
    </PageWrapper>
  );
};
