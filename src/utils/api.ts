export const getClinicDetails = async () => {
  // example: fetch from AppSync or your API Gateway
  const response = await fetch('https://your-api-endpoint.com/clinic/me', {
    headers: {
      Authorization: `Bearer ${yourToken}`,
    },
  });
  return await response.json();
};
