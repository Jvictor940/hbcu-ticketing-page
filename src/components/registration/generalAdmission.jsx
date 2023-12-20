import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PrevNxtButtons from "../../form_components/Buttons/PrevNxtButtons";
import QuantityDropdownField from "../../form_components/Dropdown/QuantityDropdownField";
import CheckoutCart from "./CheckoutCart";

const GeneralAdmission = () => {
    // State to manage the cart
    const [cart, setCart] = useState([]);

    // State to manage the selected quantity and day for each ticket type
    const [selectedTickets, setSelectedTickets] = useState({
        day1: { type: "General Admission - Saturday", quantity: 0, day: '1', price: 2500 },
        day2: { type: "General Admission - Sunday", quantity: 0, day: '2', price: 2500 },
        day3: { type: "General Admission - Saturday & Sunday", quantity: 0, day: '3', price: 4000 },
        // Add more days as needed
    });

    
    // Function to handle the change in quantity and day from the dropdown
    const handleQuantityChange = ({ quantity, day, price, type }) => {
        // Update the selected quantity and day state
        setSelectedTickets(prevState => ({
            ...prevState,
            [day]: { ...prevState[day], quantity: quantity, price: price, type: type },
        }));
    };
    
    // Function to update the cart based on the selected quantity and day
    const addToCart = useCallback(() => {
        console.log('selectedTickets', selectedTickets)
        // Extracting selected tickets
        const selectedTicketTypes = Object.values(selectedTickets);

        // Filtering out ticket types with quantity > 0
        const selectedTicketsToAdd = selectedTicketTypes.filter(ticket => ticket.quantity > 0);

        // Creating an array with the selected tickets
        const ticketsToAdd = selectedTicketsToAdd.flatMap(ticket => (
            Array.from({ length: ticket.quantity }, (_, index) => ({
                label: `Ticket ${index + 1}`,
                price: ticket.price,
                type: ticket.type
            }))    
        ));

        console.log('Tickets', ticketsToAdd);

        // Create a new copy of the cart with the selected tickets
        const updatedCart = [...ticketsToAdd];

        // Update the cart state
        setCart(updatedCart);
    }, [selectedTickets]);

    useEffect(() => {
        // Update the cart when selectedTickets changes
        addToCart();
    }, [addToCart]); // having addToCart in the dependecy array instead of selectedTickets avoids a potential dependency loop. It would trigger a re-render and addToCart would be recreated. We do this approach because of the useCallback.
    /* useCallback memoizes the function it wraps. When you use useCallback with dependencies (in this case, selectedTickets), the memoized function will only be recreated if one of the dependencies changes.
    By including addToCart in the dependency array of useEffect, we are saying, "Re-run the effect whenever addToCart changes." This ensures that the effect reflects the latest version of addToCart if it ever changes. */
    
    // Calculate the total price of the selected tickets in the cart
    const calculateTotalPrice = () => {
        return cart.reduce((total, item) => total + item.price, 0);
    };

    console.log('cart', cart)


    const navigate = useNavigate()

    const checkout = () => {
        navigate('/checkout', { state: { cart, totalPrice: calculateTotalPrice() } })
    }

    const athleteRegistration = () => {
        navigate('/athleteRegistration')
    }
    

    return (
        <div className="form">
            <h2 className="title">General Admission</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta modi placeat, consequatur soluta officiis aperiam corporis mollitia consequuntur facilis enim. Quaerat quis suscipit inventore quos laborum nostrum. Reiciendis, amet modi.</p>

            <h4>Ticket Options</h4>
            <h3>General Admission - Saturday</h3>
            <QuantityDropdownField onQuantityChange={handleQuantityChange} day="day1" price={2500} type="General Admission - Saturday" />
            <h3>General Admission - Sunday</h3>
            <QuantityDropdownField onQuantityChange={handleQuantityChange} day="day2" price={2500} type="General Admission - Sunday" />
            <h3>General Admission Saturday & Sunday</h3>
            <QuantityDropdownField onQuantityChange={handleQuantityChange} day="day3" price={4000} type="General Admission - Saturday & Sunday" />
            {/* <button onClick={addToCart}>Update Cart</button> */}

            <section>
                {Array.isArray(cart) && cart.length > 0 && <CheckoutCart cart={cart} totalPrice={calculateTotalPrice()} />}
            </section>
            

            <PrevNxtButtons prevPage={athleteRegistration} nxtPage={checkout} nextBtn='Continue To Checkout' />
            
        </div>
    )
}

export default GeneralAdmission;