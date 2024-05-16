import { useParams } from "react-router-dom";

const UserDetails = () => {
    // const params = useParams()
    // const userId = params.userId
    const { userId } = useParams()
    return (
        <div> 
            Details about users {userId}
        </div>

    );
};

export default UserDetails;