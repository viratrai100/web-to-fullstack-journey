
const waitFor = (sec: number) => new Promise((res, rej) => setTimeout(res, sec * 1000));    // for loading
// const waitFor = (sec: number) => new Promise((res, rej) => setTimeout(rej, sec * 1000));    // for error

const UserPage = async () => {

    await waitFor(4);
    return (
        <h1>User Page</h1>
    );
};

export default UserPage;