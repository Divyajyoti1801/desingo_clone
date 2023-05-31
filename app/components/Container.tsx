interface ContainerProp {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProp> = ({ children }) => {
  return (
    <div className="px-0 lg:px-[10.25rem] md:px-[2.375rem]">{children}</div>
  );
};

export default Container;
