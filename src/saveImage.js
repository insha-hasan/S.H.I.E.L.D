import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./firebase";

export const uploadImage = async (imageFile) => {
  // Check if image is selected
  if (!imageFile) return;

  try {
    const storageRef = ref(storage, `images/${imageFile.name}`);

    // Upload image
    const uploadTask = uploadBytes(storageRef, imageFile);
    await uploadTask;

    // Get download URL
    const url = await getDownloadURL(storageRef);

    return url;
  } catch (error) {
    console.error(error);
    // Handle error appropriately, e.g., display an error message to the user
  }
};
