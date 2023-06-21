import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const DogFetcher = () => {
    const fetcher = async () => {
        try {

            // membuat request ke api
            const res = await fetch("https://dog.ceo/api/breeds/list/all");

            // parsing data json ke object JS
            const json = await res.json()
            console.log(json.message);
            setDogs(json.message);
        }
        catch (error) {
            console.log(err);
        }
    }

    // agar bisa fetch api terus menerus
    useEffect(() => {
        fetcher(), []
    })

    return (
        <div>
            {/* <Box>{dogs}</Box> */}
        </div>
    )
}

export default DogFetcher