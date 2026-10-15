import cn from 'classnames';
import React, { useState } from 'react';

const BtnGroup = () => {
  // BEGIN (write your solution here)
const [activeBtn, setActiveBtn] = useState(null);

  const leftClasses = cn('btn', 'btn-secondary', 'left', {
    active: activeBtn === 'left',
  });

  const rightClasses = cn('btn', 'btn-secondary', 'right', {
    active: activeBtn === 'right',
  });

  return (
    <div className="btn-group" role="group">
      <button
        type="button"
        className={leftClasses}
        onClick={() => setActiveBtn('left')}
      >
        Left
      </button>
      <button
        type="button"
        className={rightClasses}
        onClick={() => setActiveBtn('right')}
      >
        Right
      </button>
    </div>
  );
  // END
};

export default BtnGroup;