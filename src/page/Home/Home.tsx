   import React from "react";
import {
   BsBookFill,
   BsCpuFill,
   BsDisplayFill,
   BsFillHeartFill,
   BsFillPaletteFill,
} from "react-icons/bs";
import { Button, ConfigProvider, Flex, Layout, Typography } from "antd";
import textImg from "../../assets/text.png";
import photoImg from "../../assets/photo.png";
import codeImg from "../../assets/code.png";
import "./Home.css";
import Header from "../../components/Header/Header";
import { Link, useNavigate } from "react-router-dom";

const { Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Home = () => {
   const profession = [
      {
         id: 0,
         name: "Инженеры",
         icon: <BsCpuFill size={"40px"} />,
      },
      {
         id: 1,
         name: "Программисты",
         icon: <BsDisplayFill size={"40px"} />,
      },
      {
         id: 1,
         name: "Медики",
         icon: <BsFillHeartFill size={"40px"} />,
      },
      {
         id: 1,
         name: "Лингвисты",
         icon: <BsBookFill size={"40px"} />,
      },
      {
         id: 1,
         name: "Дизайнеры",
         icon: <BsFillPaletteFill size={"40px"} />,
      },
   ];

   const navigate = useNavigate();

   const categories = [
      {
         id: 0,
         name: "Текст",
         link: "/catalog#text",
         img: textImg,
      },
      {
         id: 1,
         name: "Изображения",
         link: "/catalog#photo",
         img: photoImg,
      },
      {
         id: 2,
         name: "Код",
         link: "/catalog#code",
         img: codeImg,
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
                     Нейросети — будущее здесь
                  </Title>
                  <Paragraph style={{ fontSize: "22px", marginBottom: "32px" }}>
                     Поможем прикоснуться к нему в настоящем!
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
                     onClick={() => navigate("/catalog")}
                  >
                     Перейти в каталог
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
                     Что такое нейросети?
                  </Title>
                  <Paragraph style={{ fontSize: "18px" }}>
                     Нейросеть — это математическая модель, разработанная
                     вдохновляясь строением и функционированием мозга.
                     Это алгоритм машинного обучения, который состоит
                     из большого количества связанных и взаимосвязанных
                     искусственных нейронов. Нейросеть может использоваться
                     для обработки и анализа больших объёмов данных,
                     распознавания образов, классификации, прогнозирования
                     и генерации новых данных.
                  </Paragraph>
                  <Paragraph style={{ fontSize: "18px" }}>
                     Нейросети обучаются путём подачи входных данных
                     и их последующего обработки через слои нейронов. Каждый
                     нейрон принимает информацию от предыдущего слоя, вычисляет
                     взвешенную сумму и передаёт результат следующему слою.
                     Процесс обучения заключается в настройке весов связей
                     между нейронами, чтобы минимизировать ошибку на выходе.
                  </Paragraph>
                  <Paragraph style={{ fontSize: "18px" }}>
                     Нейросети широко применяются в различных областях, включая
                     компьютерное зрение, обработку естественного языка,
                     медицину, финансы и многое другое. Они могут быть очень
                     мощными инструментами для решения сложных задач и позволяют
                     компьютерам обучаться и адаптироваться на основе опыта.
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

                  <Flex className="proffesion-list">
                     {profession.map((el) => {
                        return (
                           <div key={el.id} className="proffesion">
                              <div className="proffesion__icon">{el.icon}</div>
                              <div className="proffesion__text">{el.name}</div>
                           </div>
                        );
                     })}
                  </Flex>
                  <Paragraph style={{ fontSize: "18px" }}>
                     ...и многие другие!
                  </Paragraph>
               </Content>
            </Layout>

            {/* == WHY OUR GOAL? */}
            <Layout
               className="Layout-Primary"
               style={{
                  borderRadius: "64px",
                  padding: "28px 64px 64px",
                  background:
                     "linear-gradient(270deg, #FBEC9A 0%, #C9FED1 50.42%, #ACDFF5 100%))",
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
                     Для чего нужен наш сервис?
                  </Title>
                  <Paragraph style={{ fontSize: "18px" }}>
                     Образовательный сайт про нейросети играет важную роль
                     в современном мире, предоставляя ценную информацию
                     и ресурсы для тех, кто интересуется этой захватывающей
                     областью искусственного интеллекта.
                  </Paragraph>
                  <Paragraph style={{ fontSize: "18px" }}>
                     На этом сайте вы сможете погрузиться в увлекательный
                     мир нейросетей и узнать, как они функционируют. Вы сможете
                     изучить основные принципы работы нейронных сетей,
                     их различные архитектуры и применения. Благодаря понятным
                     объяснениям и наглядным примерам, вы сможете легко освоить
                     сложные концепции и начать применять их на практике.
                  </Paragraph>
                  <Paragraph style={{ fontSize: "18px" }}>
                     Наш сайт предлагает широкий спектр образовательных
                     материалов, включая интерактивные уроки, видеоуроки, статьи
                     и практические задания. Вы сможете пройти пошаговые
                     инструкции по созданию и обучению собственных нейронных
                     сетей, а также узнать о последних тенденциях и достижениях
                     в этой области.
                  </Paragraph>
                  <Paragraph style={{ fontSize: "18px" }}>
                     Наша цель — сделать изучение нейросетей доступным
                     и увлекательным для всех. Независимо от вашего уровня
                     знаний, вы найдёте на нашем сайте полезные материалы,
                     которые помогут вам расширить свои навыки и понимание
                     в области нейросетей.Присоединяйтесь к нашему сообществу
                     и начните своё путешествие в мир нейросетей уже сегодня!
                  </Paragraph>
                  <Paragraph style={{ fontSize: "18px" }}>
                     Все тексты на этой странице сгенерированы нейросетью!-)
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
                     padding: "55px 0 100px",
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
                     Мы разделили нейросети на 3 категории
                  </Title>

                  <Flex className="category-list">
                     {categories.map((el) => {
                        return (
                           <Link to={el.link} key={el.id} className="category">
                              <div className="category__img">
                                 <img src={el.img} alt={el.img} />
                              </div>
                              <div className="category__name">{el.name}</div>
                           </Link>
                        );
                     })}
                  </Flex>
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
      </ConfigProvider>
   );
};

export default Home;
