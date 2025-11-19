const UserPage = (props) => {
    // console.log(props.data);
    return (
        <div>
            <h1>Profile Page Of {props.data.firstName} </h1>
        </div>
    );
}

export const getStaticPaths = async () => {
    // fetching all users 
    const data = await (await fetch(`https://dummyjson.com/users/`)).json();
    const allUserIds = data.users.map((user) => `${user.id}`);
    // console.log("AllUsersIds", allUserIds);
    return {
        // generate tatic page for each user
        paths: allUserIds.map((userId) => ({params: {id: userId}})),
        // hardcore for only 2 user 
        // paths: [{ params: {id: "1"}}, { params: {id: "2"}}],
        fallback: false,
    };
};


// for api call -> passing context as parameter
export const getStaticProps = async(context) => {
    // const id = context.query.id;  // id -> our route name is id.
    const id = context.params.id;  // id -> our route name is id.
    const data = await (await fetch(`https://dummyjson.com/users/${id}`)).json();
    return{
        props: {
            data,
        }
    }
}

export default UserPage;