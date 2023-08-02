import React from 'react'
import { styled } from 'styled-components'
import { useTanArticle } from '../../hooks/useAuthor'
import { useSelector } from "react-redux"
import { CiSaveDown2 } from "react-icons/ci"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { AiOutlineMinusCircle } from "react-icons/ai"


const HomePage = () => {
    const userID = useSelector((state: any) => state.appUser)

    const { article }: any = useTanArticle(userID)

    console.log(userID);

    return (

        <Container>

            <Main>


                <Screen1>
                    <Top>
                        <Avatar />
                        <Name>
                            <Title>name</Title>
                            <Created>Oct 3, 2019</Created>
                        </Name>
                    </Top>

                    <Holder>
                        <div>
                            <ArticleTitle>How To Wake Up at 5 A.M. Every Day</ArticleTitle>
                            <Description>An unconventional and compassionate guide to becoming an early bird — I thought I was destined to be a night owl forever. I’m no stranger to reading about the benefits of waking up early or having the same</Description>
                        </div>
                        <Image />
                    </Holder>

                    <br />
                    <br />
                    <br />


                    <Cat>
                        <Div>
                            <Category>category</Category>
                            <Read>4mins read</Read>
                        </Div>
                        <Div1>
                            < Icon1 />
                            < Icon2 />
                            < Icon3 />
                        </Div1>
                    </Cat>

                    <br />
                    <br />

                    <LineHolder>
                        <Line />
                    </LineHolder>

                </Screen1>

                <Screen2>
                    <br />
                    <TextContext>Interesting Articles</TextContext>

                    <Pick>
                        <ProfileII>
                            <Avatar1 />
                            <ProfileName>name</ProfileName>
                        </ProfileII>

                        <ArticlePick>
                            Special Report: Extreme Heat and Human Health
                        </ArticlePick>
                    </Pick>

                    <br />
                    <br />
                    <br />
                    <TextContext>Recommended Categories</TextContext>

                    <CatergoryHolder>
                        <BestCat>Data Science</BestCat>
                        <BestCat>Data Science</BestCat>
                        <BestCat>Data Science</BestCat>
                        <BestCat>Data Science</BestCat>

                    </CatergoryHolder>

                    <br />
                    <br />
                    <br />
                    <TextContext>Who to Follow</TextContext>

                    <Pick1>
                        <Avatar1 />
                        <ProfileIII>
                            <div>
                                <ProfileNameI>name</ProfileNameI>

                                <ArticlePickI>
                                    Special Report: Extreme Heat and Human Health
                                </ArticlePickI>

                            </div>
                            <But>Follow</But>
                        </ProfileIII>


                    </Pick1>
                </Screen2>
            </Main>
            </Container>

    )
}

export default HomePage

const CatergoryHolder = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin-top: 10px;
`

const BestCat = styled.div`
padding: 8px 15px;
border-radius: 20px;
background-color: var(--appBorderL);
margin: 8px;
font-size: 12px;
`

const TextContext = styled.div`
font-weight: 700;
`

const But = styled.div`
border: 1px solid var(--appBorder);
border-radius: 30px;
padding: 5px 8px;
height: 20px;
margin-left: 10px
`

const ProfileNameI = styled.div`
font-weight: 600;
`

const ArticlePickI = styled.div`
font-size: 12px;
`

const ProfileIII = styled.div`
width:86%;
align-items: center;
display: flex;
`

const Pick1 = styled.div`
display:flex;
margin-top: 20px;
`


const ArticlePick = styled.div`
font-weight: 700;
width: 100%;
margin-top: 10px;
`

const ProfileName = styled.div`
font-weight: 600;
font-size: 12px;
`

const Avatar1 = styled.img`
width: 25px;
height: 25px;
border: 1ps solid silver;
border-radius: 50%;
object-fit: cover;
background-color: purple;
margin-right: 10px
`

const ProfileII = styled.div`
display: flex;
align-items: center;
`

const Pick = styled.div`

margin-top: 40px;
`

const Screen2 = styled.div`
width: 300px;
`

const ScreenHolder = styled.div`
width: 100%;
display:flex;
justify-content: center;
`

const LineHolder = styled.div`
width: 100%;
display:flex;
justify-content: center;
`

const Line = styled.div`
border-bottom: 1px solid var(--appBorder);
width: 90%
`


const Icon3 = styled(BiDotsHorizontalRounded)`cursor: pointer;`
const Icon2 = styled(AiOutlineMinusCircle)`cursor: pointer;`
const Icon1 = styled(CiSaveDown2)`
cursor: pointer;
`


const Category = styled.div`

padding: 5px 12px ;
border-radius: 30px;
color: var(--appBG);
background-color: var(--appText);

`

const Read = styled.div`
margin-left: 10px;
`

const Div1 = styled.div`
display: flex;
align-items: center;
font-size: 25px;
width: 100px;
justify-content: space-between;
color: #b3b2b2
`

const Div = styled.div`
display: flex;
align-items: center;
`

const Cat = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 98%;
`

const Holder = styled.div`
display: flex;
align-items: center;
width: 98%;
`

const Image = styled.div`
width: 500px;
height: 150px;
background-color: purple;

`

const Description = styled.div`
width: 94%;
margin-top: 10px;
`

const ArticleTitle = styled.div`
font-weight: 700;
font-size: 22px;
margin-top: 20px;
letter-spacing: 0.1px;
`

const Created = styled.div`
font-size: 13px;
`

const Title = styled.div`
margin-right: 10px;
font-weight: 300;
`

const Name = styled.div`
display: flex;
align-items: center;
height: 30px
`

const Avatar = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
border: 1px solid var(--appBorder);
object-fit: cover;
margin-right: 10px
`

const Top = styled.div`
margin-top: 20px;
display:flex;
align-items: center;
`

const Screen1 = styled.div`
width: 75%;
border-right: 1px solid var(--appBorder);
margin:0 10px;
`

const Main = styled.div`
display: flex;
width: 100%;

`

const Container = styled.div`
display:flex;
width: 100%;
`