import { useEffect, useState } from 'react'
import styled from 'styled-components'

import Card from './components/Card'

import { read } from './services/api/post'
function App() {
  const [posts, setPosts] = useState([])
  const [skip, setSkip] = useState(0)

  useEffect(() => {
    fetchPosts()
  }, [skip])

  const fetchPosts = async () => {
    try {
      const { data, error } = await read(skip)
      if (error) {
        console.log(error)
      }

      setPosts([...posts, ...data])
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target

    if (offsetHeight + scrollTop >= scrollHeight) {
      setSkip(posts?.length)
    }
  }

  return (
    <div className="App">
      <Container>
        <Header>
          <h1>MERN INFINITE SCROLL</h1>
          <p>Scroll and load scrolling</p>
        </Header>
        <PostContainer onScroll={handleScroll}>
          {posts?.map((post) => (
            <Card key={post._id} {...post} />
          ))}
        </PostContainer>
      </Container>
    </div>
  )
}

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 8rem 0;
`

const Header = styled.header`
  text-align: center;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.5rem;
  }
`

const PostContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100vh;
  overflow: scroll;

  & > * {
    margin-bottom: 3rem;
  }
`

export default App
