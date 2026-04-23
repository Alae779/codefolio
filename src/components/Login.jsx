const styles = `
  * { box-sizing: border-box; margin: 0; padding: 0; }

  .login-root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f4f0;
    font-family: sans-serif;
  }

  .login-card {
    background: #fff;
    border: 1.5px solid #e0ddd6;
    border-radius: 4px;
    padding: 40px 36px;
    width: 100%;
    max-width: 360px;
  }

  .login-title {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 24px;
  }

  .field { margin-bottom: 14px; }

  .field label {
    display: block;
    font-size: 12px;
    font-weight: 500;
    color: #666;
    margin-bottom: 5px;
  }

  .field input {
    width: 100%;
    padding: 10px 12px;
    border: 1.5px solid #e0ddd6;
    border-radius: 3px;
    font-size: 14px;
    color: #1a1a1a;
    outline: none;
  }

  .login-btn {
    width: 100%;
    padding: 11px;
    margin-top: 6px;
    background: #1a1a1a;
    color: #fff;
    border: none;
    border-radius: 3px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
  }
`;

export default function Login() {
  return (
    <>
      <style>{styles}</style>
      <div className="login-root">
        <div className="login-card">
          <div className="login-title">Sign in</div>

          <div className="field">
            <label>Email</label>
            <input type="email" placeholder="you@example.com" />
          </div>

          <div className="field">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button className="login-btn">Sign In</button>
        </div>
      </div>
    </>
  );
}