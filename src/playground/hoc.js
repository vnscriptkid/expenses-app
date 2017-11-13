import React from 'react';
import ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} </p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info. Please dont share </p>
            <WrappedComponent />
        </div>
    )         
    
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {!props.isAuthenticated ? 
            <div>
                You need to be authenticated before you can see the info
            </div>
            :
            <WrappedComponent {...props}/>            
            }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);



ReactDOM.render(<AuthInfo isAuthenticated={false} info="There are the details" />, document.getElementById('root'));