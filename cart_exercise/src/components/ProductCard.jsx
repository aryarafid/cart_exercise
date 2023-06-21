import React from 'react'
import {
    Box, HStack, Image, Link, InputGroup, Input, InputRightElement, Button, Divider, Text,
    CardBody,
    Card,
    CardFooter,
    Stack, Heading, ButtonGroup
} from '@chakra-ui/react'
import { Wrap, WrapItem } from '@chakra-ui/react'
import Data from '../assets/data.json'
import AddCartButton from './AddCartButton'

const ProductCard = () => {
    return (
        <div>
            <HStack>
                <Wrap>
                    {Data.map(data => (
                        <Card maxW='sm' key={data.id}>
                            <CardBody>
                                <Image src={data.images} borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>{data.title}</Heading>
                                    <Text>
                                        {data.description}
                                    </Text>
                                    <Text color='green.600' fontSize='2xl'>
                                        Rp {data.price}
                                    </Text>
                                </Stack>

                            </CardBody>
                            <Divider />
                            <CardFooter>
                                {/* <ButtonGroup spacing='2'> */}
                                <AddCartButton></AddCartButton>
                                {/* </ButtonGroup> */}
                            </CardFooter>
                        </Card>
                    ))}
                </Wrap>
            </HStack>
        </div>
    )
}

export default ProductCard