import React from "react";
import { Button, Layout, Typography } from "antd";
import "./AiCard.css";
import Header from "../../components/Header/Header";

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const AiCard = () => {
   const aiList = [
      {
         id: 0,
         name: "Текст",
         category: "title",
         items: [
            {
               id: 0,
               name: "chatGPT",
               img: "",
            },
            {
               id: 1,
               name: "YandexGPT",
               img: "",
            },
            {
               id: 2,
               name: "Poe",
               img: "",
            },
            {
               id: 3,
               name: "Notion AI",
               img: "",
            },
            {
               id: 4,
               name: "Undetectable AI",
               img: "",
            },
            {
               id: 5,
               name: "GoogleBard",
               img: "",
            },
            {
               id: 6,
               name: "GAMMA",
               img: "",
            },
         ],
      },
      {
         id: 1,
         name: "Изображения",
         category: "photo",
         items: [
            {
               id: 0,
               name: "Midjourney",
               img: "",
            },
            {
               id: 1,
               name: "InSwapper",
               img: "",
            },
            {
               id: 2,
               name: "Twinmotion",
               img: "",
            },
            {
               id: 3,
               name: "Stable Diffusion",
               img: "",
            },
            {
               id: 4,
               name: "LeiaPix",
               img: "",
            },
            {
               id: 5,
               name: "Csm3D",
               img: "",
            },
            {
               id: 6,
               name: "DALL-E",
               img: "",
            },
            {
               id: 7,
               name: "Leonardo AI",
               img: "",
            },
            {
               id: 8,
               name: "Looka",
               img: "",
            },
            {
               id: 9,
               name: "Bigjpg",
               img: "",
            },
            {
               id: 10,
               name: "Magic eraser",
               img: "",
            },
         ],
      },
      {
         id: 1,
         name: "Код",
         category: "code",
         items: [
            {
               id: 0,
               name: "Codeium",
               img: "",
            },
            {
               id: 1,
               name: "Blackbox AI",
               img: "",
            },
            {
               id: 1,
               name: "Tabnine",
               img: "",
            },
         ]
      }
   ];
   return (
      <Layout
         style={{
            backgroundColor: "#fff",
         }}
      >
         {/* HEADER */}
         <Header />

         {/* HI! */}
         <Layout
            style={{
               backgroundColor: "#fff",
            }}
         >
            <Content
               style={{
                  padding: "55px 0 140px",
                  margin: 0,
                  textAlign: "center",
               }}
            >
               <Title
                  level={2}
                  style={{
                     fontSize: "52px",
                     fontWeight: "800",
                     marginBottom: "16px",
                  }}
               >
                  Playground AI
               </Title>
               <Paragraph style={{ fontSize: "22px", marginBottom: "32px" }}>
                  Вы можете создавать любые изображения по своему воображению с
                  помощью генеративных искусственных интеллектов Stable
                  Diffusion и DALL-E. Вам нужно только ввести текстовый запрос,
                  например "собака с крыльями" или "пицца с ананасами", и вы
                  получите синтетические изображения, соответствующие вашему
                  запросу.
               </Paragraph>
               <Button
                  style={{
                     background:
                        "linear-gradient(270deg, #FBEC9A 0%, #C9FED1 52%, #ACDFF5 100%)",
                     fontSize: "18px",
                     fontWeight: 600,
                     height: 52,
                     border: "none",
                     borderRadius: "40px",
                     padding: "0 32px",
                  }}
               >
                  Открыть
               </Button>
            </Content>
         </Layout>

         {/* == WHAT IS? */}
         <Layout
            className="Layout-Primary"
            style={{
               borderRadius: "64px",
               padding: "28px 64px 64px",
               background:
                  "linear-gradient(270deg, #FBEC9A 0%, #C9FED1 50.42%, #ACDFF5 100%)) !important",
               margin: "0 4px",
            }}
         >
            <Content
               style={{
                  margin: 0,
               }}
            >
               <Title
                  level={3}
                  style={{
                     fontSize: "36px",
                     fontWeight: "700",
                  }}
               >
                  Что есть в нашем каталоге?
               </Title>
               <Paragraph style={{ fontSize: "18px" }}>
                  Добро пожаловать в наш образовательный каталог нейросетей,
                  предназначенный для исследования и обучения в области работы с
                  текстом, изображениями и кодом. Нейросети – это мощные
                  инструменты искусственного интеллекта, способные эффективно
                  обрабатывать и анализировать различные типы данных.
               </Paragraph>
               <Paragraph style={{ fontSize: "18px" }}>
                  В каталоге вы можете найти список нейросетей, гайды по которым
                  присутствуют на сайте. Нейросети делятся на 3 категории: для
                  работы с тектом, с изображениями и с кодом. Нажав на название
                  нейросети, вы перейдете на страницу с подробным гайдом.
                  Независимо от вашего уровня опыта, вы сможете научиться
                  использовать передовые методы и технологии в области
                  искусственного интеллекта.
               </Paragraph>
               <Paragraph style={{ fontSize: "18px" }}>
                  Добро пожаловать в увлекательный мир нейросетей, где обучение
                  становится увлекательным и результативным!
               </Paragraph>
            </Content>
         </Layout>

         {/* WHY IS USERS? */}
         <Layout
            style={{
               backgroundColor: "#fff",
            }}
         >
            <Content
               style={{
                  padding: "55px 0 70px",
                  margin: 0,
                  textAlign: "center",
               }}
            >
               <Title
                  level={3}
                  style={{
                     fontSize: "36px",
                     fontWeight: "700",
                  }}
               >
                  Кто использует нейросети?
               </Title>

               <Paragraph style={{ fontSize: "18px" }}>
                  ...и многие другие!
               </Paragraph>
            </Content>
         </Layout>

         {/* FOOTER */}
         <Footer
            style={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               gap: "52px",
               backgroundColor: "transparent",
               height: "80px",
               background: "#202020",
            }}
         >
            <Paragraph
               style={{
                  color: "#818181",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: 0,
               }}
            >
               ЦПДМЛ Веб
            </Paragraph>
            <Paragraph
               style={{
                  color: "#818181",
                  fontSize: "18px",
                  fontWeight: 600,
                  margin: 0,
               }}
            >
               2023 г.
            </Paragraph>
         </Footer>
      </Layout>
   );
};

export default AiCard;
