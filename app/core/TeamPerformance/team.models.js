export const modelingTeamPerformance = ({ data }) => {
  const gifts = data.map(
    ({
      id, name,
    }) => ({
      id,
      name,
    })
  );
  return {
    gifts,
  };
};
