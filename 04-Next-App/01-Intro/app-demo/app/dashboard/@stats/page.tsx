// "use client";  

const waitFor = (sec: number) => new Promise((res, rej) => setTimeout(res, sec * 1000));    

const StatsPage = async () => {

    await waitFor(8);

    return (
            <h1>Stats Page</h1>
    );
};

export default StatsPage;