import Link from "./Link"

export default function NavBar() {

    function adaptTextSize() {
        if (window.innerWidth < 600) {
            return 'mobile-socials-label'
        }
        else return 'socials-label'
    }
    function adaptMobile() {
        if (window.innerWidth < 600) {
            return 'mobile-'
        }
        else return ''
    }
    
    if (window.innerWidth > 1150) {
        return (
            <header>
                <ul className="navbar-container">
                    <div className="link-container">
                        <Link href='/'              className='navbar-link-item'>Home        </Link>
                        <Link href='/resume'        className='navbar-link-item'>Resume      </Link>
                        <Link href='/contactinfo'   className='navbar-link-item'>Contact Info</Link>
                    </div>
                    <div className="personals-container">
                        <div className="title-container">
                            <div className="title-text">Colin Porter</div>
                        </div>
                        <div className="socials-container">
                            <a className="socials-wrapper" href='https://github.com/cporter1' target='_blank' rel="noreferrer">
                                <div className="github-icon"/>
                                <div className="socials-label" style={{display:'flex'}}>
                                    github.com/cporter1
                                </div>
                            </a>
                            <a className="socials-wrapper" href='https://linkedin.com/in/colin-porter-44a025174'
                                target='_blank' rel="noreferrer">
                                <div className="linkedin-icon"/>
                                <div className="socials-label" style={{display:'flex'}}>
                                    linkedin.com/colin-porter
                                </div>
                            </a>
                        </div>
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
                            <Link href='/contactinfo'   className='navbar-drop-item'>Contact Info</Link>
                        </div>
                    </div>

                    <div className="personals-container">
                        <div className="title-container">
                            <div className="title-text">Colin Porter</div>
                        </div>
                        <div className="socials-container">
                            <a className="socials-wrapper" href='https://github.com/cporter1' target='_blank'
                                rel="noreferrer">
                                <div className={adaptMobile() + "github-icon"}/>
                                <div className={adaptTextSize()} style={{display:'flex'}}>
                                    github.com/cporter1
                                </div>
                            </a>
                            <a className="socials-wrapper" href='https://linkedin.com/in/colin-porter-44a025174'
                                target='_blank' rel="noreferrer">
                                <div className={adaptMobile() + "linkedin-icon"}/>
                                <div className={adaptTextSize()} style={{display:'flex'}}>
                                    linkedin.com/colin-porter
                                </div>
                            </a>
                        </div>
                    </div>
                </ul>
            </header>
        )
    }
}