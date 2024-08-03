import "./PlansScreen.css";

export default function PlansScreen() {
    
    return(
        <div className="plansScreen">
            <div className="plansScreen_plan">
                <div className="plansScreen_info">
                    <div className="plansScreen_description">
                        <h5>Premium</h5>
                        <h6>4K +HDR</h6>
                    </div>
                    <div className="plansScreen_description">
                        <h5>Standard</h5>
                        <h6>1080p</h6>
                    </div>
                    <div className="plansScreen_description">
                        <h5>Basic</h5>
                        <h6>720p</h6>
                    </div>
                </div>
                <div className="plansScreen_buttons">
                    <button className="plansScreen_button">Subscribe</button>
                    <button className="plansScreen_button">Subscribe</button>
                    <button className="plansScreen_button">Subscribe</button>
                </div>
            </div>
        </div>
    )
}