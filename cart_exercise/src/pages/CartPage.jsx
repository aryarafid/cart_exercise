import React from 'react'
import Navbar from '../components/Navbar'
import { Box, HStack, Image, Link, InputGroup, Input, InputRightElement, Button, Divider, Text } from '@chakra-ui/react'
import { FaSearch, FaShoppingCart, FaRegBell, FaEnvelope } from "react-icons/fa";


const CartPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Text fontSize={'2xl'}> Cart Page </Text>

        </div>
    )
}

export default CartPage