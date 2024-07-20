import React from 'react';

const getPredictedAge = async (name: string) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`);
  return res.json();
};

const getPredicatedGender = async (name: string) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`);
  return res.json();
};

const getPredicatedNationality = async (name: string) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`);
  return res.json();
};

interface Params {
  params: { name: string };
}

const Prediction = async ({ params }: Params) => {
  const ageDataPromise = getPredictedAge(params.name);
  const nationalityDataPromise = getPredicatedNationality(params.name);
  const genderDataPromise = getPredicatedGender(params.name);

  const [ageData, nationalityData, genderData] = await Promise.all([
    ageDataPromise,
    nationalityDataPromise,
    genderDataPromise,
  ]);

  const country = nationalityData?.country?.[0]?.country_id || 'Unknown';
  const gender = genderData?.gender || 'Unknown';

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ padding: '20px', backgroundColor: 'white', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)', maxWidth: '400px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>{params.name}</h1>
        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ color: '#666', margin: '5px 0' }}>Age: <span style={{ color: '#333' }}>{ageData?.age}</span></h3>
          <h3 style={{ color: '#666', margin: '5px 0' }}>Country: <span style={{ color: '#333' }}>{country}</span></h3>
          <h3 style={{ color: '#666', margin: '5px 0' }}>Gender: <span style={{ color: '#333' }}>{gender}</span></h3>
        </div>
      </div>
    </div>
  );
};

export default Prediction;
