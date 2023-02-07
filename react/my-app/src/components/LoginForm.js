import "./LoginForm.css";

export function LoginForm() {
    return (
    <form className="LoginForm">
        <label>Email</label>
        <input type="email" name="email" />
        <label>Paswoord</label>
        <input type="paswoord" name="paswoord" />
        <div className="LoginFormBotton">
            <div className="RememberContainer">
            <input type="checkbox" name="remember" />
            <label>Remember me</label> 
            </div>
            <a href="/#">Forgot Password?</a>
        </div>
    </form>
    );
}