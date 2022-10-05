import { useSession } from "next-auth/react";
import { Dispatch, SetStateAction, useEffect } from "react";
import jwt from "jsonwebtoken";
import moment from "moment";

interface RefreshTokenHandlerProps {
    setInterval: Dispatch<SetStateAction<number>>
}

const RefreshTokenHandler = (props : RefreshTokenHandlerProps) => {
    const { data: session } = useSession();

    useEffect(() => {
        if(!!session) {

            // We did set the token to be ready to refresh after 25 minutes, here we set refetch interval of 27 minutes.
            const decodedAccessToken: any = jwt.decode(session.accessToken);
            let expDate: moment.Moment;
            if(decodedAccessToken !== null){
                expDate = moment(decodedAccessToken["exp"] * 1000);
            } else {
                expDate = moment();
            }
            const timeRemaining: number = Math.round(moment.duration(expDate.subtract(4, "minutes").diff(moment())).asSeconds());
            props.setInterval(timeRemaining > 0 ? timeRemaining : 0);
            
        }
    }, [session]);

    return null;
}

export default RefreshTokenHandler;