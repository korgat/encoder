import './MainWrapper.scss';

type Props = {
  children?: React.ReactNode;
};

const MainWrapper: React.FC<Props> = (props) => {
  return (
    <main>
      <div className="container">{props.children}</div>
    </main>
  );
};

export default MainWrapper;
