import React from "react";
import { Button, ConfigProvider, Flex, Layout, Typography } from "antd";
import "./Catalog.css";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

import bigjpgImg from "../../assets/ai/bigjpg.png";
import blackboxImg from "../../assets/ai/blackbox-ai.png";
import chatgptImg from "../../assets/ai/chat-gpt.png";
import codeiumImg from "../../assets/ai/codeium.png";
import csm3dImg from "../../assets/ai/csm3d.png";
import dalleImg from "../../assets/ai/dall-e.png";
import gammaImg from "../../assets/ai/gamma.png";
import googlebardImg from "../../assets/ai/google-bard.png";
import inswapperImg from "../../assets/ai/inswapper.png";
import leiapixImg from "../../assets/ai/leia-pix.png";
import leonardoImg from "../../assets/ai/leonardo-ai.png";
import lookaImg from "../../assets/ai/looka.png";
import magiceraserImg from "../../assets/ai/magic-eraser.png";
import midjourneyImg from "../../assets/ai/midjourney.png";
import notionImg from "../../assets/ai/notion-ai.png";
import poeImg from "../../assets/ai/poe.png";
import stablediffusionImg from "../../assets/ai/stable-diffusion.png";
import tabnineImg from "../../assets/ai/tabnine.png";
import twinmotionImg from "../../assets/ai/twinmotion.png";
import undetectableImg from "../../assets/ai/undetectable-ai.png";
import yandexImg from "../../assets/ai/yandex-gpt.png";
import rytrImg from "../../assets/ai/rytr.png";
// import Img from '../../assets/ai'
// import Img from '../../assets/ai'
// import Img from '../../assets/ai'
// import Img from '../../assets/ai'

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Catalog = () => {
   const aiList = [
      {
         id: 0,
         name: "Текст",
         category: "title",
         items: [
            {
               id: 0,
               name: "chatGPT",
               link: "#",
               img: chatgptImg,
            },
            {
               id: 1,
               name: "YandexGPT",
               link: "#",
               img: yandexImg,
            },
            {
               id: 2,
               name: "Poe",
               link: "#",
               img: poeImg,
            },
            {
               id: 3,
               name: "Notion AI",
               link: "#",
               img: notionImg,
            },
            {
               id: 4,
               name: "Rytr",
               link: "#",
               img: rytrImg,
            },
            {
               id: 5,
               name: "Undetectable AI",
               link: "#",
               img: undetectableImg,
            },
            {
               id: 6,
               name: "GoogleBard",
               link: "#",
               img: googlebardImg,
            },
            {
               id: 7,
               name: "GAMMA",
               link: "#",
               img: gammaImg,
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
               link: "#",
               img: midjourneyImg,
            },
            {
               id: 1,
               name: "InSwapper",
               link: "#",
               img: inswapperImg,
            },
            {
               id: 2,
               name: "Twinmotion",
               link: "#",
               img: twinmotionImg,
            },
            {
               id: 3,
               name: "Stable Diffusion",
               link: "#",
               img: stablediffusionImg,
            },
            {
               id: 4,
               name: "LeiaPix",
               link: "#",
               img: leiapixImg,
            },
            {
               id: 5,
               name: "Csm3D",
               link: "#",
               img: csm3dImg,
            },
            {
               id: 6,
               name: "DALL-E",
               link: "#",
               img: dalleImg,
            },
            {
               id: 7,
               name: "Leonardo AI",
               link: "#",
               img: leonardoImg,
            },
            {
               id: 8,
               name: "Looka",
               link: "#",
               img: lookaImg,
            },
            {
               id: 9,
               name: "Bigjpg",
               link: "#",
               img: bigjpgImg,
            },
            {
               id: 10,
               name: "Magic eraser",
               link: "#",
               img: magiceraserImg,
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
               link: "#",
               img: codeiumImg,
            },
            {
               id: 1,
               name: "Blackbox AI",
               link: "#",
               img: blackboxImg,
            },
            {
               id: 2,
               name: "Tabnine",
               link: "#",
               img: tabnineImg,
            },
         ],
      },
   ];

   return (
      <ConfigProvider
         theme={{
            token: {
               // Seed Token
               colorPrimary: "#000",
               borderRadius: 2,

               // Alias Token
               fontFamily: "Inter",
               colorBgContainer: "#f6ffed",
            },
         }}
      >
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
                     Каталог нейросетей
                  </Title>
                  <Paragraph style={{ fontSize: "22px", marginBottom: "32px" }}>
                     3 категории, 23 нейросети
                  </Paragraph>
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
                     предназначенный для исследования и обучения в области
                     работы с текстом, изображениями и кодом. Нейросети – это
                     мощные инструменты искусственного интеллекта, способные
                     эффективно обрабатывать и анализировать различные типы
                     данных.
                  </Paragraph>
                  <Paragraph style={{ fontSize: "18px" }}>
                     В каталоге вы можете найти список нейросетей, гайды по
                     которым присутствуют на сайте. Нейросети делятся на 3
                     категории: для работы с тектом, с изображениями и с кодом.
                     Нажав на название нейросети, вы перейдете на страницу с
                     подробным гайдом. Независимо от вашего уровня опыта, вы
                     сможете научиться использовать передовые методы и
                     технологии в области искусственного интеллекта.
                  </Paragraph>
                  <Paragraph style={{ fontSize: "18px" }}>
                     Добро пожаловать в увлекательный мир нейросетей, где
                     обучение становится увлекательным и результативным!
                  </Paragraph>
               </Content>
            </Layout>

            {/* WHY IS USERS? */}
            <Layout
               style={{
                  backgroundColor: "#fff",
                  padding: "120px 0",
               }}
            >
               {aiList.map((elem) => {
                  return (
                     <Content
                        style={{
                           padding: "12px 0 12px",
                           margin: 0,
                           textAlign: "center",
                        }}
                     >
                        <Title
                           id={elem.category}
                           level={3}
                           style={{
                              fontSize: "36px",
                              fontWeight: "700",
                           }}
                        >
                           {elem.name}
                        </Title>

                        <Flex className="aielem-list">
                           {elem.items.map((el) => {
                              return (
                                 <Link
                                    to={el.link}
                                    key={el.id}
                                    className="aielem"
                                 >
                                    <div className="aielem__img">
                                       <img src={el.img} alt={el.name} />
                                    </div>
                                    <div className="aielem__name">
                                       {el.name}
                                    </div>
                                 </Link>
                              );
                           })}
                        </Flex>
                     </Content>
                  );
               })}
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
      </ConfigProvider>
   );
};

export default Catalog;
