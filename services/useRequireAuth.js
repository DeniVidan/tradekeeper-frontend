import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const useRequireAuth = () => {
  const router = useRouter();
  const pathname = usePathname();
  /* const {token} = localStorage.getItem('user'); */
  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem('user'));
    const token = userObj?.token;
    //console.log("daj mi token: ", token, pathname)

    // If the user has a token in localStorage, redirect them away from /login and /register routes
    if (token && (pathname === '/login' || pathname === '/register')) {
      router.replace('/');
    }

    // If the user doesn't have a token in localStorage, redirect them to /login for all other routes
    if (token == undefined && pathname !== '/login' && pathname !== '/register') {
      router.replace('/login');
    }
  }, [pathname]);
};



export default useRequireAuth;