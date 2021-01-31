import { FC } from 'react';

const Avatar: FC = ({ children }) => {
  return (
    <div className="flex-center rounded-full h-24 w-24 m-4 bg-blue-400  border border-dashed border-blue-800">
      {children}
    </div>
  );
};

export default Avatar;
