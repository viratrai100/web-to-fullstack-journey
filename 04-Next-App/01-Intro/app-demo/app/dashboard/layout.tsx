// const DashboardLayout = ({children}: {children: React.ReactNode}) => {
const DashboardLayout = (props: any) => {
    return (
        <div>
            <nav>
                <h1>Navbar</h1>
            </nav>
            <div>
                {props.children}
                {props.user}
                {props.stats}
            </div>
        </div>
    );
};

export default DashboardLayout;