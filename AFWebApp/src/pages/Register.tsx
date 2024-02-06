import { SyntheticEvent, useState } from "react"
import { Navigate } from "react-router-dom";

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [move, setMove] = useState(false);

    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://127.0.0.1:8000/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, email, password })
        });

        setMove(true);
    }

    if(move) {
        return <Navigate to="/login" />;
    }
    

  return (
        <form onSubmit={handleSubmit}>
            <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h1 className="h3 mb-3 font-weight-normal">Please register</h1>

            <label className="sr-only">Full name</label>
            <input id="inputEmail" className="form-control" placeholder="name" required onChange={e => setName(e.target.value)}/>

            <label className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={e => setEmail(e.target.value)}/>

            <label className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>

            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
    </form>
  )
}