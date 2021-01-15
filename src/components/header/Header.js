export default function Header() {

    return (
        <>

            <div className="header">
                <div className="header_info">
                    <div className="info_items">
                        <div><a href="#" className="btn">ДЛЯ ДОМУ</a></div>
                        <div><a href="#" className="btn">ДЛЯ БІЗНЕСУ</a></div>
                    </div>
                    <div className="">
                        <a href="tel:+380970000000" className="btn">+380 97 00 00 000</a>
                    </div>
                </div>

                <div className="nav_section">

                    <div className="logo"> THIS IS LOGO</div>
                    <div className="navbar">

                        <div className="nav_menu">
                            <div className="dropdown">
                                <button className="dropbtn">ПРИБИРАННЯ
                                </button>
                                <div className="dropdown-content">
                                    <a href="#SupCl">- планове прибирання</a>
                                    <a href="#">- генеральне прибирання</a>
                                    <a href="#">- після ремонту</a>
                                    <a href="#">- дизінфекція</a>
                                    <a href="#">- експрес прибирання</a>
                                </div>
                            </div>

                            <a href="/DryCleaner">ХІМЧИСТКА</a>
                            <a href="/">МИЙКА ВІКОН</a>
                            <a href="/">БЛОГ</a>

                        </div>

                    </div>
                    <div className="nav_item">
                        <a href="tel:+380970000000" className="btn">ВИКЛИКАТИ НАС</a>
                    </div>
                </div>
            </div>

        </>
    )

}