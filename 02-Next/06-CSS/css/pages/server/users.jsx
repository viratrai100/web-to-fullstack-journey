const UserPage = (props) => {
    console.log("Props", props);
    return (
        <div>
            <h1>Users (SSR)</h1>
            {
                props.data.users.map((user) => (<li key={user.id}>{user.firstName}</li>))
            }
        </div>
    );
};

// export a function to do ssr in next.js
// export karte hain kisi bhi page pe to -> next.js aapne aap samjh jayega ki aap usko server pe render karna chahte ho.
export const getServerSideProps = async () => {
    // console.log("A task is going on in server");
    const data =await ( await fetch("https://dummyjson.com/users")).json()
    return {
        props: {
            // name: "Virat"
            data,
        }
    }
};

export default UserPage;