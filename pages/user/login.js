import Head from 'next/head';

export default function Login() {
    return (
        <div className="container">
            <Head>
                <title>Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <h1 className="title">
                    Login
                </h1>
                <form>
                    <div className="">
                        <input type="text" className="" name="username" label="User Name"></input>
                    </div>
                    <div className="">
                        <input type="password" className="" name="password" label="Password"></input>
                    </div>
                </form>
            </main>
        </div>
    );
};
