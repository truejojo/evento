type ContainerProps = {
  children: React.ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className='container mx-auto min-h-screen bg-gray-900'>{children}</div>
  );
};

export default Container;
