import "./Footer.css"

const Footer = () => {
    return <footer className="footer" style={{backgroundImage: "url(/img/Footer.png) "}}>
                <div className="redes" >
                    <a href="https://github.com/KaozD" >
                        <img src="/img/twitter.png" alt="Twitter" />
                    </a>
                    <a href="https://github.com/KaozD" >
                        <img src="/img/facebook.png" alt="Facebook" />
                    </a>
                    <a href="https://github.com/KaozD" >
                        <img src="/img/instagram.png" alt="Instagram" />
                    </a>
                </div>
                <img src="/img/Logo.png" alt="Logo"/>
                <strong>Desarrollado por KaozDev</strong>
            </footer>
}

export default Footer