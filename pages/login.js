import Head from 'next/head'
import { render } from 'react-dom';

export default Login = () => {
    render(
        <div className="container">
            <Head>
                <title>Login Kanji List</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    );
};
