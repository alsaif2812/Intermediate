import React from 'react';
import Image from 'next/image';
import img from '../../../../public/images/300x300.png';
const TeamPage = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <Card
        name="John Doe"
        position="CEO"
        photo={img}
      />
      <Card
        name="Jane Smith"
        position="CTO"
        photo={img}
      />
      <Card
        name="Michael Johnson"
        position="Lead Developer"
        photo={img}
      />
      <Card
        name="Emily Davis"
        position="Designer"
        photo={img}
      />
      <Card
        name="David Wilson"
        position="Marketing Manager"
        photo={img}
      />
      <Card
        name="John Doe"
        position="CEO"
        photo={img}
      />
      <Card
        name="Jane Smith"
        position="CTO"
        photo={img}
      />
      <Card
        name="Michael Johnson"
        position="Lead Developer"
        photo={img}
      />
      <Card
        name="Emily Davis"
        position="Designer"
        photo={img}
      />
      <Card
        name="David Wilson"
        position="Marketing Manager"
        photo={img}
      />
      <Card
        name="John Doe"
        position="CEO"
        photo={img}
      />
      <Card
        name="Jane Smith"
        position="CTO"
        photo={img}
      />
      <Card
        name="Michael Johnson"
        position="Lead Developer"
        photo={img}
      />
      <Card
        name="Emily Davis"
        position="Designer"
        photo={img}
      />
      <Card
        name="David Wilson"
        position="Marketing Manager"
        photo={img}
      />
      <Card
        name="John Doe"
        position="CEO"
        photo={img}
      />
      <Card
        name="Jane Smith"
        position="CTO"
        photo={img}
      />
      <Card
        name="Michael Johnson"
        position="Lead Developer"
        photo={img}
      />
      <Card
        name="Emily Davis"
        position="Designer"
        photo={img}
      />
      <Card
        name="David Wilson"
        position="Marketing Manager"
        photo={img}
      />
      <Card
        name="Jane Smith"
        position="CTO"
        photo={img}
      />
      <Card
        name="Michael Johnson"
        position="Lead Developer"
        photo={img}
      />
    
     
    </div>
  );
};

const Card = ({ name, position, photo }) => {
  return (
    <div className="bg-gray-100 rounded-lg shadow-lg p-4 m-4 w-full md:w-64 mb-10">
    <Image src={photo} alt={name} height={100} width={1000} className="w-full h-64 object-cover rounded-t-lg md:rounded-t-none md:rounded-l-lg" />
    <div className="mt-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-500">{position}</p>
    </div>
  </div>
  
  );
};

export default TeamPage;
