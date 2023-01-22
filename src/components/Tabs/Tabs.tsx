import Tab from './Tab';

const tabs: Array<string> = ['Encode', 'Decode'];

type TProps = {
  tabIndex: number;
  setTabIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Tabs: React.FC<TProps> = ({ tabIndex, setTabIndex }) => {
  return (
    <div className="window__tabs">
      {tabs.map((item, i) => (
        <Tab
          key={item}
          active={tabIndex === i}
          text={item}
          setTabIndex={setTabIndex.bind(null, i)}
        />
      ))}
    </div>
  );
};

export default Tabs;
