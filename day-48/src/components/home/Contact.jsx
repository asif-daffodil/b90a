
const Contact = () => {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center my-5 col-12">Contact Us</h1>
                <div className="col-md-4">
                    <form className="bg-secondary-subtle text-black p-4">
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" id="message" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className="col-md-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3978097144973!2d90.36733127511457!3d23.73318947868216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfbe6c0bab8b%3A0x8784d7f5150e9ae3!2sAsif%20Abir!5e0!3m2!1sen!2sbd!4v1770635784635!5m2!1sen!2sbd" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-md-4">
                    <table className="table table-bordered table-striped">
                        <tbody>
                            <tr>
                                <th scope="row">Email</th>
                                <td>contact@example.com</td>
                            </tr>
                            <tr>
                                <th scope="row">Phone</th>
                                <td>+1234567890</td>
                            </tr>
                            <tr>
                                <th scope="row">Web</th>
                                <td>https://musashop.com</td>
                            </tr>
                            <tr>
                                <th scope="row">Address</th>
                                <td>123 Main Street, City, Country</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Contact;