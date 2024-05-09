import { collection, getDocs, query, where, addDoc } from "firebase/firestore";
import { db } from "./firebase";
export async function createUser(data) {
  data.city = "";
  data.state = "";
  data.country = "";
  const email = data.email; // Extract email from data
  const collectionRef = collection(db, "users");

  try {
    const q = query(collectionRef, where("email", "==", email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      // Document doesn't exist, add new data
      await addDoc(collectionRef, data);
      console.log("Data with email:", email, "added successfully");
    } else {
      // Document exists, handle existing data
      console.log("Data with email:", email, "already exists");
      // You can access the data using querySnapshot.docs[0].data()
    }
  } catch (error) {
    console.error("Error checking or adding data:", error);
  }
}
