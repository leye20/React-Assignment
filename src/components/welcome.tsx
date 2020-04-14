import React from 'react';

export interface IWelcomeProps {
}

interface IWelcomeState {
    firstName: string,
    lastName: string,
    userName: string,
    password: string,
    login: string
}

export default class Welcome extends React.Component<IWelcomeProps, IWelcomeState> {
    constructor ( props: string ) {
        super(props);
        this.state = {
            firstName: "Dwayne",
            lastName: "Jones",
            userName: "",
            password: "",
            login: "login"
        }
    }
updateWelcome = ( event: any ) => {
    event.preventDefault();

    let userNameString: string = "olaleye";
    let passwordString: string = "xxxx";
        
    const inputUserName: HTMLInputElement | null = document.querySelector( '[name="userName"]' );
    const inputPassword: HTMLInputElement | null = document.querySelector( '[name="password"]' );
    const inputFirstName: HTMLInputElement | null = document.querySelector( '[name="firstName"]' );
    
    if ( inputUserName?.value === userNameString && inputPassword?.value === passwordString ) {
            // correct logic
            this.setState({
                firstName: inputFirstName?.value + ' welcome!',
                lastName: "",
                login: "logout"
            })

    } else {
        // incorrect logic
        console.log(inputUserName?.value, inputPassword?.value)
        this.setState( {
            userName: "incorrect username",
            password: "incorrect details" 
        } );
    }
}
    render() {
        return (
            <div className="forms">
                <h2>{this.state.firstName} {this.state.lastName}</h2>
                <h4>{this.state.userName}</h4>
                <p>{this.state.password}</p>
                <form onSubmit={this.updateWelcome}>
                    <h3>Welcome!</h3>
                    <label htmlFor="firstName">firstName:</label>
                    <input type="text" name="firstName" defaultValue={this.state.firstName} />
                    <label htmlFor="lastName">lastName:</label>
                    <input type="text" name="lastName" defaultValue={this.state.lastName} />
                    <label htmlFor="username">username:</label>
                    <input type="text" name="userName" defaultValue={this.state.userName} />
                    <label htmlFor="password">password:</label>
                    <input type="password" name="password" defaultValue={this.state.password} />
                    <input type="submit" value={this.state.login} />
                </form>
            </div>
        );
    }
}
