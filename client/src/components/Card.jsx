import React from 'react'
import styled from 'styled-components'
import moment from 'moment'

function Card({ avatar, username, image, title, caption, created_at }) {
  return (
    <Container>
      <UserSection>
        <AvatarContainer>
          <img src={avatar} alt="avatar" />
        </AvatarContainer>
        <UserName>
          {username} <span> at {moment(created_at).fromNow()}</span>
        </UserName>
      </UserSection>
      <PostImageContainer>
        <img src={image} alt="image" />
      </PostImageContainer>
      <Caption>
        <h1>{title}:</h1>
        <p>{caption}</p>
      </Caption>
    </Container>
  )
}

const Container = styled.div`
  background-color: #444444;
  height: 50rem;
  width: 30%;
  border-radius: 1rem;
`

const UserSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  height: 20%;
  width: 100%;
  border-bottom: 1px solid white;
  padding: 0 5%;
`

const AvatarContainer = styled.div`
  position: relative;
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

const UserName = styled.h4`
  font-size: 2rem;
  color: aqua;
  span {
    font-size: 1.2rem;
    color: #ffffff;
  }
`

const PostImageContainer = styled.div`
  height: 60%;
  position: relative;
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`

const Caption = styled.div`
  padding: 1rem;
  h1 {
    font-size: 1.8rem;
    color: #ffffff;
  }

  p {
    color: magenta;
    font-size: 1.5rem;
  }
`

export default Card
