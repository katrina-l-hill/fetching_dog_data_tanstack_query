import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { useState } from 'react';
import BreedDetails from '@/components/BreedDetails';
import DogBreeds from '@/components/DogBreeds';
import DogFacts from '@/components/DogFacts';
import DogGroups from '@/components/DogGroups';

import ParallaxScrollView from '@/components/ParallaxScrollView';

const queryClient = new QueryClient();

export default function HomeScreen() {
  const [selectedBreedId, setSelectedBreedId] = useState<string | null>(null);
  return (
    <QueryClientProvider client={queryClient}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
        headerImage={
          <Image
            source={require('@/assets/images/partial-react-logo.png')}
            style={styles.reactLogo}
          />
        }>
        <BreedDetails breedId={selectedBreedId}/>
        <DogBreeds onSelectBreed={setSelectedBreedId}/>
        <DogFacts />
        <DogGroups />
      </ParallaxScrollView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
