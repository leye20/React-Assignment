import React from 'react';

export interface IWelcomeProps {

}

export interface IWelcomeState {
    firstName: string,
    lastName: string,
    userName: string,
    password: string
}

export default class Welcome extends React.Component<IWelcomeProps, IWelcomeState, any> {
    constructor ( props: string | boolean ) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            password: ""
        }
    }
    updateWelcome = ( event: any ) => {
        event.preventDefault();

        let userNameString: string = "olaleye",
            passwordString: string = "mayWorks123"
        
        const userName: HTMLInputElement | null = document.querySelector( '[name="userName"]' );
        const password: HTMLInputElement | null = document.querySelector( '[name="password"]' );

        if ( userName === null )
            userNameString = '';
        else
            userNameString = userName.value;

        if ( password === null )
            passwordString = '';
        else
            passwordString = password.value;

        this.setState( {
            userName: userNameString,
            password: passwordString,
           } );
        }
    onClickLogin = () => {
        this.setState( {
            userName: this.state.userName,
            password: this.state.password,
            
            } );
        }

    render() {
        return (
            <div>
                <h2>{this.state.firstName} {this.state.lastName}</h2>
                <p>{this.state.userName} That</p>
                <p>{this.state.password}</p>
                <form>
                    <h3>Welcome!</h3>
                    <label htmlFor="username">username:</label>
                    <input type="text" name="username" defaultValue={this.state.userName} />
                    <label htmlFor="password">password:</label>
                    <input type="text" name="password" defaultValue={this.state.password} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}
