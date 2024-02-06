import { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [move, setMove] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:8000/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({ email, password })
        });

        setMove(true);
    }

    if(move) {
        return <Navigate to="/" />;
    }

  return (
    <div>
      <div className="text-center">
        <form className="form-signin" onSubmit={submit}>
            <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
            <label className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={e => setEmail(e.target.value)}/>
            <label className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
            <div className="checkbox mb-3">
                <label>
                <input type="checkbox" value="remember-me" /> Remember me
                </label>
            </div>
            <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
            <p className="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>
  </div>
    </div>
  )
}