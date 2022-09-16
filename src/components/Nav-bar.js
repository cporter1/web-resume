import Link from "./Link"

export default function NavBar() {

    function adaptTitleSize() {
        if (window.innerWidth < 620) {
            return 'mobile-title-text'
        }
        else return 'title-text'
    }
    
    if (window.innerWidth > 1150) {
        return (
            <header>
                <ul className="navbar-container">
                    <div className="link-container">
                        <Link href='/'              className='navbar-link-item'>Home        </Link>
                        <Link href='/resume'        className='navbar-link-item'>Resume      </Link>
                        <Link href='/projects'      className='navbar-link-item'>Projects    </Link>
                        <Link href='/contactinfo'   className='navbar-link-item'>Contact Info</Link>
                    </div>

                    <div className="title-container">
                        <div className="title-text">Colin Porter</div>
                    </div>
                </ul>
            </header>
        )
    }
    else {
        return (
            <header>
                <ul className="navbar-container">
                    <div className="dropdown-container">
                        <div className="dropdown-icon"/>
                        <div className="navbar-dropdown">
                            <Link href='/'              className='navbar-drop-item'>Home        </Link>
                            <Link href='/resume'        className='navbar-drop-item'>Resume      </Link>
                            <Link href='/projects'      className='navbar-drop-item'>Projects    </Link>
                            <Link href='/contactinfo'   className='navbar-drop-item'>Contact Info</Link>
                        </div>
                    </div>
                    
                    <div className="title-container">
                        <div className={adaptTitleSize()}>Colin Porter</div>
                    </div>

                </ul>
            </header>
        )
    }
}