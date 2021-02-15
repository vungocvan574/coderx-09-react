import React, {Component} from 'react';

class SignInFormGroup extends Component{
    render(){
        return(
            <div class="container-fluid">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="password"></input>
                </div>
                <div class="mb-3">
                    <a class="btn btn-success w-100" href="#" role="button">Sign in to Coders-x</a>
                </div>
                <div class="container">
                    <div class="row justify-content-start">
                    <div class="col-2"></div>
                    <div class="col-8 text-center">
                        <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                        <label class="form-check-label" for="flexCheckDefault">
                            Keep me signed in
                        </label>
                        </div>
                    </div>
                    <div class="col-2"></div>
                    </div>
                    <div class="row justify-content-start">
                    <div class="col text-center">
                        <a className="normal-a" href="#">Forgot username</a>
                    </div>
                    <div class="col text-center">
                        <a className="normal-a" href="#">Forgot password</a>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignInFormGroup;