
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import { useContext } from "react";

// const {data: allClass = [], refetch} = useQuery(['allClass'], async() => {
//     const res =  await fetch('http://localhost:5000/myclass')
//     return res.json()
// })

const useAdmin = () => {
   

    const { user, loading } = useAuth(useAuth);

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery(['isAdmin', user?.email], async () => {
    const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`); 
    const data = await res.json();
    console.log('isAdmin res', data);
    return data.admin;
  }, {
    enabled: !loading
  });

  return [isAdmin, isAdminLoading];
}
export default useAdmin;