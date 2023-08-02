import React from 'react'
import { styled } from 'styled-components'
import { useTanArticle } from '../../hooks/useAuthor'
import { useSelector } from "react-redux"

const HomePage = () => {
    const userID = useSelector((state: any) => state.appUser)

    const { article }: any = useTanArticle(userID)

    console.log(userID);

    return (
        <div>
            <Container>
                <Main>
                    <Text>Home</Text>
                </Main>
            </Container>
        </div>
    )
}

export default HomePage

const Text = styled.div`
padding-left: 10px
`

const Main = styled.div`

`

const Container = styled.div`


`