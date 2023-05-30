interface ContainerProp {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProp> = ({ children }) => {
  return <div className="md:px-[10.25rem] px-[2.375rem]">{children}</div>;
};

export default Container;
