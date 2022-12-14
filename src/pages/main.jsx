import React, { useContext } from 'react'
import Experiences from '../components/Experiences'
import Project from '../components/Project'
import { ClockCircleOutlined, EditOutlined } from '@ant-design/icons';
import { Timeline, Tag } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { NavContext } from '../context/navContext'
import profileImg from '../assets/img/profile_color.png'

function Main() {
    const navData = useContext(NavContext)
    return (
        <div className="w-8/12 h-full py-28 mb-28 z-50 m-auto">

            <main className="flex flex-wrap items-start justify-between content-end gap-4 min-h-screen mb-20" ref={navData.whoIam}>
                {/* profile */}
                <div className='flex w-full	white-box grow'>
                    <div className="w-72">
                        <img src={profileImg} alt="" />
                    </div>
                    <div className="w-full text-left ml-12 mt-3">
                        <p className="font-medium text-6xl text-gray-700">LEE DABIN</p>
                        <h2 className="tit border-b-2 mt-6">Channels</h2>
                        <ul className='mt-5'>

                            <li className="mt-2 cursor-pointer">
                                <a href="mailto:mangorovski@gmail.com" target="_blank"><span className="s_tit mr-5">Email</span></a>
                                <span>mangorovski@gmail.com</span>
                            </li>
                            <li className="mt-4 cursor-pointer">
                                <ul className="flex min-w-full gap-x-4	mt-3">
                                    <li>
                                        <a href="https://github.com/dabin-lee" target="_blank"><span className="s_tit">Github</span></a>
                                    </li>

                                    <li>
                                        <a href="https://2mango.tistory.com" target="_blank"><span className="s_tit">Blog</span></a>
                                    </li>

                                    <li>
                                        <a href="https://www.notion.so/488f725816a94e49bf2eefd485d1bdb3" target="_blank"><span className="s_tit">Notion</span></a>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                </div>

                {/* intrudoce */}
                <div className='white-box w-7/12'>
                    <p className="tit mb-4">About me</p>
                    <p>???????????????. ??????????????????.</p>
                    <ul className="mt-3 leading-7">
                        <li>* ????????? ??? ?????? ???????????? ???????????? ?????? ????????????. </li>
                        <li>* ????????? ?????? ????????? ?????????????????? ????????????. </li>
                        <li>* ?????? ???????????? ????????? ???????????? ?????? ??????????????? ??????????????? ????????? ????????????. </li>
                        <li>* ???????????? ???????????? ????????? ?????? ?????? ???????????? ????????????. </li>
                    </ul>
                </div>

                {/* Personal */}
                <div className='white-box grow self-stretch'>
                    <p className="tit border-b-2">Personal</p>
                    <div className="flex">
                        <ul className="mt-4">
                            <li>???? 1991.06.18</li>
                            <li className="mt-2">???? ????????? ????????? ?????????</li>
                            <li className="mt-2">???? ??? ???????????? 3???</li>
                        </ul>
                    </div>
                </div>


                {/* Personal */}
                <div className='white-box grow'>
                    <p className="tit border-b-2">Contact Info</p>
                    <div className="flex">
                        <ul className="mt-4">
                            <li className="mt-2">
                                <span className="s_tit mr-3">email</span>
                                <span>ldabinn@gmail.com</span>
                            </li>
                            <li className="mt-2">
                                <span className="s_tit mr-3">phone</span>
                                <span>010.3088.1818</span>
                            </li>
                        </ul>
                    </div>
                </div>


                {/* ?????? ????????? */}
                <div className='white-box w-2/4	self-stretch'>
                    <p className="tit border-b-2">Keyword</p>
                    <div className="mt-4">
                        <Tag color="magenta">??????????????????</Tag>
                        <Tag color="red">????????????</Tag>
                        <Tag color="volcano">????????????</Tag>
                        <Tag color="orange">?????????</Tag>
                        <Tag color="gold">????????????</Tag>
                        <Tag color="gold">?????????</Tag>
                        <Tag color="geekblue">?????????</Tag>
                        <Tag color="green">????????????</Tag>
                        <Tag color="green">??????</Tag>
                        <Tag color="geekblue">???????????????</Tag>
                    </div>
                </div>

                <div className="flex flex-auto gap-4 self-stretch">
                    <div className="grow">
                        {/* Education */}
                        <div className='white-box'>
                            <p className="tit border-b-2">Education</p>
                            <ul className="mt-4 leading-7">
                                <li>??????????????? ????????????????????? ????????????</li>
                                <li>??????/ ????????? ???????????? ?????? ???<EditOutlined className="align-baseline ml-1" /></li>
                            </ul>
                        </div>

                        {/* License */}
                        <div className='white-box mt-4'>
                            <p className="tit border-b-2">License</p>
                            <div className="mt-5">
                                <ul className="mt-3 leading-7">
                                    <li>GTQ 1??? / ??? ????????? ?????????</li>
                                    <li>JLPT(Japanese-Language Test) 2, 3???</li>
                                </ul>
                            </div>
                        </div>

                        {/* stack */}
                        <div className='bg-white p-6 mt-4'>
                            <p className="tit border-b-2">???? Stack</p>
                            <div className="mt-3">
                                <div className="stack">
                                    <p><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="" /></p>
                                    <p><img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="" /></p>
                                    <p><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="" /></p>
                                    <p><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="" /></p>
                                    <p><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="" /></p>
                                </div>
                                <div className="mt-4">
                                    <p>?????? & ??????</p>
                                    <div className="stack">
                                        <p><img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="" /></p>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <p>Group</p>
                                    <div className="stack">
                                        <p><img src="https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Sketch-FFB387?style=for-the-badge&logo=sketch&logoColor=black" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/Notion-1877F2?style=for-the-badge&logo=notion&logoColor=white" alt="" /></p>
                                        <p><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="" /></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experiences */}
                    <div className='bg-white p-6 w-3/5	'>

                        <p className="tit border-b-2">Experiences</p>
                        <div className="mt-8">

                            <Timeline mode="alternate">
                                <Timeline.Item color="gray">2013. - 2017 <br />????????? ????????? ?????? <br />??? ????????? ??????</Timeline.Item>
                                <Timeline.Item color="gray">2017. - 2018 <br />?????? ????????? ??????</Timeline.Item>
                                <Timeline.Item color="gray">2018.06 - 2019.06 <br />???????????? ????????? ???????????? <br /> ?????? ?????? ??????</Timeline.Item>
                                {/* <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    ????????? ???????????? ???????????? ???????????? ????????? ???????????? ??????????????? ?????? ??????
                                </Timeline.Item> */}


                                {/* <Timeline.Item>2019.04 - 2019.11 <br />UX/UI ?????? ??????</Timeline.Item>
                                <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    ???????????? ????????? ??????????????? ?????? ???????????? ?????? HTML, CSS3, javascript??????, jqeury ????????? ??????
                                </Timeline.Item> */}

                                <Timeline.Item color="gray">2019.12 - 2022.08<br /> (???) ?????????????????? ?????? <br />UX?????? ??? ???????????? ??????<br />KB???????????? ????????? ?????? ??????</Timeline.Item>
                                {/* <Timeline.Item>UX?????? ??? ???????????? ??????</Timeline.Item> */}
                                {/* <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                UX?????? ??? ????????????<br />
                                    ?????? ???????????? ?????????, ?????? ????????? ??????, ??? ???????????? ??? ?????? ?????? ??????
                                </Timeline.Item> */}

                                {/* <Timeline.Item color="orange">2020.12 - 2022.08<br />KB???????????? ????????? ?????? ??????</Timeline.Item> */}
                                {/* <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                                    ???????????? ????????? ?????? ??? ????????????, ????????????
                                </Timeline.Item> */}
                                <Timeline.Item color="gray">2022.08.10 <br /> (???) ?????????????????? ??????</Timeline.Item>
                            </Timeline>
                        </div>
                    </div>
                </div>



            </main >

            <Experiences />
            <Project />

            <Footer />
        </div >
    )
}

export default Main