// 计算器组件
import React, { useState } from 'react';
import './Calculator.css';

const Calculator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value: string) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
    setResult('');
  };

  const handleEqual = () => {
    try {
      // eslint-disable-next-line no-eval
      const evalResult = eval(input);
      setResult(evalResult);
    } catch {
      setResult('错误');
    }
  };

  return (
    <div className="calculator">
      <div className="calc-display">
        <div className="calc-input">{input}</div>
        <div className="calc-result">{result}</div>
      </div>
      <div className="calc-buttons">
        {["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map((v) => (
          v === '=' ? (
            <button key={v} onClick={handleEqual}>=</button>
          ) : (
            <button key={v} onClick={() => handleClick(v)}>{v}</button>
          )
        ))}
        <button className="clear" onClick={handleClear}>C</button>
      </div>
    </div>
  );
};

export default Calculator;
