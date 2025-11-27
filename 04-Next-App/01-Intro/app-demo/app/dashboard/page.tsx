// "use client";  

const DashBoardPage = () => {

    // async function sayHello() {
    //     "use server";
    //     console.log("Hello ! , mai function ki taraf se hello bo rha hu");
    // }

    // now for form 

    async function sayHello(params: any) {
        "use server";
        console.log(params);
    }

    // console.log("Hey ! Mai Server side Render hua hu ");
    // console.log("Hey ! Mai Client side Render hua hu - use client ka use karke");
    return (
        <div>
            <h1>Dashboard Page
                {/* <button>Say Hello</button> */}

                <form action={sayHello}>
                    <input type="email" name="email" />
                    <button>Submit</button>
                </form>
            </h1>
        </div>
    );
};

export default DashBoardPage;