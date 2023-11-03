import { useEffect, useState } from 'react';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

interface User {
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  userID: string;
  username: string;
}

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true); // Added loading state

  useEffect(() => {
    const db = getFirestore();
    const usersCollection = collection(db, 'users');

    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      const newUsers = snapshot.docs.map(doc => doc.data() as User);
      setUsers(newUsers);
      setLoading(false); // Set loading to false once data is loaded
    });

    return () => unsubscribe();
  }, []);

  return { users, loading }; // Return both games and loading state
};

export default useUsers;