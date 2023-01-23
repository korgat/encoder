import './Tab.scss';

type TProps = {
  text: string;
  active?: boolean;
  className?: string;
  setTabIndex: () => void;
};

const Tab: React.FC<TProps> = ({ text, active = false, className = '', setTabIndex }) => {
  const baseClass = active ? 'window__tabs-tab active ' : 'window__tabs-tab ';

  const tabClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTabIndex();
  };
  return (
    <button className={baseClass + className} onClick={tabClickHandler}>
      {text}
    </button>
  );
};

export default Tab;
