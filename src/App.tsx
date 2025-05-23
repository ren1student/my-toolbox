// 工具箱主界面，展示所有小工具入口
import React from 'react';
import './App.css';
import Calculator from './tools/Calculator';
import Notepad from './tools/Notepad';
import Timer from './tools/Timer';
import UnitConverter from './tools/UnitConverter';
import PasswordGenerator from './tools/PasswordGenerator';
import './tools/Calculator.css';
import './tools/Notepad.css';
import './tools/Timer.css';
import './tools/UnitConverter.css';
import './tools/PasswordGenerator.css';

// 工具分区
const localTools = [
  { name: '计算器', key: 'calculator', component: <Calculator /> },
  { name: '记事本', key: 'notepad', component: <Notepad /> },
  { name: '定时器', key: 'timer', component: <Timer /> },
  { name: '单位换算', key: 'unit', component: <UnitConverter /> },
  { name: '密码生成器', key: 'password', component: <PasswordGenerator /> },
];

const musicVideoTools = [
  { name: 'B站视频下载助手（bilibili.iiilab.com，免费）', url: 'https://bilibili.iiilab.com/' },
];

const imageTools: { name: string; url: string }[] = [
  { name: 'Remove.bg（免费抠图）', url: 'https://www.remove.bg/zh' },
  { name: 'TinyPNG（图片压缩）', url: 'https://tinypng.com/' },
];
const videoAudioTools: { name: string; url: string }[] = [
  { name: '123apps PDF/视频/音频处理（免费）', url: 'https://123apps.com/cn/' },
];
const aiTools: { name: string; url: string }[] = [];

const otherTools = [
  { name: '草料二维码生成', url: 'https://cli.im/' },
  { name: 'Json.cn（JSON格式化）', url: 'https://www.json.cn/' },
  { name: 'Regex101（正则测试）', url: 'https://regex101.com/' },
  { name: 'Dillinger（Markdown编辑）', url: 'https://dillinger.io/' },
  { name: '百度翻译', url: 'https://fanyi.baidu.com/' },
  { name: 'Online Convert（格式转换）', url: 'https://www.online-convert.com/' },
];

const App: React.FC = () => {
  const [active, setActive] = React.useState<string | null>(null);

  return (
    <div className="toolbox-container">
      <h1>我的工具箱</h1>
      <div style={{color:'#52c41a',fontWeight:'bold',marginBottom:16,fontSize:'1.1rem'}}>全部工具均为免费资源，放心使用！</div>
      <h2 style={{marginTop:24,marginBottom:8}}>本地小工具</h2>
      <div className="tools-list">
        {localTools.map(tool => (
          <div className="tool-entry" key={tool.key}>
            <button onClick={() => setActive(tool.key)}>{tool.name}</button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 40 }}>
        {localTools.map(tool => active === tool.key && (
          <div key={tool.key}>{tool.component}</div>
        ))}
      </div>
      <div className="web-tools">
        <h2 style={{marginTop:32,marginBottom:8}}>在线图片工具</h2>
        <div className="web-tools-list">
          {imageTools.map(t => (
            <a key={t.url} href={t.url} target="_blank" rel="noopener noreferrer" className="web-tool-link">{t.name}</a>
          ))}
        </div>
        <h2 style={{marginTop:32,marginBottom:8}}>PDF/视频/音频工具</h2>
        <div className="web-tools-list">
          {videoAudioTools.map(t => (
            <a key={t.url} href={t.url} target="_blank" rel="noopener noreferrer" className="web-tool-link">{t.name}</a>
          ))}
        </div>
        <h2 style={{marginTop:32,marginBottom:8}}>AI工具</h2>
        <div className="web-tools-list">
          {aiTools.map(t => (
            <a key={t.url} href={t.url} target="_blank" rel="noopener noreferrer" className="web-tool-link">{t.name}</a>
          ))}
        </div>
        <h2 style={{marginTop:32,marginBottom:8}}>其他常用工具</h2>
        <div className="web-tools-list">
          {otherTools.map(t => (
            <a key={t.url} href={t.url} target="_blank" rel="noopener noreferrer" className="web-tool-link">{t.name}</a>
          ))}
        </div>
        <h2 style={{marginTop:32,marginBottom:8}}>音乐/视频下载工具</h2>
        <div className="web-tools-list">
          {musicVideoTools.map(t => (
            <a key={t.url} href={t.url} target="_blank" rel="noopener noreferrer" className="web-tool-link">{t.name}</a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
