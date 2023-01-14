import React, { useState } from 'react';

export const errorContext = React.createContext<any>(null)

export default function ErrorContext({children}:{children:React.ReactElement}) {
    const [error, setError] = useState<boolean>(false)
  return (
    <errorContext.Provider value={{error, setError}}>
        {children}
    </errorContext.Provider>
  )
}
