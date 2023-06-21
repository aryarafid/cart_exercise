import React from 'react'
import Navbar from '../components/Navbar'
import { Box, HStack, Image, Link, InputGroup, Input, InputRightElement, Button, Divider, Text, Container } from '@chakra-ui/react'
import { FaSearch, FaShoppingCart, FaRegBell, FaEnvelope } from "react-icons/fa";
import ProductCard from '../components/ProductCard';
import DogFetcher from '../components/DogFetcher';

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Container w={'100%'}> */}
            <Text fontSize={'2xl'}> Items for sale </Text>
            <ProductCard></ProductCard>
            {/* </Container> */}
            {/* <DogFetcher /> */}
        </div>
    )
}

export default Homepage