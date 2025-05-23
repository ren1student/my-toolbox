// 单位换算器组件
import React, { useState } from 'react';
import './UnitConverter.css';

const units = [
  { label: '米', value: 1 },
  { label: '厘米', value: 0.01 },
  { label: '毫米', value: 0.001 },
  { label: '千米', value: 1000 },
];

const UnitConverter: React.FC = () => {
  const [input, setInput] = useState('');
  const [from, setFrom] = useState(1);
  const [to, setTo] = useState(0.01);
  const [result, setResult] = useState('');

  const handleConvert = () => {
    const val = parseFloat(input);
    if (!isNaN(val)) {
      setResult(((val * from) / to).toString());
    } else {
      setResult('');
    }
  };

  return (
    <div className="unit-converter">
      <div className="uc-row">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value.replace(/[^\d.]/g, ''))}
          placeholder="输入数值"
        />
        <select value={from} onChange={e => setFrom(Number(e.target.value))}>
          {units.map(u => <option key={u.label} value={u.value}>{u.label}</option>)}
        </select>
        <span style={{ margin: '0 8px' }}>→</span>
        <select value={to} onChange={e => setTo(Number(e.target.value))}>
          {units.map(u => <option key={u.label} value={u.value}>{u.label}</option>)}
        </select>
      </div>
      <button className="uc-btn" onClick={handleConvert}>换算</button>
      <div className="uc-result">{result && `结果：${result}`}</div>
    </div>
  );
};

export default UnitConverter;
