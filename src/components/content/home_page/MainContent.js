import {useRef, useState} from "react";

export default function MainContent() {

    const [v1, setV1] = useState(350)
    const [v2, setV2] = useState(0)

    return (
        <>

            <div className="content">
                <div className="section">
                    <div className="main_section">
                        <h1>ПростоЧисто</h1>
                        <h2>Замовьте якісне прибирання квартири або будинку <br/>у Львові та
                            Львівській області</h2>
                    </div>

                    <div className="calc_section">


                        <form action="" className="calc_form">


                            {/*<select name="111" id="selectSelector" onChange={e => setV1(parseInt(e.target.value))}>*/}
                            {/*    <option value={350}>1 - ком</option>*/}
                            {/*    <option value={700}>2 - ком</option>*/}
                            {/*</select>*/}


                            <select name="111" id="select1" onChange={e => setV1(parseInt(e.target.value))}>
                                <option value={350}>1 - ком</option>
                                <option value={500}>2 - ком</option>
                                <option value={650}>3 - ком</option>
                                <option value={800}>4 - ком</option>
                                <option value={900}>5 - ком</option>
                            </select>


                            <select name="222" id="select2" onChange={e => setV2(parseInt(e.target.value))}>
                                <option value={150}>1 - санвузол</option>
                                <option value={300}>2 - санвузол</option>
                                <option value={450}>3 - санвузол</option>
                            </select>


                            <div>вартість {v1 + v2} грн</div>


                        </form>
                    </div>

                </div>


                <div className="section">

                    <div className="clean_info">

                        <div className="clean_info_title">
                            <h3> - ПЛАНОВЕ ПРИБИРАННЯ (ПІДТРИМУЮЧЕ) - </h3>
                        </div>

                        <div className="clean_info_text">
                            <p>- Сухе та вологе прибирання підлоги, стіни та доступних поверхонь;</p>
                            <p>- Миття душовиї та ванної;</p>
                            <p>- Поверхневе миття кухонної та побутової техніки;</p>
                            <p>- Чистка сантехніки;</p>
                        </div>

                        <div className="clean_info_btn"><a href="/SupCleaning" className="btn">Детальніше</a></div>
                    </div>


                    <div className="clean_info">

                        <div className="clean_info_title">
                            <h3 id="SupCl"> - ГЕНЕРАЛЬНЕ ПРИБИРАННЯ - </h3>
                        </div>

                        <div className="clean_info_text">
                            <p>- Вологе приберання підлоги, стін, вікон;</p>
                            <p>- Видалення застрарілих плям любого походженя на всіх поверхнях;</p>
                            <p>- Мийка та дизінфекція санвузла;</p>
                            <p>- Очиска освітлювалювальних та опалювальних предметів;</p>
                            <p>- Прибирання лоджій та балконів.</p>

                        </div>

                        <div className="clean_info_btn"><a href="/SupCleaning" className="btn">Детальніше</a></div>

                    </div>


                    <div className="clean_info">

                        <div className="clean_info_title">
                            <h3> - ПРИБИРАННЯ ПІСЛЯ РЕМОНТУ - </h3>
                        </div>

                        <div className="clean_info_text">
                            <p>- Видалення будівельної пилюки зі всіх поверхонь;</p>
                            <p>- Видалення залишків будівельних матеріалів зі всіх поверхонь;</p>
                            <p>- Вивіз будівельного сміття;</p>
                            <p>- Миття та поліровка вікон з відкосами;</p>

                        </div>

                        <div className="clean_info_btn"><a href="" className="btn">Детальніше</a></div>

                    </div>


                </div>
            </div>

        </>
    )
}