import "../componentsCSS/landing.css";
import womenImg from "../images/woman_hero.png";

function Landing() {
    return (
        <div className="landing">
            <div className="container">
                <div className="text">
                    <span className="trend">new trend</span>
                    <h1>
                        autumn sale stylish <span>womens</span>
                    </h1>
                    <span className="more">discover more</span>
                </div>
                <img src={womenImg} alt="" className="d-none" />
            </div>
        </div>
    );
}

export default Landing;
