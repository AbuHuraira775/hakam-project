import { Link } from "react-router-dom"
import Footer from "../components/Footer"
import google from '../assets/imgs/template/icons/icon-google.svg'

function Login() {
  return (
    <>
                
                <main className="main">
            <section className="pt-50 pb-50 login-register">
                <div className="container"> 
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                            <div className="text-center">
                                <p className="font-sm text-brand-2">Welcome back! </p>
                                <h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
                                <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                                <button className="btn social-login hover-up mb-20">
                                    <img src={google} alt="jobbox"/>
                                    <strong>Sign in with Google</strong>
                                </button>
                                <div className="divider-text-center">
                                    <span>Or continue with</span>
                                </div>
                            </div>
                            <form className="login-register text-start mt-20" action="#">
                                <div className="form-group">
                                    <label className="form-label" >Username or Email address *</label>
                                    <input className="form-control" id="input-1" type="text" required="" name="fullname" placeholder="Steven Job"/>
                                </div>
                                <div className="form-group">
                                    <label className="form-label" >Password *</label>
                                    <input className="form-control" id="input-4" type="password" required="" name="password" placeholder="************"/>
                                </div>
                                <div className="login_footer form-group d-flex justify-content-between">
                                <label className="cb-container">
                                        <input type="checkbox"/><span className="text-small">Remenber me</span><span className="checkmark"></span>
                                    </label>
                                    <a className="text-muted" href="javascript:void(0)">Forgot Password</a>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">Login</button>
                                </div>
                                <div className="text-muted text-center">Do not have an Account? <Link to='/register'>Register</Link></div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <Footer />
    </>
  )
}

export default Login