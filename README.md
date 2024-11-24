# Movie app 👋

## Instalaciones:

- Documentacion: https://tanstack.com

`yarn add @tanstack/react-query`

- Configuracion en el root de la aplicacion que es e; `_layout.tsx`, agregamos lo siguiente:

```tsx
import { View, Text } from 'react-native'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import React from 'react'

import '../global.css';

const RootLayout = () => {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <View>
        <Text className='text-3xl'>RootLayout</Text>
      </View>
    </QueryClientProvider>

  )
}

export default RootLayout;

```
