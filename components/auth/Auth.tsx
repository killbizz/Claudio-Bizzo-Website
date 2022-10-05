import { useSession } from "next-auth/react";
import Router from 'next/router'
import Layout from "../Layout";

const Auth = ({ children } : any) => {
    // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
    const { status } = useSession(
        {   
            required: true, 
            onUnauthenticated() {
                // The user is not authenticated, handle it here.
                Router.push("/");
            }
        });
  
    if (status === 'loading') {
      return (
        <Layout title="Loading...">
            <div className="mid">
                <h1 className="text-center my-5">Loading...</h1>
            </div>
        </Layout>
      );
    }
    
    return children;
};

export default Auth;