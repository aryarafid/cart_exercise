import React from 'react'
// import CartButton from '../components/CartButton'
import { Box, HStack, Image, Link, InputGroup, Input, InputRightElement, Button, Divider } from '@chakra-ui/react'
import { FaSearch, FaShoppingCart, FaRegBell, FaEnvelope } from "react-icons/fa";
import CartButton from '../components/CartButton'

const Navbar = () => {
    return (
        <>
            <Box>
                <HStack spacing={'5'} padding={5}>
                    <Link href='/'>
                        <Image src='toped.svg' alt='logo toped' />
                    </Link>
                    <Button variant='ghost'>
                        Kategori
                    </Button>
                    <InputGroup size='md'>
                        <Input
                            pr='4.5rem'
                            type='text'
                            placeholder='Search'
                        />
                        <InputRightElement
                            width='4.5rem'
                        >
                            <Button h='1.75rem' size='sm'>
                                {/* <SearchIcon /> */}
                                <FaSearch />
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {/* cartbutton */}
                    <CartButton></CartButton>
                    <Button variant='ghost'>
                        <FaRegBell />
                    </Button>
                    <Button variant='ghost'>
                        <FaEnvelope />
                    </Button>
                    <Button variant='ghost'>
                        Toko
                    </Button>
                    <Button variant='ghost'>
                        Akun
                    </Button>

                </HStack>
            </Box >
            <Divider colorScheme='twitter'></Divider>
        </>
        // <CartButton></CartButton>
    )
}

export default Navbar