import React from 'react';
import { MDXProvider } from "@mdx-js/react";
import { SiteLayout } from '../components/site-layout/SiteLayout';
import '../styles/global.css';


const componentReplacements = {
    h1: (props) => <h1 className="hello" {...props}>{props.children}</h1>,
}

export default function App({ Component, pageProps }) {
    return (
        <MDXProvider components={componentReplacements}>
            <SiteLayout>
                <Component {...pageProps} />
            </SiteLayout>
        </MDXProvider >
    );
}