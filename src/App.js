import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="App">
        <video className="bg-video" playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"><source src="./external/assets/mp4/bg.mp4" type="video/mp4" /></video>       
        <div className="masthead">
            <div className="masthead-content text-white">
                <div className="container-fluid px-4 px-lg-0">
                    <h1 className="fst-italic lh-1 mb-4">Our Website is Coming Soon</h1>
                    <p className="mb-5">We're working hard to finish the development of this site. Sign up below to receive updates and to be notified when we launch!</p>
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row input-group-newsletter">
                            <div className="col"><input class="form-control" id="email" type="email" placeholder="Enter email address..." aria-label="Enter email address..." data-sb-validations="required,email" /></div>
                            <div className="col-auto">
                                <Button class="btn btn-primary disabled" id="submitButton" type="submit">Notify Me!</Button>
                            </div>
                        </div>
                        <div className="invalid-feedback mt-2" data-sb-feedback="email:required">An email is required.</div>
                        <div className="invalid-feedback mt-2" data-sb-feedback="email:email">Email is not valid.</div>
                        <div className="d-none" id="submitSuccessMessage">
                            <div class="text-center mb-3 mt-2">
                                <div class="fw-bolder">Form submission successful!</div>
                            </div>
                        </div>
                        <div className="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3 mt-2">Error sending message!</div></div>
                    </form>
                </div>
            </div>
        </div>

        <div className="social-icons">
            <div className="d-flex flex-row flex-lg-column justify-content-center align-items-center h-100 mt-3 mt-lg-0">
                <a className="btn btn-dark m-3" href="#!"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-dark m-3" href="#!"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-dark m-3" href="#!"><i className="fab fa-instagram"></i></a>
            </div>
        </div>
    </div>
  );
}

export default App;
