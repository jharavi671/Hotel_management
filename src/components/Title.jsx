import React, { useEffect, useState } from 'react';

const Title = ({ title, subTitle, align = 'center', font }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + subTitle.charAt(i));
      i++;
      if (i >= subTitle.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [subTitle]);

  const alignmentClass = {
    center: 'items-center text-center',
    left: 'items-start text-left',
    right: 'items-end text-right',
  }[align];

  return (
    <div className={`flex flex-col px-6 md:px-16 lg:px-24 py-8 ${alignmentClass}`}>
      <h1 className={`text-4xl md:text-[40px] ${font || 'font-playfair'} text-black`}>
        {title}
      </h1>
      <p className="text-sm md:text-base text-gray-500 mt-2 max-w-xl whitespace-pre-line">
        {displayedText}
      </p>
    </div>
  );
};

export default Title;
