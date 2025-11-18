const UsersPage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Users Page (SSG)</h1>
            {
                props.data.users.map((user) => (<li key={user.id}>{user.firstName}</li>))
            }
        </div>
    );
};

export const getStaticProps = async () => {
    const data =await ( await fetch("https://dummyjson.com/users")).json()
    return {
        props: {
            data,
        }
    }
};

export default UsersPage;