import React from 'react'
import CartPage from '../components/CartButton'
import { Box, HStack, Image, Link, InputGroup, Input, InputRightElement, Button, Divider } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal
} from '@chakra-ui/react'
import { FaSearch, FaShoppingCart, FaRegBell, FaEnvelope } from "react-icons/fa";


const CartButton = (cartAmount) => {
    return (
        <div>
            <Popover trigger='hover'>
                <PopoverTrigger>
                    <Button variant='ghost'>
                        <Link href='CartPage'>
                            <FaShoppingCart />
                        </Link>
                    </Button>
                </PopoverTrigger>
                <Portal>
                    <PopoverContent>
                        <PopoverArrow />
                        <PopoverHeader>Cart</PopoverHeader>
                        <PopoverBody>
                            <Button colorScheme='blue'>Button</Button>
                        </PopoverBody>
                        <PopoverFooter>This is the footer</PopoverFooter>
                    </PopoverContent>
                </Portal>
            </Popover>

        </div>
    )
}

export default CartButton