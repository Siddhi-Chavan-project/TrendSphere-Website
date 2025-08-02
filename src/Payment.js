import React, { useState } from 'react';
import "./Payment.css";

function Payment() {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardExpiry, setCardExpiry] = useState('');
    const [upiId, setUpiId] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery'); // Default payment method
    const [processingPayment, setProcessingPayment] = useState(false);
    const [paymentComplete, setPaymentComplete] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false); // To track if the order is placed

    const handlePayment = async () => {
        // Simulate payment processing (replace with actual payment integration)
        setProcessingPayment(true);
        await simulatePaymentProcessing();
        setProcessingPayment(false);
        setPaymentComplete(true);
        if (paymentMethod === 'cashOnDelivery') {
            setOrderPlaced(true); // Set orderPlaced to true when payment is successful
        }
    };

    const simulatePaymentProcessing = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 2000); // Simulate a 2-second payment processing time
        });
    };

    return (
        <div className="payment-container">
            <h2>Payment Information</h2>
            <div className="payment-form">
                {/* Payment method selection */}
                <div>
                    <input
                        type="radio"
                        id="online"
                        name="paymentMethod"
                        value="online"
                        checked={paymentMethod === 'online'}
                        onChange={() => setPaymentMethod('online')}
                    />
                    <label htmlFor="online">Online Payment</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="cashOnDelivery"
                        name="paymentMethod"
                        value="cashOnDelivery"
                        checked={paymentMethod === 'cashOnDelivery'}
                        onChange={() => setPaymentMethod('cashOnDelivery')}
                    />
                    <label htmlFor="cashOnDelivery">Cash on Delivery</label>
                </div>
                {/* Payment method specific input fields */}
                {paymentMethod === 'online' && (
                    <>
                        <div>
                            <input
                                type="radio"
                                id="creditCard"
                                name="onlinePaymentMethod"
                                value="creditCard"
                                checked={paymentMethod === 'creditCard'}
                                onChange={() => setPaymentMethod('creditCard')}
                            />
                            <label htmlFor="creditCard">Credit Card</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="debitCard"
                                name="onlinePaymentMethod"
                                value="debitCard"
                                checked={paymentMethod === 'debitCard'}
                                onChange={() => setPaymentMethod('debitCard')}
                            />
                            <label htmlFor="debitCard">Debit Card</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="googlePay"
                                name="onlinePaymentMethod"
                                value="googlePay"
                                checked={paymentMethod === 'googlePay'}
                                onChange={() => setPaymentMethod('googlePay')}
                            />
                            <label htmlFor="googlePay">Google Pay</label>
                        </div>
                    </>
                )}
                {paymentMethod === 'googlePay' && (
                    <input
                        type="text"
                        placeholder="Enter UPI ID"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                    />
                )}
                {['creditCard', 'debitCard'].includes(paymentMethod) && (
                    <>
                        <input
                            type="text"
                            placeholder="Card Number"
                            value={cardNumber}
                            onChange={(e) => setCardNumber(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Cardholder Name"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Expiry Date (MM/YY)"
                            value={cardExpiry}
                            onChange={(e) => setCardExpiry(e.target.value)}
                        />
                    </>
                )}

                {/* Place Order button */}
                <button onClick={handlePayment} disabled={processingPayment}>
                    {processingPayment ? 'Processing...' : 'Place Order '}
                </button>
            </div>
            {/* Display success message based on payment method */}
            {paymentComplete && (
                <div className="success-message">
                    {orderPlaced && paymentMethod === 'cashOnDelivery' ? (
                        <p>Order Placed Successfully. Thank you for shopping with us!</p>
                    ) : (
                        <p>Payment Successful. Thank you for shopping with us!</p>

                    )}
                </div>
            )}
        </div>
    );
}

export default Payment;
