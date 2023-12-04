import React, {ReactNode, useState} from 'react';
import './App.css';
import UseEffectComponent from './components/UseEffectComponent';
import UseReducerComponent from "./components/UseReducerComponent";
import UseLocalStorageComponent from "./components/useLocalStorageComponent";
import UseCallbackComponent from "./components/UseCallbackComponent";
import UseMemoComponent from "./components/UseMemoComponent";

const Tabs = ({ tabs }: {tabs: Array<{title: string, content: ReactNode}>}) => {
  const [activeTab, setActiveTab] = useState(0);

  const changeTab = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="tabs">
      <div className="tab-buttons">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => changeTab(index)}
            className={index === activeTab ? 'active' : ''}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs[activeTab].content}
      </div>
    </div>
  );
};
function App() {
  const tabs = [
    {
      title: 'UseEffect',
      content: <UseEffectComponent />,
    },
    {
      title: 'UseReducer',
      content: <UseReducerComponent />,
    },
    {
      title: 'UseLocalStorage',
      content: <UseLocalStorageComponent />,
    },
    {
      title: 'UseCallback',
      content: <UseCallbackComponent />,
    },
    {
      title: 'UseMemo',
      content: <UseMemoComponent />,
    },
  ];



  return (
    <div className="App">
      <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
