// import React, { useState, useEffect } from "react";
// import { getPremierLeagueStandings } from "../../services/standingsService";
// import StandingTable from "../../components/Tables/StandingTable";
// import SkeletonStandings from "../../components/Skeletons/Standings";

// const Standings = () => {
//   const [tables, setTables] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const getTable = async () => {
//       const { data: standings } = await getPremierLeagueStandings();
//       setTables(standings);
//       setIsLoading(false);
//     };

//     getTable();
//   }, []);
//   return (
//     <div>
//       {isLoading ? <SkeletonStandings /> : <StandingTable tables={tables} />}
//     </div>
//   );
// };

// export default Standings;
