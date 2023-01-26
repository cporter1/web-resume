

export default function ContactInfo() {

    if (window.innerWidth > 730) {
        return (
            <section className="content-container">
                <ul className="info-list-container">
                    <div className="info-item">
                        <div className="email-icon"/>
                        <span className="text" style={{display:'flex'}}>colinarthurporter@gmail.com</span>
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
                </ul>
            </section>
        )
    }
}