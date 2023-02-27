export default function Home() {

    if(window.innerWidth > 1050) {
        return (
            <div className="content-container">
                <section className="welcome-container">
                    <div className="text-container">
                        <div className="text">Hello!</div>
                        <br/>
                        <div className="text">My name is Colin and welcome to my website.</div>
                        <br/>
                        <div className="text">I am a full-stack web developer with 4+ years of
                            experience in React, Javascript, Typescript, Nginx, SQL, and AWS EC2, RDS, VPCs, & S3.</div>
                        <br/>
                        <div className="text">I graduated from UC Santa Cruz in 2019 with a Bachelor's Degree in
                            Computer Science.</div>
                        <br/>
                    </div>
                    <div className="picture-container"/>
                </section>
            </div>
        )
    }
    else {
        return (
            <div className="content-container">
                <section className="mobile-welcome-container">
                    <div className="mobile-text-container">
                        <div className="mobile-text">Hello!</div>
                        <br/>
                        <div className="mobile-text">My name is Colin and welcome to my website!</div>
                        <br/>
                        <div className="mobile-text">I am a full-stack web developer with 4+ years of
                        experience in React, Javascript, Typescript, Nginx, SQL, and AWS EC2+Redis.</div>
                        <br/>
                        <div className="mobile-text">I graduated from UC Santa Cruz in 2019 with a Bachelor's Degree in
                            Computer Science.</div>
                    </div>
                    <div className="mobile-picture-container"/>
                </section>
            </div>
        )
    }
}