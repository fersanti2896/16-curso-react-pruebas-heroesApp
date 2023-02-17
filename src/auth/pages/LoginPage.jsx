import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context';

export const LoginPage = () => {
    const { login } = useContext( AuthContext );
    const navigate = useNavigate();

    const onLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/'

        login('Fer Santi');

        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <>
            <div className='container mt-5'>
                <h1>Login Page</h1>
                <hr/>
            
                <button className="btn btn-outline-success"
                        onClick={ onLogin }>
                    Login
                </button>
            </div>
        </>
    )
}
