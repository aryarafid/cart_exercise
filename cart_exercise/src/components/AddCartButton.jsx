import React from 'react'
import {
    Box, HStack, Image, Link, InputGroup, Input, InputRightElement, Button, Divider, Text,
    CardBody,
    Card,
    CardFooter,
    Stack, Heading, ButtonGroup
} from '@chakra-ui/react'

const AddCartButton = () => {
    return (
        <div>
            <Button variant='solid' colorScheme='green' spacing='2'>
                Add to cart
            </Button>
        </div>
    )
}

export default AddCartButton