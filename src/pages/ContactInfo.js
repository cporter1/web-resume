

export default function ContactInfo() {

    if (window.innerWidth > 730) {
        return (
            <section className="content-container">
                <ul className="info-list-container">
                    <div className="info-item">
                        <div className="email-icon"/>
                        <span className="text" style={{display:'flex'}}>colinarthurporter@gmail.com</span>
                    </div>
                    <div className="info-item">
                        <div className="github-icon"/>
                        <a className="text" style={{display:'flex'}}
                            href='https://github.com/cporter1' target='_blank'>
                            github.com/cporter1</a>
                    </div>
                    <div className="info-item">
                        <div className="linkedin-icon"/>
                        <a className="text" style={{display:'flex'}}
                            href='https://linkedin.com/in/colin-porter-44a025174'
                            target='_blanks'>
                            linkedin.com/in/colin-porter...</a>
                    </div>
                </ul>
            </section>
        )
    }
    else {
        return (
            <section className="content-container">
                <ul className="info-list-container">
                    <div className="mobile-info-item">
                        <div className="mobile-email-icon"/>
                        <span className="mobile-text" style={{display:'flex'}}>colinarthurporter@gmail.com</span>
                    </div>
                    <div className="mobile-info-item">
                        <div className="github-icon"/>
                        <a className="mobile-text" style={{display:'flex'}}
                            href='https://github.com/cporter1' target='_blank'>
                            github.com/cporter1</a>
                    </div>
                    <div className="mobile-info-item">
                        <div className="linkedin-icon"/>
                        <a className="mobile-text" style={{display:'flex'}}
                            href='https://linkedin.com/in/colin-porter-44a025174'
                            target='_blanks'>
                            linkedin.com/in/colin-porter...</a>
                    </div>
                </ul>
            </section>
        )
    }
}