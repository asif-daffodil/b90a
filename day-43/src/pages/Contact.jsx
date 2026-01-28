import { Helmet } from "react-helmet";
import Contactform from "../components/Contactform";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Contactform />
        </div>
    );
};

export default Contact;