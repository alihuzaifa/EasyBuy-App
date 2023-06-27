import GreetMessage from '../../components/Greet';
const AccountCreated = () => {

    return (
        // <GreetMessage
        //     image={require('../../assets/image/cross.png')}
        //     heading={'SORRY'}
        //     text={'Something went wrong. Please try again to continue your order.'}
        //     btnText={'TRY AGAIN'}
        // />
        // <GreetMessage
        //     image={require('../../assets/image/tick.png')}
        //     heading={'SUCCESSFUL'}
        //     text={'Your order will be delivered on time.'}
        //     btnText={'VIEW ORDER'}
        // />
        // <GreetMessage
        //     image={require('../../assets/image/cart.png')}
        //     heading={"EMPTY CART!"}
        //     text={'Looks like you have not made your order yet.'}
        //     btnText={'SHOP NOW'}
        // />
        // <GreetMessage
        //     image={require('../../assets/image/key.png')}
        //     heading={"PASSWORD RESET!"}
        //     text={'Your Password had been Reset!.'}
        //     btnText={'SHOP NOW'}
        // />
        <GreetMessage
            image={require('../../assets/image/lock.png')}
            heading={'ACCOUNT CREATED'}
            text={'Your account had been created successfully'}
            btnText={'SHOP NOW'}
        />
    )
}

export default AccountCreated