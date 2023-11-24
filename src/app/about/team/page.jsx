// page.js
import React from 'react';
import Hero from '../../../components/Hero'
import Card from '../../../components/Team';
import Teamdata from '../../../textContent/team/team.json';

const Page = () => {
  return (
    <>
      <div>
        <Hero />
        <Card />
      </div>
    </>
  );
};

export default Page;
