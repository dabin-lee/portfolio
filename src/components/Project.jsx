import React, { useState, useContext } from "react";
import { NavContext } from "../context/navContext";
import { Button, Space, Modal } from "antd";
import img1 from "../assets/img/login-page.png";
import img2 from "../assets/img/netflix.png";
import ProjectDesc from "../assets/projectDesc";
import ProjectDesc1 from "../assets/projectDesc1";
// import {mkCont} from '../assets/mkfile/mk'

function Project() {
  const [size, setSize] = useState("large");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const navData = useContext(NavContext);
  return (
    <div className="w-full h-auto bg-white p-8" ref={navData.project}>
      <h2 className="tit">νλ‘μ νΈ</h2>

      <ul className="mt-8 project">
        <li>
          <div>
            <img src={img1} alt="" />
          </div>
          <h3 className="project_tit s_tit w-full">πβπ¦Ί Pet Marking</h3>
          <div>
            <ul className="ex_list p-5 px-8">
              <li>κ°μΈ μμ</li>
              <li>μμ κΈ°κ°: 2022.10 - 2022.12 </li>
              <li>μ°Έμ¬λ 100%</li>
              <li>
                <div className="flex">
                  <p>μλΉμ€ μκ°:</p>
                  <p className="ml-2">λ°λ €κ²¬κ³Ό ν¨κ» λλ°ν  μ μλ λλ§μ λΆλ§ν¬λ₯Ό νμΈνλ μΉ μ¬μ΄νΈμλλ€. </p>
                </div>
              
              </li>
              <li>
                <div className="flex">
                  <p>μ’μλ μ :</p>
                  <p className="ml-2">μ μΌ μ μ μ κ°κ³  μνλ μμλ¬Όμλλ€. <br />λ‘κ·ΈμΈ κΈ°λ₯μ κ΅¬ννλ©΄μ ν ν° κΈ°λ° μΈμ¦μ λν΄ μκ²λμ΄ JWTν ν° μ¬μ© μΈμ¦λ°©μμ νμ©νμ΅λλ€. <br />μλ²λ₯Ό μ§μ  κ΅¬μΆνκ³  AWS λ°°ν¬κΉμ§ ν΄λ³΄λ©΄μ λ°μνλ μ΄μμ μμΈλ€μ νμν  μ μκ²λμμ΅λλ€.</p>
                </div>
              </li>
              <li>
                <div className="flex">
                  <p>μμ¬μ λ μ :</p>
                  <p className="ml-2">λ°±μλμ μ²μ κ³΅λΆνκΈ°μ μ°Έμ¬λμ κΈ°μ¬λλ₯Ό λλ΄μ΅λλ€. λ€νΈμν¬μ λν νμ΅μ νμμ±μ λ§μ΄ λλΌκ² λ κ³κΈ°μμ΅λλ€.</p>
                </div>
              </li>
            </ul>

            <Space wrap className="pr-10 pb-8 pt-0 flex justify-end">
              <Button size={size} onClick={() => setOpen(true)}>
                README
              </Button>
              <Modal
                title="πβπ¦Ί Pet Marking"
                centered
                open={open}
                onCancel={() => setOpen(false)}
                width={1000}
              >
                  <ProjectDesc />
                <Button onClick={() => setOpen(false)} className="closeBtn">
                  λ«κΈ°
                </Button>
              </Modal>
              <Button type="link" size={size} className="bg-slate-300">
                <a href="http://pet-marking-client.s3-website.ap-northeast-2.amazonaws.com/" target="_blank">WEB SITE</a>
              </Button>
            </Space>
          </div>
        </li>
        <li className="mt-4 border-t-2 pt-16">
          <div>
            <img src={img2} alt="" />
          </div>
          <h3 className="project_tit s_tit w-full">πβπ¦Ί Netflix web site</h3>
          <div>
            <ul className="ex_list p-5 px-8">
              <li>κ°μΈ μμ</li>
              <li>μμ κΈ°κ°: 2022.09 - 2022.11 </li>
              <li>μ°Έμ¬λ 100%</li>
              <li>
                <div className="flex">
                  <p>μλΉμ€ μκ°:</p>
                  <p className="ml-2">λ·νλ¦­μ€ μΉ μ¬μ΄νΈ λ©μΈνλ©΄μ λ¦¬μ‘νΈ
                  μ΄νλ¦¬μΌμ΄μμΌλ‘ λ§λ  νλ©΄μλλ€. <br />
                  λ¦¬μ‘νΈμ λν νμ΅μ λͺ©μ μΌλ‘ κ°μλ₯Ό μ°Έκ³ λ‘ νμ©νμ΅λλ€. </p>
                </div>
              
              </li>
              <li>
                <div className="flex">
                  <p>μ’μλ μ :</p>
                  <p className="ml-2">μΈλΆ apiλ₯Ό ν΅μ μ΄ λ§μμ κ°λμ±κ³Ό μ¬ μ¬μ©μ±μ κ³ λ €ν λ‘μ§μ μ§λ μ°μ΅μ νμ΅λλ€. <br /> react-router-domλ₯Ό μ΄μ©ν΄μ useParamsλ useNavigateλ±μ μ‘°κΈ λ μ§μ€μ μΌλ‘ κ³΅λΆν  μ μμμ΅λλ€.</p>
                </div>
              </li>
            </ul>

            <Space wrap className="pr-10 pb-8 pt-0 flex justify-end">
              <Button size={size} onClick={() => setOpen2(true)}>
                README
              </Button>
              <Modal
                title="Netflix web site"
                centered
                open={open2}
                onCancel={() => setOpen2(false)}
                cancelText="λ«κΈ°"
                width={1000}
              >
                <ProjectDesc1 />

              </Modal>
              <Button type="link" size={size} className="bg-slate-300">
                <a href="https://dabin-lee.github.io/react_netflix/" target="_blank">WEB SITE</a>
              </Button>
            </Space>
          </div>
        </li>
        </ul>
    </div>
    );
}

export default Project;
