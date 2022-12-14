import React from "react";

function ProjectDesc() {
  return (
    <div className="desc">
      <p>πλ‘κ·ΈμΈ/ νμκ°μ νλ©΄</p>
      <div className="flex gap-3">
        <img
          src="https://user-images.githubusercontent.com/57528886/204869710-d7d737dd-680c-4c7c-a254-1204184699bc.png"
          width="350"
          alt="siteimg"
        />
        <img
          src="https://user-images.githubusercontent.com/57528886/204869838-6edb1187-c3a5-44e5-b04a-d09200ad0974.png"
          width="415"
          alt="siteimg"
        />
      </div>

      <p className="mt-3">πλ©μΈ νλ©΄</p>
      <div>
        <img
          width="763"
          alt="signUp_page"
          src="https://user-images.githubusercontent.com/57528886/204869407-9e82fa36-2545-41da-8928-cf62d0bf8df4.png"
        />
      </div>

      <h2>β Descriptionβ¨</h2>
      <p className="content bg-amber-50">
        λ°λ €μΈμ΄λΌλ©΄ κ³΅κ° ν  μ μλ, μ΄λ κ°λ  ν­μ λ°λ €λλ¬Ό λλ° κΈ°μ€μΌλ‘
        κ²μνμ§ μμΌμλμ? <br />
        λ°λ €μΈμκ² μ¬μ ν λ°λ €λλ¬Όκ³Ό ν¨κ» νλ μΆμ΄ μ½μ§μμμ.
        <br />
        <br />
        ν« λ§νΉμ λμ λ°λ € λλ¬Όκ³Ό ν¨κ» κ° μ μλ μ₯μλ₯Ό μ°Ύμμ£Όλ μλΉμ€
        μλλ€. <br />
        ν€μλλ₯Ό ν΅ν΄ 'pet'μ κ΄λ ¨λ μ₯μ, λλ¬Ό μΆμμ΄ κ°λ₯ν μ₯μλ₯Ό μ°Ύμμ£Όλ μΉ
        μ¬μ΄νΈ μλλ€.
        <br />
        μ μ₯νλ μ₯μλ₯Ό λΆλ§ν¬μμ λ€μ μ°Ύμ μ μμ΅λλ€.
        <br />
        <br />
        κ°μμ§κ° νν μμ μ μμ­μ νμνλ μ©μ΄λ₯Ό 'λ§νΉ'μ νλ€κ³  νμ£ .
        <br />
        μκ°μ λμ΄ μ΄ νλ‘μ νΈμ μ΄λ¦μ ν« λ§νΉμλλ€ :)
      </p>

      <h2>κ°λ¨ν μ¬μ© λ°©λ²</h2>
      <ul className="content">
        <li>
          - κ²μμ°½μ μ₯μ νΉμ μνλ ν€μλλ‘ κ²μμ νλ€. ex) μμ§λ‘, λλ°,
          μΉ΄ν, μλΉ λ±
        </li>
        <li>
          - λ§΅μμ λ§μ»€λ‘ νμ λ λͺ©λ‘μ νλ¨ μΆμ²μ₯μ λ¦¬μ€νΈμ μΆλ ₯ λλ€.
        </li>
        <li>- λλ μ§λμ μλ λ§μ»€λ₯Ό λλ₯΄λ©΄ ν΄λΉ μμ²΄ μ λ³΄ λͺ¨λ¬ μ°½μ΄ λ¬λ€.</li>
        <li>- λ§μμ λλ μ₯μλ₯Ό μ°Ύμλ€λ©΄ λΆλ§ν¬λ₯Ό λλ₯Έλ€.</li>
        <li>- λΆλ§ν¬μμ λ¦¬μ€νΈλ₯Ό μ§μ°κ³  μΆμ λ ννΈνμλ₯Ό μ κ±°ν΄μ€λ€.</li>
      </ul>

      <div className="flex mt-4">
        <div>
          <h2>β° κ°λ° κΈ°κ°β¨</h2>
          <p className="content mr-4">2022.10.01 - 2022.12.01</p>
        </div>

        <div>
          <h2>π νμ΄μ§ κ΅¬μ±β¨</h2>
          <div className="content mr-4 px-4 border-r-2 border-l-2">
            <ul className="pageList">
              <li>
                <p>&middot; header</p>
                <p className="pl-3">- nav</p>
              </li>
              <li>
                <p>&middot; main</p>
                <ul className="pl-3">
                  <li>- map</li>
                  <li>- Bookmark List</li>
                  <li>- Store List</li>
                </ul>
              </li>
              <li>
                <p>&middot; user</p>
                <p className="pl-3">- user Infomation</p>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2>κ΅¬ν κΈ°λ₯β¨</h2>
          <ul className="content mr-4">
            <li>1. λ‘κ·ΈμΈ/ λ‘κ·Έμμ</li>
            <li>2. νμκ°μ</li>
            <li>3. μ₯μ κ²μ</li>
            <li>4. μ₯μ λΆλ§ν¬</li>
          </ul>
        </div>
        <div>
          <h2>π μ¬μ©κΈ°μ  λ° μΈμ΄β¨</h2>

          <div className="flex border">
            <div className="p-2">
              <h3>[FrontEnd]</h3>
              <ul>
                <li>Javascript</li>
                <li>React</li>
              </ul>
            </div>
            <div className="p-2 border-r-2 border-l-2">
              <h3>[library]</h3>
              <ul>
                <li>recoil</li>
                <li> chakra Ui</li>
                <li>emotion style</li>
                <li> fortawesome</li>
                <li> react-hooks-form</li>
                <li>react-router-dom</li>
                <li> swiper</li>
              </ul>
            </div>
            <div className="p-2">
              <h3>[Backend]</h3>
              <ul>
                <li>Express</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2>μΈλΆ κΈ°λ₯ λͺμΈβ¨</h2>
      <div className="content">
        <h3 className="text-lg">π£οΈ client</h3>
        <ul className="content">
          <li>
            <h4>1. λ‘κ·ΈμΈ/ λ‘κ·Έμμ / νμκ°μ</h4>
            <ul className="pl-2">
              <li>- μ¬μ©μ μΈμμ μ§λ₯Ό μν΄ λ‘μ»¬μ€ν λ¦¬ μ‘μΈμ€ν ν° μ μ₯</li>
              <li>- λ‘κ·ΈμΈ μ μ§ κΈ°λ₯: μ‘μΈμ€ν ν°μ μλͺμ 365λ‘ μ§μ ν΄μ€</li>
            </ul>
          </li>
          <li>
            <h4>2. μ₯μ κ²μ</h4>
            <ul className="pl-2">
              <li>- μΉ΄μΉ΄μ€ map APIλ₯Ό μ΄μ©νμ¬ ν€μλλ₯Ό ν΅ν μ₯μ κ²μ</li>
              <li>- μ§λμ νμλ κ΄λ ¨ μμ²΄λ€μ νλ¨ λ¦¬μ€νΈλ‘ νμΈ κ°λ₯ </li>
              <li>
                - mapμ μλ markerλ₯Ό λλ₯΄λ©΄ ν΄λΉ μμ²΄μ λν μμΈ λͺ¨λ¬μ°½μ΄ μ΄λ¦Ό
              </li>
            </ul>
          </li>
          <li>
            <h4>3. μ₯μ λΆλ§ν¬</h4>
            <ul className="pl-2">
              <li>- λΆλ§ν¬κ° λ μ λ³΄λ λ©μΈνλ©΄μ λΆλ§ν¬ λ¦¬μ€νΈμ μΆλ ₯ λ¨</li>
              <li>- λͺ¨λ¬μ°½μ μλ λΆλ§ν¬ λ²νΌμ λλ₯΄λ©΄ Bookmarkμ μΆκ° </li>
              <li>- λΆλ§ν¬λ΄μμ ννΈνμλ‘ data μ­μ </li>
            </ul>
          </li>
          <li>
            <h4>4. κ·Έ μΈ</h4>
            <ul className="pl-2">
              <li>- μΈλΆ API μλΉμ€ unsplash μ¬μ©</li>
              <li>
                - kakao μμ μ κ³΅νμ§ μλ μμ²΄ μ΄λ―Έμ§λ₯Ό λ£κΈ°μν΄ λλ€ μ΄λ―Έμ§λ₯Ό
                unsplashμμ κ°μ Έμ΄.{" "}
              </li>
              <li>
                - unsplash μ΄λ―Έμ§ κ²μμ κ΄λ ¨ μ΄λ―Έμ§λ§μ μΆμΆνκΈ° μν΄ κ²μ μ‘°κ±΄
                queryλ₯Ό μ¬μ©('pet', 'food')
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="text-lg mt-4">π server</h3>
        <ul className="content">
          <li>- AWS </li>
          <li>- EC2, S3 μ¬μ©</li>
          <li>- githubμ μ΄μ©ν μλ² λ°°ν¬(μλ λ°°ν¬)</li>
          <li>- pm2λ₯Ό μ΄μ©ν΄μ express μλ² λ°±κ·ΈλΌμ΄λ μ€ν</li>
          <li>- MongoDB ATLAS μ΄μ©</li>
          <li>- JWT ν ν°μ μ΄μ©ν μ¬μ©μ μΈμ¦ μ²λ¦¬</li>
          <li>
            - bcryptλ₯Ό μ΄μ©ν μ¬μ©μ λΉλ°λ²νΈ μνΈν μ²λ¦¬ λ° λΉλ°λ²νΈ μΈμ¦ κ΅¬ν
          </li>
        </ul>
      </div>

      <h2> π STACKSβ¨</h2>

      <div className="content">
        <div className="stack">
          <img src="https://img.shields.io/badge/html-ededed?style=for-the-badge&logo=html5&logoColor=E34F26" />
          <img src="https://img.shields.io/badge/css-ededed?style=for-the-badge&logo=css3&logoColor=1572B6" />
          <img src="https://img.shields.io/badge/javaScript-ededed?style=for-the-badge&logo=javaScript&logoColor=F7DF1E" />
        </div>

        <div className="stack">
          <img src="https://img.shields.io/badge/react-ededed?style=for-the-badge&logo=react&logoColor=61DAFB" />
          <img src="https://img.shields.io/badge/ReactRouter-ededed?style=for-the-badge&logo=ReactRouter&logoColor=CA4245" />
          <img src="https://img.shields.io/badge/recoil-ededed?style=for-the-badge&logo=recoil&logoColor=0075EB" />
        </div>

        <div className="stack">
          <img src="https://img.shields.io/badge/npm-ededed?style=for-the-badge&logo=npm&logoColor=2C8EBB" />
          <img src="https://img.shields.io/badge/Axios-ededed?style=for-the-badge&logo=Axios&logoColor=5A29E4" />
        </div>

        <div className="stack">
          <img src="https://img.shields.io/badge/AWS-ededed?style=for-the-badge&logo=AmazonAWS&logoColor=E34F26" />
          <img src="https://img.shields.io/badge/MongoDB-ededed?style=for-the-badge&logo=MongoDB&logoColor=F7DF1E" />
          <img src="https://img.shields.io/badge/Node.js-ededed?style=for-the-badge&logo=Node.js3&logoColor=1572B6" />
          <img src="https://img.shields.io/badge/Mongoose-ededed?style=for-the-badge&logo=Mongoose&logoColor=F7DF1E" />
        </div>
      </div>
    </div>
  );
}

export default ProjectDesc;
