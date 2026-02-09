import musa from "../../assets/images/musa.jpg";
import arafat from "../../assets/images/arafat.jpg";
import mohan from "../../assets/images/ashraf.jpg";
import aditta from "../../assets/images/aditta.jpg";

const Team = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center my-5 col-12">Our Team</h1>
                <div className="col-md-3">
                    <div className="card h-100">
                        <img src={musa} alt="Musa" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Musa</h5>
                            <p className="card-text">Musa is a software engineer with 5 years of experience in web development.</p>
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100">
                        <img src={arafat} alt="Arafat" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Arafat</h5>
                            <p className="card-text">Arafat is a front-end developer with a passion for creating interactive user interfaces.</p>
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100">
                        <img src={mohan} alt="Mohan" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Mohan</h5>
                            <p className="card-text">Mohan is a back-end developer with expertise in server-side technologies.</p>
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card h-100">
                        <img src={aditta} alt="Aditta" className="card-img-top" />
                        <div className="card-body">
                            <h5 className="card-title">Aditta</h5>
                            <p className="card-text">Aditta is a full-stack developer with experience in both front-end and back-end technologies.</p>
                            <button className="btn btn-primary">Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;