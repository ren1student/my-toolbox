// 随机密码生成器组件
import React, { useState } from 'react';
import './PasswordGenerator.css';

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

const PasswordGenerator: React.FC = () => {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState('');

  const generate = () => {
    let pwd = '';
    for (let i = 0; i < length; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(pwd);
  };

  return (
    <div className="password-generator">
      <div style={{ marginBottom: 12 }}>
        <label>密码长度：</label>
        <input
          type="number"
          min={4}
          max={32}
          value={length}
          onChange={e => setLength(Number(e.target.value))}
          style={{ width: 60, marginLeft: 8 }}
        />
      </div>
      <button className="pg-btn" onClick={generate}>生成密码</button>
      <div className="pg-result">{password && `结果：${password}`}</div>
    </div>
  );
};

export default PasswordGenerator;
