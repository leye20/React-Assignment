import React from 'react';

export interface IWelcomeProps {
}

interface IWelcomeState {
    firstName: string,
    lastName: string,
    userName: string,
    password: string
}

export default class Welcome extends React.Component<IWelcomeProps, IWelcomeState> {
    constructor ( props: string ) {
        super(props);
        this.state = {
            firstName: "Dwayne",
            lastName: "Jones",
            userName: "",
            password: ""
        }
    }
    updateWelcome = ( event: any ) => {
        event.preventDefault();

        const userNameString: string = "olaleye";
        const passwordString: string = "xxxx";
        
        const inputUserName: HTMLInputElement | null = document.querySelector( '[name="userName"]' );
        const inputPassword: HTMLInputElement | null = document.querySelector( '[name="password"]' );

        if ( inputUserName?.value === userNameString && inputPassword?.value === passwordString ) {
            // correct logic
            
        } else {
            // incorrect logic
            this.setState( {
                    userName: "incorrect username",
                    password: "incorrect details" 

                   } );
                }
            }
            
        
        // userNameString = '';
        // else
        //     userNameString = userName.value;

        // if ( password === null )
        //     passwordString = '';
        // else
        //     passwordString = password.value;

        // this.setState( {
        //     userName: userNameString,
        //     password: passwordString
        //    } );
        // }
    
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
                    <input type="text" name="username" defaultValue={this.state.userName} />
                    <label htmlFor="password">password:</label>
                    <input type="password" name="password" defaultValue={this.state.password} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}
