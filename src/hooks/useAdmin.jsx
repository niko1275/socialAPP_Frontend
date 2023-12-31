
import { useSelector } from "react-redux";

const useAdmin = (postId) => {
  const auth = useSelector((state) => state.auth);
  const post = useSelector((state) => state.posts.find(post => post._id === postId));

  // Verifica si el usuario actual es el creador del post actual
  const isAdmin = post?.creatorId === auth?.user?.usuario?._id;

  return isAdmin;
}

export default useAdmin;