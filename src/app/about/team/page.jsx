import React from 'react';

const TeamPage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Card
        name="John Doe"
        position="CEO"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Jane Smith"
        position="CTO"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Michael Johnson"
        position="Lead Developer"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Emily Davis"
        position="Designer"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="David Wilson"
        position="Marketing Manager"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="John Doe"
        position="CEO"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Jane Smith"
        position="CTO"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Michael Johnson"
        position="Lead Developer"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Emily Davis"
        position="Designer"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="David Wilson"
        position="Marketing Manager"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="John Doe"
        position="CEO"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Jane Smith"
        position="CTO"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Michael Johnson"
        position="Lead Developer"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Emily Davis"
        position="Designer"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="David Wilson"
        position="Marketing Manager"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="John Doe"
        position="CEO"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Jane Smith"
        position="CTO"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Michael Johnson"
        position="Lead Developer"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Emily Davis"
        position="Designer"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="David Wilson"
        position="Marketing Manager"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Jane Smith"
        position="CTO"
        photo="https://dummyimage.com/300x300"
      />
      <Card
        name="Michael Johnson"
        position="Lead Developer"
        photo="https://dummyimage.com/300x300"
      />
    
     
    </div>
  );
};

const Card = ({ name, position, photo }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 m-4 w-full md:w-64 mb-10">
    <img src={photo} alt={name} className="w-full h-64 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
    <div className="mt-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{position}</p>
    </div>
  </div>
  
  );
};

export default TeamPage;
