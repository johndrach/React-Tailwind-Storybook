import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

const Tabs = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="w-80 mx-auto my-8 font-sans">
      <div className="flex border-b-2 border-gray-200">
        <button
          className={`flex-1 py-2 px-4 focus:outline-none transition-colors duration-200 ${active === 0 ? 'bg-purple-600 text-white border-b-2 border-purple-600' : 'bg-white text-gray-800 border-b-2 border-transparent'}`}
          onClick={() => setActive(0)}
        >
          Tab 1
        </button>
        <button
          className={`flex-1 py-2 px-4 focus:outline-none transition-colors duration-200 ${active === 1 ? 'bg-purple-600 text-white border-b-2 border-purple-600' : 'bg-white text-gray-800 border-b-2 border-transparent'}`}
          onClick={() => setActive(1)}
        >
          Tab 2
        </button>
      </div>
      <div className="p-4 bg-gray-50 min-h-20">
        {active === 0 ? 'Content for Tab 1' : 'Content for Tab 2'}
      </div>
    </div>
  );
};

const meta: Meta<typeof Tabs> = {
  title: 'Example/Tabs',
  component: Tabs,
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {}; 