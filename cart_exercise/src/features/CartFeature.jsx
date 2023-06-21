import React from "react";
import { Button, Text, Input } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { addToCart } from "./cartSlice";

export const CartFeature = () => {
    const cartArray = useSelector((globalState) => globalState.cartSlice.value);
    const dispatch = useDispatch();
    // const count1 = useSelector((globalState) => globalState.number.number);

    const tambahCustom = () => {
        const value = +document.getElementById("number").value;
        dispatch(incrementByAmount(value));
    };

    return (
        <div>
            {/* <Button onClick={() => dispatch(increment())}>Increment</Button>
            <Text>{count}</Text> */}
            <Button onClick={() => dispatch(addToCart())}>Add to cart</Button>
        </div>
    );
};