import type { TChildren, TFormat } from "../types";

export const findObjectsWithTarget = (pages: any) => {
  const result: any[] = [];

  const recursiveSearch = (obj: any) => {
    if (obj.target) {
      result.push(obj);
    }

    if (obj.children) {
      if (Array.isArray(obj.children)) {
        obj.children.forEach((child: any) => recursiveSearch(child));
      } else {
        recursiveSearch(obj.children);
      }
    }
  };

  pages.forEach((page: any) => recursiveSearch(page));

  return result;
};

export const findTargetStrings = (format: TFormat): { [key: string]: TChildren } => {
  const result: { [key: string]: TChildren } = {};

  const recursive = (children: TChildren | TChildren[] | string, parent: any) => {
    if (typeof children === "string" && children.includes("TARGET_")) {
      result[children] = parent;
    } else if (typeof children === "object") {
      if (Array.isArray(children)) {
        children.forEach((child) => {
          if (typeof child === "object") {
            recursive(child.children, child);
          }
        });
      } else {
        recursive(children.children, children);
      }
    }
  };

  recursive(format.children, format);

  return result;
};

export const json = JSON.stringify({
  routes: [
    { id: 1, route: "/auth", pageId: 4 },
    { id: 2, route: "/posters", pageId: 5 },
    { id: 3, route: "/about", pageId: 6 },
  ],
  pages: [
    {
      id: 6,
      node: {
        value: "div",
        props: { className: "page", style: { background: "yellowgreen" } },
        children: [
          {
            target: {
              value: "ABOUT_SUBTITLE",
              format: {
                children: {
                  value: "span",
                  props: {},
                  children: "TARGET_TITLE_string",
                },
              },
            },
            value: "h1",
            props: { className: "title", style: { textAlign: "center", color: "blue" } },
            children: { value: "span", props: {}, children: "About" },
          },
          { value: "h1", props: { className: "title", style: { color: "blue" } }, children: "Second one" },
        ],
      },
    },
    {
      id: 5,
      node: {
        value: "div",
        props: {
          className: "page",
          style: {
            boxShadow: "-1px 0px 2px #000, 1px 0 2px #000",
            background: "#f1f1f1",
            maxWidth: 1024,
            margin: "0 auto",
          },
        },
        children: {
          value: "div",
          target: {
            value: "ARTICLES",
            format: {
              children: [
                // Если массив, то учитывать что это именно массив иначе будет просто объект
                {
                  value: "div",
                  props: { style: { padding: "25px 15px" } },
                  children: [
                    {
                      value: "h2",
                      props: { style: { fontSize: 32, fontFamily: "arial" } },
                      children: "TARGET_TITLE_string",
                    },
                    { value: "div", props: { style: { fontSize: 20 } }, children: "TARGET_BODY_string" },
                  ],
                },
              ],
            },
          }, // TARGET
          props: {},
          children: [
            {
              target: {
                value: "QWE",
                format: {
                  children: [
                    // Если массив, то учитывать что это именно массив иначе будет просто объект
                    {
                      value: "div",
                      props: { style: { padding: "25px 15px" } },
                      children: [
                        {
                          value: "h2",
                          props: { style: { fontSize: 32, fontFamily: "arial" } },
                          children: "TARGET_TITLE_string",
                        },
                        { value: "div", props: { style: { fontSize: 20 } }, children: "TARGET_QWE_string" },
                      ],
                    },
                  ],
                },
              }, // TARGET
              value: "div",
              props: { style: { padding: "25px 15px" } },
              children: [
                { value: "h2", props: { style: { fontSize: 32, fontFamily: "arial" } }, children: "Article title" },
                {
                  value: "div",
                  props: {
                    style: {
                      fontSize: 20,
                    },
                  },
                  children: `Князь Василий исполнил обещание, данное на вечере у Анны Павловны княгине Друбецкой,
                    просившей его о своем единственном сыне Борисе. О нем было доложено государю, и,
                    не в пример другим, он был переведен в гвардии Семеновский полк прапорщиком. Но
                    адъютантом или состоящим при Кутузове Борис так и не был назначен, несмотря на все
                    хлопоты и происки Анны Михайловны. Вскоре после вечера Анны Павловны Анна Михайловна
                    вернулась в Москву, прямо к своим богатым родственникам Ростовым, у которых она стояла
                    в Москве и у которых с детства воспитывался и годами живал ее обожаемый Боренька, только
                    что произведенный в армейские и тотчас переведенный в гвардейские прапорщики. Гвардия
                    уже вышла из Петербурга 10-го августа, и сын, оставшийся для обмундирования в Москве, должен
                    был догнать ее по дороге в Радзивилов.`,
                },
              ],
            },
            {
              value: "div",
              props: { style: { padding: "25px 15px" } },
              children: [
                { value: "h2", props: { style: { fontSize: 32, fontFamily: "arial" } }, children: "Article title" },
                {
                  value: "div",
                  props: {
                    style: {
                      fontSize: 20,
                    },
                  },
                  children: `Князь Василий исполнил обещание, данное на вечере у Анны Павловны княгине Друбецкой,
                    просившей его о своем единственном сыне Борисе. О нем было доложено государю, и,
                    не в пример другим, он был переведен в гвардии Семеновский полк прапорщиком. Но
                    адъютантом или состоящим при Кутузове Борис так и не был назначен, несмотря на все
                    хлопоты и происки Анны Михайловны. Вскоре после вечера Анны Павловны Анна Михайловна
                    вернулась в Москву, прямо к своим богатым родственникам Ростовым, у которых она стояла
                    в Москве и у которых с детства воспитывался и годами живал ее обожаемый Боренька, только
                    что произведенный в армейские и тотчас переведенный в гвардейские прапорщики. Гвардия
                    уже вышла из Петербурга 10-го августа, и сын, оставшийся для обмундирования в Москве, должен
                    был догнать ее по дороге в Радзивилов.`,
                },
              ],
            },
            {
              value: "div",
              props: { style: { padding: "25px 15px" } },
              children: [
                { value: "h2", props: { style: { fontSize: 32, fontFamily: "arial" } }, children: "Article title" },
                {
                  value: "div",
                  props: {
                    style: {
                      fontSize: 20,
                    },
                  },
                  children: `Князь Василий исполнил обещание, данное на вечере у Анны Павловны княгине Друбецкой,
                    просившей его о своем единственном сыне Борисе. О нем было доложено государю, и,
                    не в пример другим, он был переведен в гвардии Семеновский полк прапорщиком. Но
                    адъютантом или состоящим при Кутузове Борис так и не был назначен, несмотря на все
                    хлопоты и происки Анны Михайловны. Вскоре после вечера Анны Павловны Анна Михайловна
                    вернулась в Москву, прямо к своим богатым родственникам Ростовым, у которых она стояла
                    в Москве и у которых с детства воспитывался и годами живал ее обожаемый Боренька, только
                    что произведенный в армейские и тотчас переведенный в гвардейские прапорщики. Гвардия
                    уже вышла из Петербурга 10-го августа, и сын, оставшийся для обмундирования в Москве, должен
                    был догнать ее по дороге в Радзивилов.`,
                },
              ],
            },
            {
              value: "div",
              props: { style: { padding: "25px 15px" } },
              children: [
                { value: "h2", props: { style: { fontSize: 32, fontFamily: "arial" } }, children: "Article title" },
                {
                  value: "div",
                  props: {
                    style: {
                      fontSize: 20,
                    },
                  },
                  children: `Князь Василий исполнил обещание, данное на вечере у Анны Павловны княгине Друбецкой,
                    просившей его о своем единственном сыне Борисе. О нем было доложено государю, и,
                    не в пример другим, он был переведен в гвардии Семеновский полк прапорщиком. Но
                    адъютантом или состоящим при Кутузове Борис так и не был назначен, несмотря на все
                    хлопоты и происки Анны Михайловны. Вскоре после вечера Анны Павловны Анна Михайловна
                    вернулась в Москву, прямо к своим богатым родственникам Ростовым, у которых она стояла
                    в Москве и у которых с детства воспитывался и годами живал ее обожаемый Боренька, только
                    что произведенный в армейские и тотчас переведенный в гвардейские прапорщики. Гвардия
                    уже вышла из Петербурга 10-го августа, и сын, оставшийся для обмундирования в Москве, должен
                    был догнать ее по дороге в Радзивилов.`,
                },
              ],
            },
          ],
        },
      },
    },
    {
      id: 4,
      node: {
        value: "div",
        props: { className: "page", style: { background: "yellowgreen" } },
        children: [
          {
            value: "h1",
            props: { className: "title", style: { textAlign: "center", color: "blue" } },
            children: "Auth",
          },
          { value: "h1", props: { className: "title", style: { color: "blue" } }, children: "Second auth" },
        ],
      },
    },
  ],
});
