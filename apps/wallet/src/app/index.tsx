import { useFocusEffect, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  useFocusEffect(() => {
    // TODO: if accounts exist, go to /wallet
    router.replace('/wallet');
  });

  return null;
}
