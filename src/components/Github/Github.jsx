// Github component

import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github
      <img id='img' src={data.avatar_url} alt="profile" />
      <h2> {data.login}</h2>
      <p>{data.bio}</p>
      <p>{data.location}</p>
    </div>
  );
}

export default Github;

export const githubInfo = async () => {
  const response = await fetch('https://api.github.com/users/bharatkabir');
  const data = await response.json();
  return data;
};
