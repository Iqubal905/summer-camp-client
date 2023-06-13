
import { useQuery } from "react-query";
import useAuth from "./useAuth";
import { useContext } from "react";

// const {data: allClass = [], refetch} = useQuery(['allClass'], async() => {
//     const res =  await fetch('https://summer-camp-school-server-side-pi.vercel.app/myclass')
//     return res.json()
// })

const useAdmin = () => {
   

    const { user, loading } = useAuth(useAuth);

  const { data: isAdmin, isLoading: isAdminLoading } = useQuery(['isAdmin', user?.email], async () => {
    const res = await fetch(`https://summer-camp-school-server-side-pi.vercel.app/users/admin/${user?.email}`); 
    const data = await res.json();
    console.log('isAdmin res', data);
    return data.admin;
  }, {
    enabled: !loading
  });

  return [isAdmin, isAdminLoading];
}
export default useAdmin;