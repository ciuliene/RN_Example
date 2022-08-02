import React, {useState, useEffect} from 'react';

type AppContextProps = {
  isLoading: boolean;
};

export const AppContext = React.createContext({} as AppContextProps);

type ProviderProps = {
  children: React.ReactNode;
};

export const AppProvider: React.FC<ProviderProps> = props => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadDefaultContext();
  }, []);

  const loadDefaultContext = async () => {
    setIsLoading(true);
    setInterval(() => {
      setIsLoading(false);
    }, 3000);
  };

  const value = {
    isLoading,
  };

  return <AppContext.Provider value={value} {...props} />;
};
