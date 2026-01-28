import { Helmet } from "react-helmet";
import Team from "../components/Team";

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About</title>
            </Helmet>
            <Team />
        </div>
    );
};

export default About;