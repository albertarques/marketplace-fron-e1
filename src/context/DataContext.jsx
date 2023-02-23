import React, { createContext, useState, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      async function fetchData() {
        try {
          const response = await fetch(
            "https://visualside-back-production.up.railway.app/api/jobs"
            // "http://localhost/Lo-tienes-CRUDo/src/database/api/read_z_to_a.php"
          );
          if (response.status === 200) {
            const data = await response.json();
            setData(data);
            setIsLoading(false);
          } else {
            alert("Hubo un problema de conexion.");
          }
        } catch {
          alert("No pudimos hacer la solicitud.");
        }
      }
      fetchData();
    }
  }, [isLoading]);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
