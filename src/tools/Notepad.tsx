// 记事本组件
import React, { useState } from 'react';
import './Notepad.css';

const Notepad: React.FC = () => {
  const [text, setText] = useState('');

  return (
    <div className="notepad">
      <textarea
        className="notepad-area"
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="在这里输入你的笔记..."
      />
    </div>
  );
};

export default Notepad;
