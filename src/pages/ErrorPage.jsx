import React from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../components/Breadcrumb";

const ErrorPage = () => {
    return (
        <div className="w-full">
            <Breadcrumb />
            <div className="max-w-screen-xl mx-auto px-6 py-12 exo-text">
                <h1 className="text-4xl font-semibold mb-12">Error</h1>
                <img src="/images/Error.svg" alt="Error" />
            </div>
        </div>
    );
};

export default ErrorPage;
