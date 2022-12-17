import React from 'react';
import Header from "../Header/Header";
import Head from "next/head";

const LayOut = ({children}) => {
    return (
     <>
         <Head>
             <title>Post-Challenge</title>
             <meta name="post-challenge" content="Generated by Ehsan samimi Rad" />
             <meta name="viewport" content="width=device-width, initial-scale=1" />
             <link rel="icon" href="/favicon.ico" />
         </Head>
         <Header/>
         {
             children
         }

     </>
    );
};

export default LayOut;