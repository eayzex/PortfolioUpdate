import { useState } from "react";
import "./main.css";



const MyProject = [
  {projectTitle: "react project", category: "React", imgPath: "./images/99.jpg"}, 
  {projectTitle: "css project", category: "css", imgPath: "./images/88.jpg"},
  {projectTitle: "JavaScript project", category: "JavaScript" , imgPath: "./images/77.jpg"},
  {projectTitle: "Node project", category: "Node", imgPath: "./images/66.jpg"},

]

const Main = () => {

  const [currentActive, setcurrentActive] = useState("all")
  const [arr, setArr] = useState(MyProject)

  console.log({currentActive})
  return (
    <main className="flex">
      <section className="flex  left-section">
        <button onClick={async function name() {
        setcurrentActive("all")
        }} className={currentActive === "all" ? "active" : null}>all projects</button>

        <button onClick={async function name() {
          setcurrentActive("css")
          const newArr = MyProject.filter((item) => {
            return item.category === "css"  
          })

          setArr(newArr)
        }} className={currentActive === "css" ? "active" : null}>HTML & CSS</button>



        <button onClick={async function name() {
          setcurrentActive("JavaScript")
          const newArr = MyProject.filter((item) => {
            return item.category === "JavaScript"   
          })

          setArr(newArr)
        }} className={currentActive === "JavaScript" ? "active" : null}>JavaScript</button>

        <button onClick={async function name() {
           setcurrentActive("React")
        }}className={currentActive === "React" ? "active" : null}>React & MUI</button>


        <button onClick={async function name() {
          setcurrentActive("Node")
          const newArr = MyProject.filter((item) => {
            return item.category === "Node"   
          })

          setArr(newArr)
        }} className={currentActive === "Node" ? "active" : null}>Node</button>

      </section>

      <section className=" flex right-section">
        {MyProject.map((item) => { 
          return (
            <>

            
            {item.category === currentActive || currentActive === "all" ? (
            <article key={item.imgPath} className="  card">
              <img width={266} src={item.imgPath} alt="" />

              <div style={{ width: "266px" }} className="box">
                <h1 className="title">{item.projectTitle}</h1>
                <p className="sub-title">
                  Lorem ipsum dolor sit amet consectetur elit adipisicing . Ex
                  tempore dolor in, accusantium laudantium accusamus.
                </p>

                <div className="flex icons">
                  <div style={{ gap: "11px" }} className="flex">
                    <div className="icon-link"></div>
                    <div className="icon-github"></div>
                  </div>

                  <a className="link flex" href="">
                    more
                    <span
                      style={{ alignSelf: "end" }}
                      className="icon-arrow-right"
                    ></span>
                  </a>
                </div>
              </div>
            </article>
          ) : null}
            </>
          );
        })}
      </section>
    </main>
  );
};

export default Main;
